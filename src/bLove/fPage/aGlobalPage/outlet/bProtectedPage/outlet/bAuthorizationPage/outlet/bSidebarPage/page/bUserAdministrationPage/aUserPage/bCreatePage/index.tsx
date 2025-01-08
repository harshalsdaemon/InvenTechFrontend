import React from "react"
import { useDispatch, useSelector } from "react-redux";

import userAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/aUserAPIEndpoints";
import roleAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/bRoleAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiServerResponseHandler from "./extras/aAPIResponseHandler";

import UserCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/aUserComponent/bCreateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const UserCreatePage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    createAPITrigger: userAPIEndpoint.useUserCreateAPIMutation()[0],
    createAPIResponse: userAPIEndpoint.useUserCreateAPIMutation()[1],

    // Relationship... Muaaah...
    roleListAPIResponse: roleAPIEndpoint.useRoleListAPIQuery(null),

  }
  
  // JSX
  return (
    <React.Fragment>
      <UserCreateComponent 
        ReduxCall={ReduxCall}
        APICall={{
          createAPITrigger: APICall.createAPITrigger,
          createAPIResponse: APICall.createAPIResponse,
        }}
        extras={{
          apiResponseHandler: {
            createAPIResponseHandler: apiServerResponseHandler.createAPIResponseHandler
          },
          data: data(APICall),
          formSchema: formSchema,
          formDefaultValue: {
            aTitle: "",
            aSubtitle: "",
            aDescription: "",
            aDetail: "",
            aStatus: "",
            aSlug: "",

            cRole: "",

            eFirstname: "",
            eLastname: "",
            eEmail: "",
            eMobile: "",
            ePassword: "",
          }
        }}        
      />
    </React.Fragment>
  )
}

export default UserCreatePage;
