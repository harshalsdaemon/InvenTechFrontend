import React, { useEffect } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"


import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import { Checkbox } from "@/aConnection/bShadcnConnection/components/ui/checkbox"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/aConnection/bShadcnConnection/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/aConnection/bShadcnConnection/components/ui/form"
import { Input } from "@/aConnection/bShadcnConnection/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/aConnection/bShadcnConnection/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/aConnection/bShadcnConnection/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/aConnection/bShadcnConnection/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/aConnection/bShadcnConnection/components/ui/table"
import { Textarea } from "@/aConnection/bShadcnConnection/components/ui/textarea"
import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast"
import { cn } from "@/aConnection/bShadcnConnection/lib/utils"
import fullRoute from "@/bLove/gRoute/bFullRoute"
import { Check, ChevronsUpDown } from "lucide-react"
import data from "./extras/bData"
import { formSchema } from "./extras/cType"


const formDefaultValue = {
  dID: "",
  dName: "",
  dAddress: "",
  dCountry: "",
  dState: "",
  dCity: "",
  dPin: "",
  dContactPerson: "",
  dContact: "",
  dEmail: "",
}

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

type InventoryOutwardCreateComponentType = {
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

const InventoryOutwardCreateComponent = (_props: InventoryOutwardCreateComponentType) => {
  // // Destructure Props
  // const { APICall, extras } = props;

  // Variable
  // const navigate = useNavigate()
  // State Variable
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

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

                      {/* For I/P Type: Select */}
                      {((eachInput.type === "search-and-select-new") && 
                        <div className={`grid gap-3 ${eachInput?.style}`} key={indexInput} >
                          <FormField
                            control={form.control}
                            name={eachInput.name}
                            render={() => (
                              <FormItem>
                                <FormLabel>{eachInput.label} :</FormLabel>
                                <Popover open={open} onOpenChange={setOpen}>
                                  <PopoverTrigger asChild>
                                    <Button
                                      variant="outline"
                                      role="combobox"
                                      aria-expanded={open}
                                      className="w-full justify-between"
                                    >
                                      {value
                                        ? frameworks.find((framework) => framework.value === value)?.label
                                        : "Search..."}
                                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-400 p-0">
                                    <Command>
                                      <CommandInput placeholder="Search framework..." />
                                      <CommandList>
                                        <CommandEmpty>No framework found.</CommandEmpty>
                                        <CommandGroup>
                                          {frameworks.map((framework) => (
                                            <CommandItem
                                              key={framework.value}
                                              value={framework.value}
                                              onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue)
                                                setOpen(false)
                                              }}
                                            >
                                              <Check
                                                className={cn(
                                                  "mr-2 h-4 w-4",
                                                  value === framework.value ? "opacity-100" : "opacity-0"
                                                )}
                                              />
                                              {framework.label}
                                            </CommandItem>
                                          ))}
                                        </CommandGroup>
                                      </CommandList>
                                    </Command>
                                  </PopoverContent>
                                </Popover>
                                <FormDescription>
                                  Dubai Shampoo Supplier
                                </FormDescription>
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


            <h1 className="text-xl mb-0" >Costing</h1>
            <div className="grid grid-cols-5 gap-4">
              <div className={`grid gap-3 col-span-1`}>
                <FormLabel>{"Freight Cost(AED)"} :</FormLabel>
                <Input type={"eachInput.type"} />
                <FormMessage />
              </div>
              <div className={`grid gap-3 col-span-2`}>
                <FormLabel>{"Customs & MISC(AED)"} :</FormLabel>
                <Input type={"eachInput.type"} />
                <FormMessage />
              </div>
            </div>

            <h1 className="text-xl mb-0" >Products</h1>
            <div className="grid grid-cols-7 gap-4">
              <div className={`grid gap-3 col-span-2`}>
                <FormLabel>{"Search & Select Products"} :</FormLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between"
                    >
                      {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Search..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-400 p-0">
                    <Command>
                      <CommandInput placeholder="Search framework..." />
                      <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === framework.value ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {framework.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </div>
              <div className={`grid gap-3 col-span-1`}>
                <FormLabel>{"Quantity"} :</FormLabel>
                <Input type={"text"} />
                <FormMessage />
              </div>
              <div className={`grid gap-3 col-span-1`}>
                <FormLabel>{"Price/SKU (AED)"} :</FormLabel>
                <Input type={"text"} />
                <FormMessage />
              </div>
              <div className={`grid gap-3 col-span-2`}>
                <FormLabel>{"Search & Select Warehouse"} :</FormLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between"
                    >
                      {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Search..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-400 p-0">
                    <Command>
                      <CommandInput placeholder="Search framework..." />
                      <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === framework.value ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {framework.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </div>

            </div>

            <Table>
              <TableHeader className="bg-gray-300" >
                <TableRow>
                  <TableHead className="w-[100px]">SKU ID</TableHead>
                  <TableHead className="w-[100px]">Name</TableHead>
                  <TableHead className="w-[100px]">Quantity</TableHead>
                  <TableHead className="w-[100px]">Purchase/SKU (AED)</TableHead>
                  <TableHead className="w-[100px]">Barcode</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">123456</TableCell>
                  <TableCell className="font-medium">Lo'real Shampoo</TableCell>
                  <TableCell className="font-medium">34</TableCell>
                  <TableCell className="font-medium">10.00</TableCell>
                  <TableCell className="font-medium">2837218378213</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">123456</TableCell>
                  <TableCell className="font-medium">Lo'real Shampoo</TableCell>
                  <TableCell className="font-medium">34</TableCell>
                  <TableCell className="font-medium">10.00</TableCell>
                  <TableCell className="font-medium">2837218378213</TableCell>
                </TableRow>
              </TableBody>
            </Table>


            <div className="flex justify-between" >
              <Button type="button" variant="destructive" asChild >
                <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.gOpenPurchaseOrderRoute.aListRoute} >
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

export default InventoryOutwardCreateComponent;
