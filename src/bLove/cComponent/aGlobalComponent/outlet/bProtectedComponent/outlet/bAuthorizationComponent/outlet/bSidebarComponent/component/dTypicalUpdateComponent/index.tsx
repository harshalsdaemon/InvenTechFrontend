import React, { useEffect } from "react"

import { z } from "zod"
import { useNavigate } from "react-router-dom"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"


import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/aConnection/bShadcnConnection/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/aConnection/bShadcnConnection/components/ui/select"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import { Input } from "@/aConnection/bShadcnConnection/components/ui/input"
import { Textarea } from "@/aConnection/bShadcnConnection/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/aConnection/bShadcnConnection/components/ui/radio-group"
import { Checkbox } from "@/aConnection/bShadcnConnection/components/ui/checkbox"
import { Separator } from "@/aConnection/bShadcnConnection/components/ui/separator"
import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast"
import { Label } from "@/aConnection/bShadcnConnection/components/ui/label"
import { ScrollArea, ScrollBar } from "@/aConnection/bShadcnConnection/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/aConnection/bShadcnConnection/components/ui/table"
import SingleImageUploadComponent from "./component/bSingleImageUploadComponent"


type TypicalUpdateComponentType = {
  ReduxCall: any
  APICall: {
    retrieveAPIResponse: any,
    updateAPITrigger: any,
    updateAPIResponse: any,
  }
  extras: {
    apiResponseHandler: {
      updateAPIResponseHandler: any
    },
    data: any,
    formSchema: any,
    formDefaultValue: any,
    previousValue: any,
  }
  params: any
}

