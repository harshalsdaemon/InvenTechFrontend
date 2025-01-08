import React, { useEffect } from "react"

import { z } from "zod"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
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
import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast"
import data from "./extras/bData"
import { formSchema } from "./extras/cType"
import fullRoute from "@/bLove/gRoute/bFullRoute"


const formDefaultValue = {
  dSKUID: "",
  dName: "",
  dType: "",
  dStoreViewCode: "",
  dPriceAEDSupplier: "",
  dBarcode: "",
  dMinAlertQuantity: "",
  dAddCategories: "",
  dSupplierName: "",
  dContactPerson: "",
  dContact: "",
  dEmail: "",
  dAddress: "",
  dCountry: "",
  dState: "",
  dCity: "",
  dPin: "",
  dCurrency: "",
}

type ProductCatalogueCreateComponentType = {
  // ReduxCall: any
  // APICall: {
  //   createAPITrigger: any,
  //   createAPIResponse: any,
  //   specialListAPIResponse?: any
  // }
  // extras: {
  //   apiResponseHandler: {
  //     createAPIResponseHandler: any
  //   },
  //   data: any,
  //   formSchema: any,
  //   formDefaultValue: any,
  //   specialPreviousValue?: any
  // }
}

const ProductCatalogueCreateComponent = (_props: ProductCatalogueCreateComponentType) => {
  // // Destructure Props
  // const { APICall, extras } = props;

  // Variable
  // const navigate = useNavigate()

  // Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: formDefaultValue
  })

  // Watch the entire form data
  const watchedData = form.watch(); // This will trigger on every form change

  // Log watched data to console
  useEffect(() => {
    console.log("Current form data:", watchedData);
  }, [watchedData]); // Re-run this effect whenever form data changes

  // Submit Handler
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data)

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

    // extras.apiResponseHandler.createAPIResponseHandler(data, APICall.createAPITrigger, form, navigate)
    // extras.apiResponseHandler.createAPIResponseHandler(data, ReduxCall, APICall.createAPITrigger, form, navigate)
  } 
  
  // All Render
  // First Render
  // useEffect(() => {
  //   if (APICall.specialListAPIResponse) {
  //     APICall.specialListAPIResponse.isLoading ? null : 
  //     APICall.specialListAPIResponse.isError ? null :
  //     APICall.specialListAPIResponse.isSuccess ? (
  //       APICall.specialListAPIResponse.data.success ? (
  //         extras.specialPreviousValue(form)
  //       ) : null
  //     ) : null
  //   } else {
  //     return
  //   }
  // }, [APICall.specialListAPIResponse])    


  // JSX
  return (
    <React.Fragment>
      <div className="flex-1">
        <div className="mb-8" >
          <h2 className="text-3xl font-bold tracking-tight">{data().header.title}</h2>
          <p className="text-muted-foreground">
            {data().header.subtitle}
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {data().content.sections?.filter((eachSection: any) => eachSection.display)?.map((eachSection: any, indexSection: number) => eachSection.display && (
              <React.Fragment key={indexSection} >
                {/* <div>
                  <h3 className="text-lg font-medium">{indexSection+1}) {eachSection.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{eachSection.subtitle}</p>
                  <Separator />
                </div> */}
  
                <div className="grid grid-cols-5 gap-4">
                  {eachSection.inputs.map((eachInput: any, indexInput: any) => (
                    <React.Fragment>
                      {/* For I/P Type: Text, Email, Number */}
                      {((eachInput.type === "text" || eachInput.type === "email" || eachInput.type === "number" || eachInput.type === "password") && 
                        <div className={`grid gap-3 ${eachInput?.style}`} key={indexInput} >
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

                    </React.Fragment>
                  ))}
                </div>
              </React.Fragment>
            ))}

            <div className="flex justify-between" >
              <Button type="button" variant="destructive" asChild >
                <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.aProductCatalogueRoute.aListRoute} >
                  Cancel
                </Link>
              </Button>
              <Button type="submit">Create</Button>
            </div>
          </form>
        </Form>
      </div>
    </React.Fragment>      
  )
}  

export default ProductCatalogueCreateComponent;
