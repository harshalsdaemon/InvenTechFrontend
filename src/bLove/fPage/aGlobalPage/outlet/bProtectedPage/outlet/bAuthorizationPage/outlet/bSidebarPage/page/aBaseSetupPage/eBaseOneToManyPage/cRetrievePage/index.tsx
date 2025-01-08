import React from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import baseOneToManyAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/eBaseOneToManyAPIEndpoints";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import { RootState } from "@/aConnection/dReduxConnection";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import BaseOneToManyRetrieveComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/aBaseSetupComponent/eBaseOneToManyComponent/cRetrieveComponent";
import data from "./extras/bData";


const BaseOneToManyRetrievePage = () => {
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
    retrieveAPIResponse: baseOneToManyAPIEndpoint.useBaseOneToManyRetrievePIQuery({ params: { _id: id } }),
  }  

  // JSX
  return (
    <React.Fragment>
      {/* BaseOneToManyRetrievePage */}
      <BaseOneToManyRetrieveComponent 
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

export default BaseOneToManyRetrievePage;
