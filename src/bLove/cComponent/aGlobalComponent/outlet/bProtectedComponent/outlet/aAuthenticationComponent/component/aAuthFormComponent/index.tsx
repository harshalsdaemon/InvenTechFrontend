import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { cn } from '@/aConnection/bShadcnConnection/lib/utils';
import { Button } from '@/aConnection/bShadcnConnection/components/ui/button';
import { Input } from '@/aConnection/bShadcnConnection/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/aConnection/bShadcnConnection/components/ui/form';
import { RocketIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/aConnection/bShadcnConnection/components/ui/alert';


export type AuthFormPropsType = {
  Redux?: {
    state: any,
    dispatch: any,
    action: any
  }
  APICall: {
    submitAPITrigger: any,
    submitAPIResponse: any,
  },
  extras: {
    apiResponseHandler: any,
    formSchema: any,
    formDefaultValue: any,
    data: {
      title: string,
      subtitle: string,
      showSampleCredential: boolean
      inputs: {
        name: string,
        label: string,
        type: "text" | "email" | "password",
        placeholder: string
      }[],
      button: {
        label: string,
        handleSubmit: () => void;
      },
      links: {
        linkMessage: string,
        linkRoute: string,
        linkText: string,
      }[]
    }
  },
  token?: string | undefined
}

type AuthFormComponentType = React.HTMLAttributes<HTMLDivElement> & AuthFormPropsType

const AuthFormComponent = ({ className, Redux, APICall, extras, token, ...props }: AuthFormComponentType) => {
  // Variables
  const navigate = useNavigate()

  // Form
  const form = useForm<z.infer<typeof extras.formSchema>>({
    resolver: zodResolver(extras.formSchema),
    defaultValues: extras.formDefaultValue
  })

  // JSX
  return (
    <React.Fragment>
      {/* AuthFormComponent */}
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {extras.data.title || "Enter Title"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {extras.data.subtitle || "Enter Subtitle"}
          </p>
        </div>
        
        {extras.data.showSampleCredential && <div>
          <Alert>
            <RocketIcon className="h-4 w-4" />
            <AlertTitle>Sample User!</AlertTitle>
            <AlertDescription>
              <p><b>Email:</b> shraddha.kapoor@inventech.com</p> 
              <p><b>Password:</b> Shraddha@123</p>
              <p><b>Role:</b> Super Admin</p>
            </AlertDescription>
          </Alert>
        </div>}


        {/* <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert> */}
        
        <div className={cn("grid gap-6", className)} {...props}>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(data => extras.apiResponseHandler.submitAPIResponseHandler(data, Redux, APICall.submitAPITrigger, form, navigate, token))} noValidate className="w-full space-y-3">
              <div className="grid gap-2">

                {extras.data.inputs.map((each: any, index: any) => (
                  <React.Fragment key={index} >
                    <div className="grid gap-1">
                      <FormField
                        control={form.control}
                        name={ each.name }
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="sr-only" htmlFor={ each.name }>{ each.label }</FormLabel>
                            <FormControl>
                              <Input 
                                id={ each.name }
                                placeholder={ each.placeholder } 
                                type={ each.type }
                                autoCapitalize="none"
                                autoComplete="off"
                                autoCorrect="off"
                                disabled={ APICall.submitAPIResponse.isLoading }        
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </React.Fragment>
                ))}

                {/* Submit */}
                <Button 
                  type="submit"
                  disabled={APICall.submitAPIResponse.isLoading}
                >
                  {APICall.submitAPIResponse.isLoading ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </Form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            {/* IMP COMMENT */}
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or if you
              </span>
            </div>
          </div>
          
        </div>
        
        {
          extras.data?.links?.map((eachLink: any, indexLink: number) => (
            <p className="px-8 text-center text-sm text-muted-foreground" key={indexLink} >
              {eachLink.linkMessage}{" "}
              <Link to={eachLink.linkRoute} className="underline underline-offset-4 hover:text-primary" >{eachLink.linkText}</Link>
            </p>
          ))
        }
      </div>

    </React.Fragment>
  )
}

export default AuthFormComponent;
