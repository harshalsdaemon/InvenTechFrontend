import React from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import userAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/aUserAPIEndpoints";
import UserDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/aUserComponent/eDeleteComponent";
import data from "./extras/bData";


const UserDeletePage = () => {
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
    deleteAPITrigger: userAPIEndpoint.useUserDeleteAPIMutation()[0],
    deleteAPIResponse: userAPIEndpoint.useUserDeleteAPIMutation()[1],
  }  
  
  // JSX
  return (
    <React.Fragment>
      {/* UserDeletePage */}
      <UserDeleteComponent 
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

export default UserDeletePage
