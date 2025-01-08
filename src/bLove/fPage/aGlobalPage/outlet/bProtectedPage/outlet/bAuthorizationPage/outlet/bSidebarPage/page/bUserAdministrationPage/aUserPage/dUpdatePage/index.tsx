import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import userAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/aUserAPIEndpoints";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import { RootState } from "@/aConnection/dReduxConnection";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import UserUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/aUserComponent/dUpdateComponent";
import roleAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/bRoleAPIEndpoints";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const UserUpdatePage = () => {
  // Variables
  const { id } = useParams();

  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    retrieveAPIResponse: userAPIEndpoint.useUserRetrieveAPIQuery({ params: { _id: id } }),
    updateAPITrigger: userAPIEndpoint.useUserUpdateAPIMutation()[0],
    updateAPIResponse: userAPIEndpoint.useUserUpdateAPIMutation()[1],

    // Relationship... Muaaah...
    roleListAPIResponse: roleAPIEndpoint.useRoleListAPIQuery(null),

  }  
  
  // JSX
  return (
    <React.Fragment>
      {/* UserUpdatePage */}
      <UserUpdateComponent 
        ReduxCall={ReduxCall}
        APICall={{
          retrieveAPIResponse: APICall.retrieveAPIResponse,
          updateAPITrigger: APICall.updateAPITrigger,
          updateAPIResponse: APICall.updateAPIResponse,
        }}
        extras={{
          apiResponseHandler: {
            updateAPIResponseHandler: apiResponseHandler.updateAPIResponseHandler
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
          },
          previousValue: (form: any) => (
            form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle),
            form.setValue("aSubtitle", APICall.retrieveAPIResponse.data.retrieve?.aSubtitle),
            form.setValue("aDescription", APICall.retrieveAPIResponse.data.retrieve?.aDescription),
            form.setValue("aDetail", APICall.retrieveAPIResponse.data.retrieve?.aDetail),
            form.setValue("aStatus", APICall.retrieveAPIResponse.data.retrieve?.aStatus ? "active" : "inactive"),
            form.setValue("aSlug", APICall.retrieveAPIResponse.data.retrieve?.aSlug),

            form.setValue("cRole", APICall.retrieveAPIResponse.data.retrieve?.cRole?._id),

            form.setValue("eFirstname", APICall.retrieveAPIResponse.data.retrieve?.eFirstname),
            form.setValue("eLastname", APICall.retrieveAPIResponse.data.retrieve?.eLastname),
            form.setValue("eEmail", APICall.retrieveAPIResponse.data.retrieve?.eEmail),
            form.setValue("eMobile", APICall.retrieveAPIResponse.data.retrieve?.eMobile)
          )
        }}
        params={{id: id}}               
      />
    </React.Fragment>
  )
}

export default UserUpdatePage;
