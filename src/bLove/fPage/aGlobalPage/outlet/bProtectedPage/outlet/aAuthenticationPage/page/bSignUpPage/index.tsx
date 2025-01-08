import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import userAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/aUserAPIEndpoints";
import SignUpComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/aAuthenticationComponent/children/bSignUpComponent";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import data from "./extras/bData";
import { formSchema } from "./extras/cType";
import apiResponseHandler from "./extras/aAPIResponseHandler";


const SignUpPage = () => {
  // Redux
  const Redux = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
  // API Call
  const APICall = {
    submitAPITrigger: userAPIEndpoint.useUserSignUpAPIMutation()[0],
    submitAPIResponse: userAPIEndpoint.useUserSignUpAPIMutation()[1],
  }
  
  // JSX
  return (
    <React.Fragment>
      {/* SignUpPage */}
      <SignUpComponent 
        Redux={Redux}
        APICall={{
          submitAPITrigger: APICall.submitAPITrigger,
          submitAPIResponse: APICall.submitAPIResponse,
        }}
        extras={{
          apiResponseHandler: {
            submitAPIResponseHandler: apiResponseHandler.submitAPIResponseHandler
          },
          formSchema: formSchema,
          formDefaultValue: {
            eFirstname: "",
            eLastname: "",
            eEmail: "",
            eMobile: "",
            ePassword: "",
            eConfirmPassword: "",
          },
          data: data as any
        }}        
      />
    </React.Fragment>
  )
}

export default SignUpPage;
