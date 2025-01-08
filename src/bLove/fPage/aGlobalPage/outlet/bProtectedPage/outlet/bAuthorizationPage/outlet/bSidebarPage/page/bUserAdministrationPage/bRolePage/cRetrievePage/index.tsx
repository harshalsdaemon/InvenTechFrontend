import React from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import roleAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/bRoleAPIEndpoints";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import { RootState } from "@/aConnection/dReduxConnection";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import RoleRetrieveComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/bRoleComponent/cRetrieveComponent";
import data from "./extras/bData";


const RoleRetrievePage = () => {
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
    retrieveAPIResponse: roleAPIEndpoint.useRoleRetrievePIQuery({ params: { _id: id } }),
  }  

  // JSX
  return (
    <React.Fragment>
      {/* RoleRetrievePage */}
      <RoleRetrieveComponent 
        ReduxCall={ReduxCall}
        APICall={{
          retrieveAPIResponse: APICall.retrieveAPIResponse
        }}
        extras={{
          apiResponseHandler: {
            retrieveAPIResponseHandler: apiResponseHandler.retrieveAPIResponseHandler
          },
          data: data(APICall)
        }}        
      />
    </React.Fragment>
  )
}

export default RoleRetrievePage;
