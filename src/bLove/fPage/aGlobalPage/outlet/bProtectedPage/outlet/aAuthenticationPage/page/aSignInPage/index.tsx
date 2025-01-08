import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import userAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/aUserAPIEndpoints";
import SignInComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/aAuthenticationComponent/children/aSignInComponent";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import apiResponseHandler from "./extras/aAPIResponseHandler";
import { formSchema } from "./extras/cType";
import data from "./extras/bData";


const SignInPage = () => {
  // Redux
  const Redux = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    submitAPITrigger: userAPIEndpoint.useUserSignInAPIMutation()[0],
    submitAPIResponse: userAPIEndpoint.useUserSignInAPIMutation()[1],
  }

  // JSX
  return (
    <React.Fragment>
      {/* SignInPage */}
      <SignInComponent 
        Redux={Redux}
        APICall={{
          submitAPITrigger: APICall.submitAPITrigger,
          submitAPIResponse: APICall.submitAPIResponse,
        }}
        extras={{
          apiResponseHandler: {
            submitAPIResponseHandler: apiResponseHandler.signInAPIResponseHandler
          },
          formSchema: formSchema,
          formDefaultValue: {
            eEmail: "",
            ePassword: ""
          },
          data: data as any
        }}        
      />
    </React.Fragment>
  )
}

export default SignInPage;
