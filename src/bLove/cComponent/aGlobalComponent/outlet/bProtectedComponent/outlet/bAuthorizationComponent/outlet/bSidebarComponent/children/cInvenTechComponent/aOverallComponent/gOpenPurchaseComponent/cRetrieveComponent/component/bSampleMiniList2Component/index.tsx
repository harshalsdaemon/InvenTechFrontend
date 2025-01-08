import React from "react";


import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/aConnection/bShadcnConnection/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/aConnection/bShadcnConnection/components/ui/popover";
import { cn } from "@/aConnection/bShadcnConnection/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";


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

const SampleMiniList2Component = () => {
  // State Variable
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  // JSX
  return (
    <React.Fragment>
      {/* SampleMiniList2Component */}

      {/* <div className="mt-2 w-full">
        <DataTable data={tasks} columns={columns} />
      </div> */}

      <div className="mt-2 w-full">
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
      </div> 

    </React.Fragment>
  )
}

export default SampleMiniList2Component;
