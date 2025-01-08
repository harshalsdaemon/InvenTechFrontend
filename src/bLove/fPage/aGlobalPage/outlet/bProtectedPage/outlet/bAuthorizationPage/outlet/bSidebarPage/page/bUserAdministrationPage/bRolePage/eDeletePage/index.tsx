import React from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import RoleDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/bRoleComponent/eDeleteComponent";
import roleAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/bRoleAPIEndpoints";
import data from "./extras/bData";


const RoleDeletePage = () => {
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
    deleteAPITrigger: roleAPIEndpoint.useRoleDeleteAPIMutation()[0],
    deleteAPIResponse: roleAPIEndpoint.useRoleDeleteAPIMutation()[1],
  }  
  
  // JSX
  return (
    <React.Fragment>
      {/* RoleDeletePage */}
      <RoleDeleteComponent 
        ReduxCall={ReduxCall}
        APICall={{
          retrieveAPIResponse: APICall.retrieveAPIResponse,
          deleteAPITrigger: APICall.deleteAPITrigger,
          deleteAPIResponse: APICall.deleteAPIResponse,
        }}
        extras={{
          apiResponseHandler: {
            deleteAPIResponseHandler: apiResponseHandler.deleteAPIResponseHandler
          },
          data: data(APICall),
        }}   
        params={{id: id}}                            
      />
    </React.Fragment>
  )
}

export default RoleDeletePage
