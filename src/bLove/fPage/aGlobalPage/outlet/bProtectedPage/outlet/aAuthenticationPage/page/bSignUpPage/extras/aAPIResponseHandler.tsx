import { NavigateFunction } from "react-router-dom";
import { z } from "zod";
import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast";
import fullRoute from "@/bLove/gRoute/bFullRoute";
import { formSchema } from "./cType";


const apiResponseHandler = {
  submitAPIResponseHandler: async (data: z.infer<typeof formSchema>, Redux: any, submitAPITrigger: any, form: any, navigate: NavigateFunction) => {
    try {
      const serverResponse = await submitAPITrigger({ body: {
        eFirstname: data.eFirstname,
        eLastname: data.eLastname,
        eEmail: data.eEmail,
        eMobile: data.eMobile,
        ePassword: data.ePassword,
        eConfirmPassword: data.eConfirmPassword,

        aTitle: `${data.eFirstname} ${data.eLastname}`,
        aSubtitle: `${data.ePassword}`,

        cRole: "6736b34dfb2bc0504bc1d936"
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
              _id: serverResponse.data.user_register._id
            }
          })
        )

        return navigate(fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.zDashboardRoute.aDashboardRoute)
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
