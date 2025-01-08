import React from "react"
import { useFieldArray } from "react-hook-form"

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/aConnection/bShadcnConnection/components/ui/form"
import { Input } from "@/aConnection/bShadcnConnection/components/ui/input"
import { Label } from "@/aConnection/bShadcnConnection/components/ui/label"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/aConnection/bShadcnConnection/components/ui/table"
import { Textarea } from "@/aConnection/bShadcnConnection/components/ui/textarea"
import { PlusIcon, Trash2Icon } from "lucide-react"


const ProductVariantFormComponent = (props: any) => {
  // Destructure Props
  const { form } = props;

  // Event Handlers
  const { fields: optionFields, append: appendOption, remove: removeOption } = useFieldArray({
    control: form.control,
    name: "dOption",
  });

  const { fields: variantFields, append: _appendVariant, remove: removeVariant } = useFieldArray({
    control: form.control,
    name: "dGeneratedVariant",
  });

  // const generateCombinations: any = (options: { name: string; values: string[] }[]) => {
  //   if (options.length === 0) return [];
  //   const [first, ...rest] = options;
  //   const combinations = rest.length
  //     ? generateCombinations(rest)
  //     : [[]];
  //   return first.values.flatMap((value) =>
  //     combinations.map((combo: any) => [value, ...combo])
  //   );
  // };

  // const handleGenerateVariants = () => {
  //   const options = form.watch("dOption");
  //   const combinations = generateCombinations(options);
  //   const variants = combinations.map((combo: any) => ({
  //     name: combo.join(" - "),
  //     price: 0,
  //   }));
  //   form.setValue("dGeneratedVariant", variants);
  // };

  const generateCombinations: any = (options: { name: string; values: string[] }[]) => {
    if (options.length === 0) return [];
    const [first, ...rest] = options;
    const combinations = rest.length ? generateCombinations(rest) : [[]];
    return first.values.flatMap((value) =>
      combinations.map((combo: any) => [{ name: first.name, value }, ...combo])
    );
  };
  
  const handleGenerateVariants = () => {
    const options = form.watch("dOption"); // Assuming dOption is the field for options
    const combinations = generateCombinations(options);
  
    const variants = combinations.map((combo: any) => ({
      name: combo.map((c: { name: string; value: string }) => `${c.value}`).join(" - "),
      price: 0,
      selectedOption: combo, // Add the structured combination of options and values
    }));
  
    form.setValue("dGeneratedVariant", variants); // Assuming dGeneratedVariant is the field for generated variants
  };

  // For Group
  // const _handleGroupSelection = (optionName: string) => {
  //   const generatedVariants = form.watch("dGeneratedVariant");

  //   // Find unique values for the selected option
  //   const selectedValues = [
  //     ...new Set(
  //       generatedVariants.flatMap((variant: any) =>
  //         variant.selectedOption
  //           .filter((v: { name: string; value: string }) => v.name === optionName)
  //           .map((v: { name: string; value: string }) => v.value)
  //       )
  //     ),
  //   ];

  //   // Update dGroup for the first value of the selected option
  //   if (selectedValues.length > 0) {
  //     const firstValue = selectedValues[0];

  //     form.setValue("dGroup.selectedOption", { name: optionName, value: firstValue });

  //     // Update selectedVariant based on the first value
  //     const filteredVariants = generatedVariants.filter((variant: any) =>
  //       variant.selectedOption.some(
  //         (v: { name: string; value: string }) =>
  //           v.name === optionName && v.value === firstValue
  //       )
  //     );

  //     form.setValue(
  //       "dGroup.selectedVariant",
  //       filteredVariants.map((v: any) => ({ name: v.name }))
  //     );
  //   }
  // };

  // const _handleValueChange = (value: string) => {
  //   const selectedOption = form.watch("dGroup.selectedOption");
  //   const generatedVariants = form.watch("dGeneratedVariant");

  //   // Update dGroup.selectedOption.value
  //   form.setValue("dGroup.selectedOption", { ...selectedOption, value });

  //   // Update selectedVariant
  //   const filteredVariants = generatedVariants.filter((variant: any) =>
  //     variant.selectedOption.some(
  //       (v: { name: string; value: string }) =>
  //         v.name === selectedOption.name && v.value === value
  //     )
  //   );

  //   form.setValue(
  //     "dGroup.selectedVariant",
  //     filteredVariants.map((v: any) => ({ name: v.name }))
  //   );
  // };

  // JSX
  return (
    <React.Fragment>
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

        <div className="grid grid-cols-3 gap-3" >
          {optionFields.map((field, index) => (
            <div key={field.id} className="p-4 grid gap-3 rounded-md border">
              <div className="grid gap-3" >
                <FormField
                  control={form.control}
                  name={`dOption.${index}.name`}
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
                  name={`dOption.${index}.values`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Option Values (comma-separated) :</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter Values" 
                          {...field}  
                          onChange={(event: any) => {
                            const values = event.target.value.split(",").map((each: any) => each.trim());
                            form.setValue(`dOption.${index}.values`, values);
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
                <Trash2Icon /> Remove Option
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

      {form.watch("dGeneratedVariant")?.length > 0 && (
        <div className="grid gap-3" >
          <Label>Variants ({variantFields?.length}) :</Label>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Variant Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {form.watch("dGeneratedVariant").map((_variant: any, index: any) => (
                <TableRow key={index}>
                  <TableCell>
                    <FormField
                      control={form.control}
                      name={`dGeneratedVariant.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>Variant Name :</FormLabel> */}
                          <FormControl>
                            <Input placeholder="Enter Name" type="text" {...field} disabled value={_variant.name} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      control={form.control}
                      name={`dGeneratedVariant.${index}.price`}
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>Price :</FormLabel> */}
                          <FormControl>
                            <Input placeholder="Enter Price" type="text" {...field} value={_variant.price} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <Button type="button" onClick={() => removeVariant(index)} size="sm" variant="destructive" >
                      <Trash2Icon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}

            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell>{variantFields?.length} Varaints</TableCell>
              </TableRow>
            </TableFooter>
          </Table>

          {/* <div className="grid grid-cols-4 gap-3" >
            {form.watch("dGeneratedVariant").map((_variant: any, index: any) => (
              <div key={index} className="p-4 grid gap-3 rounded-md border">
                <div className="grid gap-3" >
                  <FormField
                    control={form.control}
                    name={`dGeneratedVariant.${index}.name`}
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
                    name={`dGeneratedVariant.${index}.price`}
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
                <Button
                  type="button"
                  onClick={() => removeVariant(index)}
                  variant="destructive"
                  size="sm"
                >
                  <Trash2Icon /> Remove Variant
                </Button>
              </div>
            ))}
          </div> */}

        </div>
      )}

      {/* {form.watch("dGeneratedVariant")?.length > 0 && (
        <div>
          <h2 className="text-lg font-medium mt-6">Group Variants</h2>
          <label className="block text-sm font-medium mb-2">
            Group By Option
          </label>
          <select
            onChange={(e) => handleGroupSelection(e.target.value)}
            className="block w-full mt-1 rounded-md border-gray-300 text-gray-800 shadow-sm"
          >
            <option value="">Select Option</option>
            {form.watch("dOption")?.map((field: any) => (
              <option key={field.name} value={field.name}>
                {field.name}
              </option>
            ))}
          </select>
        </div>
      )} */}

      {/* Display Groups with Variants */}
      {/* {form.watch("dGroup")?.selectedOption?.name && (
        <div className="mt-4">
          <h3 className="text-md font-medium">
            Groups for: {form.watch("dGroup").selectedOption.name}
          </h3>
          <div className="grid gap-4">
            {form
              .watch("dGeneratedVariant")
              .flatMap((variant: any) =>
                variant.selectedOption.filter(
                  (v: any) => v.name === form.watch("dGroup").selectedOption.name
                )
              )
              .map((v: any) => v.value)
              .filter((v: any, i: any, arr: any) => arr.indexOf(v) === i)
              .map((value: string, index: number) => {
                const groupVariants = form
                  .watch("dGeneratedVariant")
                  .filter((variant: any) =>
                    variant.selectedOption.some(
                      (opt: { name: string; value: string }) =>
                        opt.name === form.watch("dGroup").selectedOption.name &&
                        opt.value === value
                    )
                  );

                return (
                  <div
                    key={index}
                    className="p-4 border rounded-md bg-gray-50 shadow-sm"
                  >
                    <h4 className="text-md font-medium">{value}</h4>
                    <ul className="list-disc ml-4 mt-2">
                      {groupVariants.map((variant: any, idx: number) => (
                        <li key={idx}>{variant.name}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>
      )} */}

    </React.Fragment>      
  )
}  

export default ProductVariantFormComponent;
