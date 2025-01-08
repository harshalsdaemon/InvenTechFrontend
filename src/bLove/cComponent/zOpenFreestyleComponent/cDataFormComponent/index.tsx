import React from "react"

import { z } from "zod"
import { useNavigate } from "react-router-dom"
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
  ChevronLeft,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/aConnection/bShadcnConnection/components/ui/card"
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


const formSchema = z.object({
  aTitle: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),
  aSubtitle: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(500, { message: "Please enter atmost 500 characters" }),
  aDescription: z.string()
    .min(15, { message: "Please enter atlest 15 characters" })
    .max(5000, { message: "Please enter atmost 5000 characters" }),
  aDetail: z.string()
    .min(15, { message: "Please enter atlest 15 characters" })
    .max(50000, { message: "Please enter atmost 50000 characters" }),
  aStatus: z.string()
    .min(5, { message: "Please select status" })
    .max(15, { message: "Please select status" }),
  aSlug: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),
  
  cBaseOneToOne: z.string(),
  cBaseOneToMany: z.array(z.string()),
  cBaseManyToOne: z.string(),
  cBaseManyToMany: z.array(z.string()),
});

type DataFormComponentType = {
  ReduxCall: any
  APICall: {
    createAPITrigger: any,
    createAPIResponse: any,
    baseOneToOneListAPIResponse: any,
    baseOneToManyListAPIResponse: any,
    baseManyToOneListAPIResponse: any,
    baseManyToManyListAPIResponse: any,
  }
  extras: {
    apiResponseHandler: {
      createAPIResponseHandler: any
    },
  }
}

