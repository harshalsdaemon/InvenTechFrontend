import { z } from "zod";
import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast";
import { formSchema } from "./cType";


const apiResponseHandler = {
  submitAPIResponseHandler: async (data: z.infer<typeof formSchema>, Redux: any, submitAPITrigger: any, form: any) => {
    try {
      const serverResponse = await submitAPITrigger({ body: {
        eEmail: data.eEmail,
      } });

      console.log(serverResponse)
      console.log(Redux)

      if (serverResponse.error && serverResponse.error.originalStatus === 404) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Cannot connect with server.",
          description: "There was a problem with server connection.",
        })  
      } 
      
      if (serverResponse.error && serverResponse.error?.data?.success === false) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: serverResponse.error.data.message || "There was an error occured.",
        })  
      }

      if (serverResponse.data && serverResponse.data?.success === true) {
        toast({
          variant: "default",
          title: "Yayy! Congratulations...",
          description: serverResponse.data.message,
        })
        form.reset();

        return;
      }

      return;

    } catch (error: any) {
      return toast({
        variant: "destructive",
        title: "Uh oh! Bad code... Bad code.",
        description: "There was a problem with try block code",
      })
    }

  }
}

export default apiResponseHandler;
