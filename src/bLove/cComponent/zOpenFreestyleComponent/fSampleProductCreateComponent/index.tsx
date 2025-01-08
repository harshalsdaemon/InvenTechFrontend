import React, { useEffect } from "react"

import { z } from "zod"
import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"


import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/aConnection/bShadcnConnection/components/ui/form"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import { Input } from "@/aConnection/bShadcnConnection/components/ui/input"
import { Textarea } from "@/aConnection/bShadcnConnection/components/ui/textarea"
import { Separator } from "@/aConnection/bShadcnConnection/components/ui/separator"
import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast"
import { Label } from "@/aConnection/bShadcnConnection/components/ui/label"
import { DeleteIcon, PlusIcon } from "lucide-react"


const formSchema = z.object({
  dTitle: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),
  dDescription: z.string()
    .min(15, { message: "Please enter atlest 15 characters" })
    .max(5000, { message: "Please enter atmost 5000 characters" }),
  dOptions: z.array(
    z.object({
      name: z.string().min(3, { message: "Please enter atlest 3 characters" }),
      values: z.array(z.string().min(3, { message: "Please enter atlest 3 characters" })).min(1, "At least one value is required"),
    })
  ).min(1, "At least one option is required"),
  dGeneratedVariants: z.array(
    z.object({
      name: z.string().nonempty(),
      price: z.string().min(0, "Price must be a positive number"),
    })
  ),

});


const SampleProductCreateComponent = () => {
  // Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      dTitle: "",
      dDescription: "",
      dOptions: [{ name: "", values: [""] }],
      dGeneratedVariants: [],
    }
  })

  // Event Handlers
  const { fields: optionFields, append: appendOption, remove: removeOption } = useFieldArray({
    control: form.control,
    name: "dOptions",
  });

  const { fields: _variantFields, append: _appendVariant, remove: _removeVariant } = useFieldArray({
    control: form.control,
    name: "dGeneratedVariants",
  });

  const generateCombinations: any = (options: { name: string; values: string[] }[]) => {
    if (options.length === 0) return [];
    const [first, ...rest] = options;
    const combinations = rest.length
      ? generateCombinations(rest)
      : [[]];
    return first.values.flatMap((value) =>
      combinations.map((combo: any) => [value, ...combo])
    );
  };

  const handleGenerateVariants = () => {
    const options = form.watch("dOptions");
    const combinations = generateCombinations(options);
    const variants = combinations.map((combo: any) => ({
      name: combo.join(" - "),
      price: 0,
    }));
    form.setValue("dGeneratedVariants", variants);
  };
  
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
  // Extra Render
  useEffect(() => {
    console.log("Current form data:", form.watch());
  }, [form.watch()]);

  // JSX
  return (
    <React.Fragment>
      <div className="flex-1 p-4">
        <div className="mb-8" >
          <h2 className="text-3xl font-bold tracking-tight">Product Create</h2>
          <p className="text-muted-foreground">
            This page is dedicated for the creation of the product.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Section 1 */}
            <React.Fragment>
              <div>
                <h3 className="text-lg font-medium">Section 1</h3>
                <p className="text-sm text-muted-foreground mb-4">In this section, fill the basic details.</p>
                <Separator />
              </div>

              <div className="space-y-8">
                <React.Fragment>
                  {/* Title */}
                  <div className="grid gap-3" >
                    <FormField
                      control={form.control}
                      name="dTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title :</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Title" type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-3" >
                    <FormField
                      control={form.control}
                      name="dDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description :</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-24" placeholder="Enter Description" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-3" >
                    <div className="flex justify-between align-middle" >
                      <Label>Options :</Label>
                      <Button
                        type="button"
                        onClick={() => appendOption({ name: "", values: [] })}
                        variant="blue"
                        size="sm"
                      >
                        <PlusIcon />Add Option
                      </Button>
                    </div>

                    <div className="grid grid-cols-4 gap-3" >
                      {optionFields.map((field, index) => (
                        <div key={field.id} className="p-4 grid gap-3 bg-pink-100 rounded-md">
                          <div className="grid gap-3" >
                            <FormField
                              control={form.control}
                              name={`dOptions.${index}.name`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Option Name :</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter Title" type="text" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid gap-3" >
                            <FormField
                              control={form.control}
                              name={`dOptions.${index}.values`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Option Values (comma-separated) :</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder="Enter Values" 
                                      {...field}  
                                      onChange={(event: any) => {
                                        const values = event.target.value.split(",").map((each: any) => each.trim());
                                        form.setValue(`dOptions.${index}.values`, values);
                                      }}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <Button
                            type="button"
                            onClick={() => removeOption(index)}
                            variant="destructive"
                            size="sm"
                          >
                            <DeleteIcon /> Remove Option
                          </Button>
                        </div>
                      ))}
                    </div>

                    <Button
                      type="button"
                      onClick={handleGenerateVariants}
                      variant="blue"
                    >
                      Generate Variants
                    </Button>
                  </div>

                  {form.watch("dGeneratedVariants").length > 0 && (
                    <div className="grid gap-3" >
                      <Label>Variants :</Label>

                      <div className="grid grid-cols-4 gap-3" >
                        {form.watch("dGeneratedVariants").map((_variant, index) => (
                          <div key={index} className="p-4 grid gap-3 bg-pink-100 rounded-md">
                            <div className="grid gap-3" >
                              <FormField
                                control={form.control}
                                name={`dGeneratedVariants.${index}.name`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Variant Name :</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Enter Name" type="text" {...field} disabled />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className="grid gap-3" >
                              <FormField
                                control={form.control}
                                name={`dGeneratedVariants.${index}.price`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Price :</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Enter Price" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  )}

                  {/* For I/P Type: Text, Email, Number */}
                  {/* {((eachInput.type === "text" || eachInput.type === "email" || eachInput.type === "number" || eachInput.type === "password") && 
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
                  )} */}

                  {/* For I/P Type: Textarea */}
                  {/* {((eachInput.type === "textarea") && 
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
                  )} */}

                  {/* For I/P Type: Select */}
                  {/* {((eachInput.type === "select") && 
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
                  )} */}

                  {/* For I/P Type: Radio */}
                  {/* {((eachInput.type === "radio") && 
                    <div className="grid gap-3" key={indexInput} >
                      <FormField
                        control={form.control}
                        name={eachInput.name}
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <div className="mb-4">
                              <FormLabel>{eachInput.label}:</FormLabel>
                              <FormDescription>
                                Select the items you want to.
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
                  )} */}

                  {/* For I/P Type: Checkbox */}
                  {/* {((eachInput.type === "checkbox") &&
                    <div className="grid gap-3" key={indexInput} >
                      <FormField
                        control={form.control}
                        name={eachInput.name}
                        render={() => (
                          <FormItem>
                            <div className="mb-4">
                              <FormLabel>{eachInput.label}:</FormLabel>
                              <FormDescription>
                                Select the items you want to.
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
                  )} */}

                  {/* For I/P Type: Special Checkbox */}
                  {/* {((eachInput.type === "special-checkbox") &&
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
                  )} */}

                </React.Fragment>
              </div>
            </React.Fragment>

            <Button type="submit">Create</Button>
          </form>
        </Form>
      </div>
    </React.Fragment>      
  )
}  

export default SampleProductCreateComponent;