const DataFormComponent = (props: DataFormComponentType) => {
  // Destructure Props
  const { APICall, extras } = props;

  // Variable
  const navigate = useNavigate()

  // Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      aTitle: "",
      aSubtitle: "",
      aDescription: "",
      aDetail: "",
      aStatus: "",
      aSlug: "",

      cBaseOneToOne: "",
      cBaseOneToMany: [],
      cBaseManyToOne: "",
      cBaseManyToMany: [],
    }
  })

  // Submit Handler
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data)
    extras.apiResponseHandler.createAPIResponseHandler(data, APICall.createAPITrigger, form, navigate)
  }   
  
  // JSX
  return (
    <React.Fragment>
      <main className="grid flex-1 items-start gap-4 md:gap-8">
        <div className="mx-auto grid max-w-[100rem] flex-1 auto-rows-max gap-4">

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">

              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Button>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                  Base Create
                </h1>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                  {/* Links */}
                  {/* <Button 
                    size="sm"
                    type="submit"
                    disabled={APICall.createAPIResponse.isLoading}
                  >
                    {APICall.createAPIResponse.isLoading ? "Creating..." : "Create Base"}
                  </Button> */}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                  {/* Basic Information */}
                  <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                      <CardTitle>Basic Information</CardTitle>
                      {/* <CardDescription>
                        Lipsum dolor sit amet, consectetur adipiscing elit
                      </CardDescription> */}
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">

                        {/* Title */}
                        <div className="grid gap-3">
                          <FormField
                            control={form.control}
                            name="aTitle"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Title :</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g. 'Stella Watch Charm' " {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        {/* Subtitle */}
                        <div className="grid gap-3">
                          <FormField
                            control={form.control}
                            name="aSubtitle"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Subtitle :</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g. 'A Timeless Accessory for Every Occasion'" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        {/* Description */}
                        <div className="grid gap-3">
                          <FormField
                            control={form.control}
                            name="aDescription"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Description :</FormLabel>
                                <FormControl>
                                  <Textarea className="min-h-24" placeholder="e.g 'Elevate your style with the Stella Watch Charm, a beautifully designed accessory that combines the elegance of fine jewelry with the functionality of a classic timepiece.'" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        {/* Detail */}
                        <div className="grid gap-3">
                          <FormField
                            control={form.control}
                            name="aDetail"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Detail :</FormLabel>
                                <FormControl>
                                  <Textarea className="min-h-48" placeholder="e.g. 'Whether you're attending a formal event or adding a touch of sophistication to your everyday look, this charm is the perfect complement to any outfit. Crafted with precision and attention to detail, the Stella Watch Charm is a versatile piece that can be easily attached to bracelets, necklaces, or bags. Its sleek design and delicate charm make it a must-have for fashion enthusiasts who appreciate luxury in the finer details.'" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        {/* Status */}
                        <div className="grid gap-3">
                          <FormField
                            control={form.control}
                            name="aStatus"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Status :</FormLabel>
                                <Select onValueChange={field.onChange} >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="--Select status--" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="inactve">Inactive</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        {/* Slug */}
                        <div className="grid gap-3">
                          <FormField
                            control={form.control}
                            name="aSlug"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Slug :</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g: 'stella-watch-charm'" {...field} />
                                  </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                                                
                      </div>
                    </CardContent>
                  </Card>

                  {/* Reation Information */}
                  <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                      <CardTitle>Relation Information</CardTitle>
                      {/* <CardDescription>
                        Lipsum dolor sit amet, consectetur adipiscing elit
                      </CardDescription> */}
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">

                        {/* Base One To One */}
                        <div className="grid gap-3">
                          <FormField
                            control={form.control}
                            name="cBaseOneToOne"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <div className="mb-4">
                                  <FormLabel>Base One To One:</FormLabel>
                                  <FormDescription>
                                    Select the items you want to.
                                  </FormDescription>
                                </div>
                                {
                                  APICall.baseOneToOneListAPIResponse.isLoading ? <FormDescription>Loading...</FormDescription> : 
                                  APICall.baseOneToOneListAPIResponse.isError ? <FormDescription>Error...</FormDescription> :
                                  APICall.baseOneToOneListAPIResponse.isSuccess ? (
                                    APICall.baseOneToOneListAPIResponse.data.success ? (
                                      APICall.baseOneToOneListAPIResponse.data.list.length > 0 ? (
                                        <React.Fragment>
                                          <FormControl>
                                            <RadioGroup
                                              onValueChange={field.onChange}
                                              defaultValue={field.value}
                                              className="flex flex-col space-y-1"
                                            >
                                              {APICall.baseOneToOneListAPIResponse.data.list.map((each: any, index: number) => (
                                                <React.Fragment key={index} >
                                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                      <RadioGroupItem value={each._id} />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                      {each.aTitle}
                                                    </FormLabel>
                                                  </FormItem>
                                                </React.Fragment>
                                              )).reverse()}
                                            </RadioGroup>
                                          </FormControl>
                                        </React.Fragment>
                                      ) : (
                                        <FormDescription>Empty List</FormDescription>
                                      )
                                    ) : (
                                      <FormDescription>Backend Error</FormDescription>
                                    )
                                  ) : (
                                    <FormDescription>Let me understand first</FormDescription>
                                  ) 
                                }
                                <FormMessage />
                              </FormItem>                            
                            )}
                          />
                        </div>
                        
                        {/* Base One To Many */}
                        <div className="grid gap-3">
                          <FormField
                            control={form.control}
                            name="cBaseOneToMany"
                            render={() => (
                              <FormItem>
                                <div className="mb-4">
                                  <FormLabel>Base One To Many:</FormLabel>
                                  <FormDescription>
                                    Select the items you want to.
                                  </FormDescription>
                                </div>
                                {
                                  APICall.baseOneToManyListAPIResponse.isLoading ? <FormDescription>Loading...</FormDescription> : 
                                  APICall.baseOneToManyListAPIResponse.isError ? <FormDescription>Error...</FormDescription> :
                                  APICall.baseOneToManyListAPIResponse.isSuccess ? (
                                    APICall.baseOneToManyListAPIResponse.data.success ? (
                                      APICall.baseOneToManyListAPIResponse.data.list.length > 0 ? (
                                        <React.Fragment>
                                          {APICall.baseOneToManyListAPIResponse.data.list.map((each: any, index: number) => (
                                            <FormField
                                              key={index}
                                              control={form.control}
                                              name="cBaseOneToMany"
                                              render={({ field }) => {
                                                return (
                                                  <FormItem
                                                    key={index}
                                                    className="flex flex-row items-start space-x-3 space-y-0"
                                                  >
                                                    <FormControl>
                                                      <Checkbox
                                                        checked={field.value?.includes(each._id)}
                                                        onCheckedChange={(checked) => {
                                                          return checked
                                                            ? field.onChange([...field.value, each._id])
                                                            : field.onChange(
                                                                field.value?.filter(
                                                                  (value) => value !== each._id
                                                                )
                                                              )
                                                        }}
                                                      />
                                                    </FormControl>
                                                    <FormLabel className="text-sm font-normal">
                                                      {each.aTitle}
                                                    </FormLabel>
                                                  </FormItem>
                                                )
                                              }}
                                            />
                                          ))}
                                        </React.Fragment>
                                      ) : (
                                        <FormDescription>Empty List</FormDescription>
                                      )
                                    ) : (
                                      <FormDescription>Backend Error</FormDescription>
                                    )
                                  ) : (
                                    <FormDescription>Let me understand first</FormDescription>
                                  ) 
                                }
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        {/* Base Many To One */}
                        <div className="grid gap-3">
                          <FormField
                            control={form.control}
                            name="cBaseManyToOne"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <div className="mb-4">
                                  <FormLabel>Base Many To One:</FormLabel>
                                  <FormDescription>
                                    Select the items you want to.
                                  </FormDescription>
                                </div>
                                {
                                  APICall.baseManyToOneListAPIResponse.isLoading ? <FormDescription>Loading...</FormDescription> : 
                                  APICall.baseManyToOneListAPIResponse.isError ? <FormDescription>Error...</FormDescription> :
                                  APICall.baseManyToOneListAPIResponse.isSuccess ? (
                                    APICall.baseManyToOneListAPIResponse.data.success ? (
                                      APICall.baseManyToOneListAPIResponse.data.list.length > 0 ? (
                                        <React.Fragment>
                                          <FormControl>
                                            <RadioGroup
                                              onValueChange={field.onChange}
                                              defaultValue={field.value}
                                              className="flex flex-col space-y-1"
                                            >
                                              {APICall.baseManyToOneListAPIResponse.data.list.map((each: any, index: number) => (
                                                <React.Fragment key={index} >
                                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                      <RadioGroupItem value={each._id} />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                      {each.aTitle}
                                                    </FormLabel>
                                                  </FormItem>
                                                </React.Fragment>
                                              )).reverse()}
                                            </RadioGroup>
                                          </FormControl>
                                        </React.Fragment>
                                      ) : (
                                        <FormDescription>Empty List</FormDescription>
                                      )
                                    ) : (
                                      <FormDescription>Backend Error</FormDescription>
                                    )
                                  ) : (
                                    <FormDescription>Let me understand first</FormDescription>
                                  ) 
                                }
                                <FormMessage />
                              </FormItem>                            
                            )}
                          />
                        </div>
                        
                        {/* Base Many To Many */}
                        <div className="grid gap-3">
                          <FormField
                            control={form.control}
                            name="cBaseOneToMany"
                            render={() => (
                              <FormItem>
                                <div className="mb-4">
                                  <FormLabel>Base Many To Many:</FormLabel>
                                  <FormDescription>
                                    Select the items you want to.
                                  </FormDescription>
                                </div>
                                {
                                  APICall.baseManyToManyListAPIResponse.isLoading ? <FormDescription>Loading...</FormDescription> : 
                                  APICall.baseManyToManyListAPIResponse.isError ? <FormDescription>Error...</FormDescription> :
                                  APICall.baseManyToManyListAPIResponse.isSuccess ? (
                                    APICall.baseManyToManyListAPIResponse.data.success ? (
                                      APICall.baseManyToManyListAPIResponse.data.list.length > 0 ? (
                                        <React.Fragment>
                                          {APICall.baseManyToManyListAPIResponse.data.list.map((each: any, index: number) => (
                                            <FormField
                                              key={index}
                                              control={form.control}
                                              name="cBaseManyToMany"
                                              render={({ field }) => {
                                                return (
                                                  <FormItem
                                                    key={index}
                                                    className="flex flex-row items-start space-x-3 space-y-0"
                                                  >
                                                    <FormControl>
                                                      <Checkbox
                                                        checked={field.value?.includes(each._id)}
                                                        onCheckedChange={(checked) => {
                                                          return checked
                                                            ? field.onChange([...field.value, each._id])
                                                            : field.onChange(
                                                                field.value?.filter(
                                                                  (value) => value !== each._id
                                                                )
                                                              )
                                                        }}
                                                      />
                                                    </FormControl>
                                                    <FormLabel className="text-sm font-normal">
                                                      {each.aTitle}
                                                    </FormLabel>
                                                  </FormItem>
                                                )
                                              }}
                                            />
                                          ))}
                                        </React.Fragment>
                                      ) : (
                                        <FormDescription>Empty List</FormDescription>
                                      )
                                    ) : (
                                      <FormDescription>Backend Error</FormDescription>
                                    )
                                  ) : (
                                    <FormDescription>Let me understand first</FormDescription>
                                  ) 
                                }
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                  {/* Handler */}
                  <Card x-chunk="dashboard-07-chunk-5">
                    <CardHeader>
                      <CardTitle>Create Base</CardTitle>
                      <CardDescription>
                        Lipsum dolor sit amet, consectetur adipiscing elit.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div></div>
                      <Button 
                        size="sm"
                        type="submit"
                        disabled={APICall.createAPIResponse.isLoading}
                      >
                        {APICall.createAPIResponse.isLoading ? "Creating..." : "Create Base"}
                      </Button>
                    </CardContent>  
                  </Card>  
                </div>  
              </div>  

              {/* Links */}
              {/* <div className="flex items-center justify-center gap-2 md:hidden">
                <Button 
                  size="sm"
                  type="submit"
                  disabled={APICall.createAPIResponse.isLoading}
                >
                  {APICall.createAPIResponse.isLoading ? "Creating..." : "Create Base"}
                </Button>
              </div> */}
            
            </form>
          </Form>

        </div>  
      </main>  
    </React.Fragment>      
  )
}  

export default DataFormComponent;
