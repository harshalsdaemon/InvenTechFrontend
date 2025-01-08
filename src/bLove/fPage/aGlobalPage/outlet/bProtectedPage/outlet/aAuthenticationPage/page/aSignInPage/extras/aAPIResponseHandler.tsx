import { NavigateFunction } from "react-router-dom";
import { z } from "zod";
import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast";
import fullRoute from "@/bLove/gRoute/bFullRoute";
import { formSchema } from "./cType";


const apiResponseHandler = {
  signInAPIResponseHandler: async (data: z.infer<typeof formSchema>, Redux: any, submitAPITrigger: any, form: any, navigate: NavigateFunction) => {
    try {
      const serverResponse = await submitAPITrigger({ body: {
        eEmail: data.eEmail,
        ePassword: data.ePassword,
      } });

      console.log(serverResponse)

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

        Redux.dispatch(
          Redux.action.extraObjectAction({
            ProfileRetrieve: {
              _id: serverResponse.data.user_login._id
            }
          })
        )

        return navigate(fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute)
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
