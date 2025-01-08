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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/aConnection/bShadcnConnection/components/ui/table"
import { ScrollArea, ScrollBar } from "@/aConnection/bShadcnConnection/components/ui/scroll-area"
import { Label } from "@/aConnection/bShadcnConnection/components/ui/label"

import ProductVariantFormComponent from "./component/aProductVariantComponent"
import SingleImageUploadComponent from "./component/bSingleImageUploadComponent"


type TypicalCreateComponentType = {
  ReduxCall: any
  APICall: {
    createAPITrigger: any,
    createAPIResponse: any,

    specialListAPIResponse?: any,
    
    special1CreateAPITrigger?: any,
    special1CreateAPIResponse?: any,
    
    special2CreateAPITrigger?: any,
    special2CreateAPIResponse?: any,
    
    special3CreateAPITrigger?: any,
    special3CreateAPIResponse?: any,
  }
  extras: {
    apiResponseHandler: {
      createAPIResponseHandler: any
    },
    data: any,
    formSchema: any,
    formDefaultValue: any,
    specialPreviousValue?: any
  }
}

const TypicalCreateComponent = (props: TypicalCreateComponentType) => {
  // Destructure Props
  const { APICall, extras } = props;

  // Variable
  const navigate = useNavigate()

  // Form
  const form = useForm<z.infer<typeof extras.formSchema>>({
    resolver: zodResolver(extras.formSchema),
    mode: "onChange",
    defaultValues: extras.formDefaultValue
  })

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

    extras.apiResponseHandler.createAPIResponseHandler(data, APICall.createAPITrigger, form, navigate, {
      special1CreateAPITrigger: APICall.special1CreateAPITrigger,
      special2CreateAPITrigger: APICall.special2CreateAPITrigger,
      special3CreateAPITrigger: APICall.special3CreateAPITrigger
    })
  } 
  
  // All Render
  // First Render
  useEffect(() => {
    if (APICall.specialListAPIResponse) {
      APICall.specialListAPIResponse.isLoading ? null : 
      APICall.specialListAPIResponse.isError ? null :
      APICall.specialListAPIResponse.isSuccess ? (
        APICall.specialListAPIResponse.data.success ? (
          extras.specialPreviousValue(form)
        ) : null
      ) : null
    } else {
      return
    }
  }, [APICall.specialListAPIResponse])    

  // Extra Render
  useEffect(() => {
    console.log("Current form data:", form.watch());
  }, [form.watch()]); 

  // JSX
  return (
    <React.Fragment>
      <div className="flex-1">
        <div className="mb-8" >
          <h2 className="text-3xl font-bold tracking-tight">{extras.data.header.title}</h2>
          <p className="text-muted-foreground">
            {extras.data.header.subtitle}
          </p>
        </div>

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
                      {((eachInput.type === "text" || eachInput.type === "email" || eachInput.type === "number" || eachInput.type === "password") && 
                        <div className="grid gap-3" key={indexInput} >
                          <FormField
                            control={form.control}
                            name={eachInput.name}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{eachInput.label} :</FormLabel>
                                <FormControl>
                                  <Input placeholder={eachInput.placeholder} type={eachInput.type} {...field} />
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

                      {/* For I/P Type: Special Options and Variant Fields */}
                      {((eachInput.type === "special-product-variant") && 
                        <React.Fragment key={indexInput} >
                          <ProductVariantFormComponent form={form} />
                        </React.Fragment>
                      )}

                    </React.Fragment>
                  ))}
                </div>
              </React.Fragment>
            ))}

            <Button type="submit">Create</Button>
          </form>
        </Form>
      </div>
    </React.Fragment>      
  )
}  

export default TypicalCreateComponent;