const TypicalUpdateComponent = (props: TypicalUpdateComponentType) => {
  // Destructure Props
  const { APICall, extras, params } = props;

  // Variable
  const navigate = useNavigate()

  // Form
  const form = useForm<z.infer<typeof extras.formSchema>>({
    resolver: zodResolver(extras.formSchema),
    mode: "onChange",
    defaultValues: extras.formDefaultValue
  })

  // Watch the entire form data
  const watchedData = form.watch(); // This will trigger on every form change

  // Log watched data to console
  useEffect(() => {
    console.log("Current form data:", watchedData);
  }, [watchedData]); // Re-run this effect whenever form data changes  

  // Submit Handler
  const onSubmit = async (data: z.infer<typeof extras.formSchema>) => {
    console.log(data)

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

    extras.apiResponseHandler.updateAPIResponseHandler(data, APICall.updateAPITrigger, form, navigate, params)
    // extras.apiResponseHandler.updateAPIResponseHandler(data, ReduxCall, APICall.updateAPITrigger, form, navigate)
  }  
  
  // All Render
  // First Render
  useEffect(() => {
    APICall.retrieveAPIResponse.isLoading ? null : 
    APICall.retrieveAPIResponse.isError ? null :
    APICall.retrieveAPIResponse.isSuccess ? (
      APICall.retrieveAPIResponse.data.success ? (
        extras.previousValue(form)
      ) : null
    ) : null
  }, [APICall.retrieveAPIResponse])    

  // JSX
  return (
    <React.Fragment>
      <div className="flex-1 lg:max-w-2xl">
        <div className="mb-8" >
          <h2 className="text-3xl font-bold tracking-tight">{extras.data.header.title}</h2>
          <p className="text-muted-foreground">
            {extras.data.header.subtitle}
          </p>
        </div>

        <div className="mx-auto grid flex-1 auto-rows-max gap-4">
          {
            APICall.retrieveAPIResponse.isLoading ? "Loading..." : 
            APICall.retrieveAPIResponse.isError ? "Error..." :
            APICall.retrieveAPIResponse.isSuccess ? (
              <React.Fragment>
                {
                  APICall.retrieveAPIResponse.data.success ? (
                    <React.Fragment>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                          {extras.data.content.sections?.filter((eachSection: any) => eachSection.display)?.map((eachSection: any, indexSection: number) => eachSection.display && (
                            <React.Fragment key={indexSection} >
                              <div>
                                <h3 className="text-lg font-medium">{indexSection+1}) {eachSection.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{eachSection.subtitle}</p>
                                <Separator />
                              </div>
                
                              <div className="space-y-8">
                                {eachSection.inputs.map((eachInput: any, indexInput: any) => (
                                  <React.Fragment>
                                    {/* For I/P Type: Text, Email, Number */}
                                    {((eachInput.type === "text" || eachInput.type === "email" || eachInput.type === "number") && 
                                      <div className="grid gap-3" key={indexInput} >
                                        <FormField
                                          control={form.control}
                                          name={eachInput.name}
                                          render={({ field }) => (
                                            <FormItem>
                                              <FormLabel>{eachInput.label} :</FormLabel>
                                              <FormControl>
                                                <Input placeholder={eachInput.placeholder} {...field} />
                                              </FormControl>
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />
                                      </div>
                                    )}

                                    {/* For I/P Type: Single Image File */}
                                    {((eachInput.type === "single-image-file") && 
                                      <React.Fragment key={indexInput} >
                                        <SingleImageUploadComponent form={form} eachInput={eachInput} />
                                      </React.Fragment>
                                    )}

                                    {/* For I/P Type: Textarea */}
                                    {((eachInput.type === "textarea") && 
                                      <div className="grid gap-3" key={indexInput} >
                                        <FormField
                                          control={form.control}
                                          name={eachInput.name}
                                          render={({ field }) => (
                                            <FormItem>
                                              <FormLabel>{eachInput.label} :</FormLabel>
                                              <FormControl>
                                                <Textarea className="min-h-24" placeholder={eachInput.placeholder} {...field} />
                                              </FormControl>
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />
                                      </div>
                                    )}

                                    {/* For I/P Type: Select */}
                                    {((eachInput.type === "select") && 
                                      <div className="grid gap-3" key={indexInput} >
                                        <FormField
                                          control={form.control}
                                          name={eachInput.name}
                                          render={({ field }) => (
                                            <FormItem>
                                              <FormLabel>{eachInput.label} :</FormLabel>
                                              <Select onValueChange={field.onChange} >
                                                <FormControl>
                                                  <SelectTrigger>
                                                    <SelectValue placeholder={eachInput.placeholder} />
                                                  </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>{
                                                  eachInput.options?.map((eachOption: any, indexOption: number) => (
                                                    <SelectItem key={indexOption} value={eachOption.value}>{eachOption.label}</SelectItem>
                                                  ))
                                                }</SelectContent>
                                              </Select>
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />
                                      </div>
                                    )}

                                    {/* For I/P Type: Radio */}
                                    {((eachInput.type === "radio") && 
                                      <div className="grid gap-3" key={indexInput} >
                                        <FormField
                                          control={form.control}
                                          name={eachInput.name}
                                          render={({ field }) => (
                                            <FormItem className="space-y-3">
                                              <div className="mb-4">
                                                <FormLabel>{eachInput.label}:</FormLabel>
                                                <FormDescription>
                                                  {/* Select the items you want to. */}
                                                </FormDescription>
                                              </div>
                                              <FormControl>
                                                <RadioGroup
                                                  onValueChange={field.onChange}
                                                  defaultValue={field.value}
                                                  className="flex flex-col space-y-1"
                                                >
                                                  {eachInput.options?.map((each: any, index: number) => (
                                                    <React.Fragment key={index} >
                                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                          <RadioGroupItem value={each.value} />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                          {each.label}
                                                        </FormLabel>
                                                      </FormItem>
                                                    </React.Fragment>
                                                  ))}
                                                </RadioGroup>
                                              </FormControl>
                                              <FormMessage />
                                            </FormItem>                            
                                          )}
                                        />
                                      </div>
                                    )}

                                    {/* For I/P Type: Checkbox */}
                                    {((eachInput.type === "checkbox") &&
                                      <div className="grid gap-3" key={indexInput} >
                                        <FormField
                                          control={form.control}
                                          name={eachInput.name}
                                          render={() => (
                                            <FormItem>
                                              <div className="mb-4">
                                                <FormLabel>{eachInput.label}:</FormLabel>
                                                <FormDescription>
                                                  {/* Select the items you want to. */}
                                                </FormDescription>
                                              </div>
                                              {eachInput.options?.map((each: any, index: number) => (
                                                <FormField
                                                  key={index}
                                                  control={form.control}
                                                  name={eachInput.name}
                                                  render={({ field }) => {
                                                    return (
                                                      <FormItem
                                                        key={index}
                                                        className="flex flex-row items-start space-x-3 space-y-0"
                                                      >
                                                        <FormControl>
                                                          <Checkbox
                                                            checked={field.value?.includes(each.value)}
                                                            onCheckedChange={(checked) => {
                                                              return checked
                                                                ? field.onChange([...field.value, each.value])
                                                                : field.onChange(
                                                                    field.value?.filter(
                                                                      (value: any) => value !== each.value
                                                                    )
                                                                  )
                                                            }}
                                                          />
                                                        </FormControl>
                                                        <FormLabel className="text-sm font-normal">
                                                          {each.label}
                                                        </FormLabel>
                                                      </FormItem>
                                                    )
                                                  }}
                                                />
                                              ))}
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />
                                      </div>

                                    )}

                                    {/* For I/P Type: Special Checkbox */}
                                    {((eachInput.type === "special-checkbox") &&
                                      <div className="grid gap-3" key={indexInput} >
                                        <Label htmlFor="cMenu">Menu:</Label>
                                        <ScrollArea>
                                          <Table>
                                            <TableHeader>
                                              <TableRow>
                                                {eachInput.columns.map((eachColumn: any, indexColumn: any) => (
                                                  <TableHead key={indexColumn} className="min-w-[100px]">
                                                    {eachColumn}
                                                  </TableHead>
                                                ))}
                                              </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                              {eachInput.options?.map((menuOption: any, indexOption: any) => (
                                                <TableRow key={indexOption}>
                                                  <TableCell>{menuOption.label}</TableCell>
                                    
                                                  {['list', 'create', 'retrieve', 'update', 'delete'].map((permission) => (
                                                    <TableCell key={permission}>
                                                      <Controller
                                                        name={`cMenu.${indexOption}.access.${permission}`}
                                                        control={form.control}
                                                        defaultValue={true} // Ensure default value is true
                                                        render={({ field }) => (
                                                          <input 
                                                            type="checkbox"
                                                            {...field} 
                                                            checked={field.value || false} // Reflect checkbox state
                                                            onChange={(e) => {
                                                              // When checkbox is clicked, modify the form's cMenu data
                                                              const newValue = e.target.checked;
                                    
                                                              // Ensure the menu ID is included in the cMenu array
                                                              let updatedData = [...form.getValues().cMenu]

                                                              if (!updatedData[indexOption]) {
                                                                updatedData[indexOption] = { menu: menuOption.id, access: {} }; // Add menu and access if not present
                                                              }
                                    
                                                              updatedData[indexOption].access[permission] = newValue; // Update the corresponding permission
                                    
                                                              // Dynamically update the form state with the new cMenu data
                                                              form.setValue("cMenu", updatedData);
                                                            }}
                                                          />
                                                        )}
                                                      />
                                                    </TableCell>
                                                  ))}
                                                </TableRow>
                                              ))}
                                            </TableBody>
                                          </Table>
                                          <ScrollBar orientation="horizontal" />
                                        </ScrollArea>
                                      </div>
                                    )}

                                  </React.Fragment>
                                ))}
                              </div>
                            </React.Fragment>
                          ))}

                          <Button type="submit">Update</Button>
                        </form>
                      </Form>
                    </React.Fragment>
                  ) : "Backend Error"
                }
              </React.Fragment>
            ) :
            "Let me understand first"
            }
        </div>
      </div>
    </React.Fragment>      
  )
}  

export default TypicalUpdateComponent;
