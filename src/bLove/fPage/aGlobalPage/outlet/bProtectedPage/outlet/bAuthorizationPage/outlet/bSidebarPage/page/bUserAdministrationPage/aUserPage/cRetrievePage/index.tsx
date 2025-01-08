import React from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import userAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/aUserAPIEndpoints";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import { RootState } from "@/aConnection/dReduxConnection";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import UserRetrieveComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/aUserComponent/cRetrieveComponent";
import data from "./extras/bData";


const UserRetrievePage = () => {
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
  }  

  // JSX
  return (
    <React.Fragment>
      {/* UserRetrievePage */}
      <UserRetrieveComponent 
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

export default UserRetrievePage;
