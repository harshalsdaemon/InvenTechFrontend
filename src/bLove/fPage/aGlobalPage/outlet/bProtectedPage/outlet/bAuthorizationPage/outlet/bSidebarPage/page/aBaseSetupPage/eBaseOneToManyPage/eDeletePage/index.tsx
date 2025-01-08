import React from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import baseOneToManyAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/eBaseOneToManyAPIEndpoints";
import BaseOneToManyDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/aBaseSetupComponent/eBaseOneToManyComponent/eDeleteComponent";
import data from "./extras/bData";


const BaseOneToManyDeletePage = () => {
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
    deleteAPITrigger: baseOneToManyAPIEndpoint.useBaseOneToManyDeleteAPIMutation()[0],
    deleteAPIResponse: baseOneToManyAPIEndpoint.useBaseOneToManyDeleteAPIMutation()[1],
  }  
  
  // JSX
  return (
    <React.Fragment>
      {/* BaseOneToManyDeletePage */}
      <BaseOneToManyDeleteComponent 
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

export default BaseOneToManyDeletePage
