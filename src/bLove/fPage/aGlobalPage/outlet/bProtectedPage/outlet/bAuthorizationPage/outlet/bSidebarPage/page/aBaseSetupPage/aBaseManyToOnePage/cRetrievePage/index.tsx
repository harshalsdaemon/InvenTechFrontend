import React from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import baseManyToOneAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/aBaseManyToOneAPIEndpoints";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import { RootState } from "@/aConnection/dReduxConnection";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import BaseManyToOneRetrieveComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/aBaseSetupComponent/aBaseManyToOneComponent/cRetrieveComponent";
import data from "./extras/bData";


const BaseManyToOneRetrievePage = () => {
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
    retrieveAPIResponse: baseManyToOneAPIEndpoint.useBaseManyToOneRetrievePIQuery({ params: { _id: id } }),
  }  

  // JSX
  return (
    <React.Fragment>
      {/* BaseManyToOneRetrievePage */}
      <BaseManyToOneRetrieveComponent 
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

export default BaseManyToOneRetrievePage;
