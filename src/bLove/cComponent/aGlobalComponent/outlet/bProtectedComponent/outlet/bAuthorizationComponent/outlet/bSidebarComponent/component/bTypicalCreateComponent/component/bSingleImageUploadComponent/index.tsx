import React, { useRef } from "react"
import { Edit, Trash } from "lucide-react";

import { cn } from "@/aConnection/bShadcnConnection/lib/utils";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/aConnection/bShadcnConnection/components/ui/form";
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";


const SingleImageUploadComponent = (props: any) => {
  // Destructure Props
  const { form, eachInput } = props;

  // Variable
  const fileInputRef = useRef<HTMLInputElement>(null);

  // JSX
  return (
    <React.Fragment>
      <div className="grid gap-3">
        <FormField
          control={form.control}
          name={eachInput.name}
          render={() => (
            <FormItem>
              <FormLabel>{eachInput.label} :</FormLabel>
              <FormControl>
                <div className="flex items-center justify-center w-full">
                  {!form.watch(eachInput.name) ? (
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" onChange={(event: any) => eachInput.onChange(event, form, eachInput.name)} />
                    </label>
                  ) : (
                    <div className="flex flex-col flex-1">
                      <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                        <img
                          src={form.watch(eachInput.name)?.url}
                          alt={"SomeInstance"}
                          className={cn(
                            "h-[200px] object-fit transition-all hover:scale-105 w-auto hidden dark:block",
                            "aspect-auto"
                          )}
                        />
                      </div>
                      <div className="" >
                        {/* {form.watch(eachInput.name)?.pid} <br /> */}
                        <a
                          href={form.watch(eachInput.name)?.url || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          {form.watch(eachInput.name)?.url}
                        </a>                      
                      </div>
                      <div className="flex gap-2 mt-2" >
                        <Button 
                          variant="destructive" size="sm" type="button" 
                          onClick={(event: any) => eachInput.onDelete(event, form, eachInput.name, (form.watch(eachInput.name)?.pid)?.split("/")?.[1])}
                          >
                          <Trash /> Remove
                        </Button>
                        <input ref={fileInputRef} type="file" className="hidden" onChange={(event: any) => eachInput.onUpdate(event, form, eachInput.name, (form.watch(eachInput.name)?.pid)?.split("/")?.[1])} />
                        <Button 
                          variant="default" size="sm" type="button" 
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Edit /> Change
                        </Button>
                      </div>
                    </div>
                  )}
                </div> 
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

    </React.Fragment>
  )
}

export default SingleImageUploadComponent;
