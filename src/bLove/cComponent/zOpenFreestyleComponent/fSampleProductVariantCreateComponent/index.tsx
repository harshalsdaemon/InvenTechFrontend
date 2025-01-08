import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const optionSchema = z.object({
  name: z.string().nonempty("Option name is required"),
  values: z.array(z.string().nonempty("Value is required")).min(1, "At least one value is required"),
});

const generatedVariantSchema = z.object({
  name: z.string().nonempty(),
  price: z.number().min(0, "Price must be a positive number"),
});

const generateVariantsSchema = z.object({
  options: z.array(optionSchema).min(1, "At least one option is required"),
  generatedVariants: z.array(generatedVariantSchema),
});

export type GenerateVariantsFormValues = z.infer<typeof generateVariantsSchema>;


const GenerateVariantsComponent: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<GenerateVariantsFormValues>({
    resolver: zodResolver(generateVariantsSchema),
    defaultValues: {
      options: [{ name: "", values: [""] }],
      generatedVariants: [],
    },
  });

  const { fields: optionFields, append: appendOption, remove: removeOption } = useFieldArray({
    control,
    name: "options",
  });

  const generatedVariants = watch("generatedVariants");

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
    const options = watch("options");
    const combinations = generateCombinations(options);
    const variants = combinations.map((combo: any) => ({
      name: combo.join(" - "),
      price: 0,
    }));
    setValue("generatedVariants", variants);
  };

  const onSubmit = (data: GenerateVariantsFormValues) => {
    console.log("Errors: ", errors)
    console.log("Final Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Variant Options */}
      <div>
        <div>
          <label className="block text-sm font-medium">Options</label>
          {optionFields.map((field, index) => (
            <div key={field.id} className="space-y-2 mb-4 border p-4 rounded-md">
              <div>
                <label className="block text-sm font-medium">Option Name</label>
                <input
                  type="text"
                  {...register(`options.${index}.name` as const)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
                {errors.options?.[index]?.name && (
                  <p className="text-red-600 text-sm">{errors.options[index].name?.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Option Values (comma-separated)</label>
                <input
                  type="text"
                  onChange={(e) => {
                    const values = e.target.value.split(",").map((v) => v.trim());
                    setValue(`options.${index}.values`, values);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
                {errors.options?.[index]?.values && (
                  <p className="text-red-600 text-sm">{errors.options[index].values?.message}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => removeOption(index)}
                className="text-red-600 mt-2"
              >
                Remove Option
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendOption({ name: "", values: [] })}
            className="text-blue-600"
          >
            Add Option
          </button>
        </div>

        <div>
          <button
            type="button"
            onClick={handleGenerateVariants}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Generate Variants
          </button>
        </div>
      </div>

      {/* Variants */}
      {generatedVariants.length > 0 && (
        <div>
          <label className="block text-sm font-medium">Generated Variants ({generatedVariants.length})</label>
          {generatedVariants.map((_variant, index) => (
            <div key={index} className="space-y-2 mb-2 border p-4 rounded-md">
              <div>
                <label className="block text-sm font-medium">Variant Name</label>
                <input
                  type="text"
                  disabled
                  {...register(`generatedVariants.${index}.name` as const)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Price</label>
                <input
                  type="number"
                  {...register(`generatedVariants.${index}.price` as const)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default GenerateVariantsComponent;
