import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast";


const apiResponseHandler = {
  retrieveAPIResponseHandler: (retrieveAPIResponse: any, Redux: any) => {
    // Handle loading
    if (retrieveAPIResponse.isLoading) return;
    console.log(retrieveAPIResponse.data)

    // Handle error
    if (retrieveAPIResponse.isError) {
      if (retrieveAPIResponse.error && retrieveAPIResponse.error.originalStatus === 404) {
        // toast({
        //   variant: "destructive",
        //   title: "Uh oh! Cannot connect with server.",
        //   description: "There was a problem with server connection.",
        // });
      } else if (retrieveAPIResponse.error && retrieveAPIResponse.error?.data?.success === false) {
        // toast({
        //   variant: "destructive",
        //   title: "Uh oh! Something went wrong.",
        //   description: retrieveAPIResponse.error?.data.message || "There was an error.",
        // });
      } else {
        // toast({
        //   variant: "destructive",
        //   title: "Error",
        //   description: "An unexpected error occurred.",
        // });
      }
      return;
    }

    // Handle success
    if (retrieveAPIResponse.isSuccess && retrieveAPIResponse.data?.success) {
      Redux.dispatch(
        Redux.action.receivedObjectAction({
          ProfileRetrieve: retrieveAPIResponse.data.user_profile_retrieve
        })
      )
  
      toast({
        variant: "default",
        title: "Yayy! Congratulations...",
        description: retrieveAPIResponse.data.message || "Something loaded successfully.",
      });
    }
  }
}

export default apiResponseHandler;
