import React from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import BaseManyToOneDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/aBaseSetupComponent/aBaseManyToOneComponent/eDeleteComponent";
import baseManyToOneAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/aBaseManyToOneAPIEndpoints";
import data from "./extras/bData";


const BaseManyToOneDeletePage = () => {
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
    deleteAPITrigger: baseManyToOneAPIEndpoint.useBaseManyToOneDeleteAPIMutation()[0],
    deleteAPIResponse: baseManyToOneAPIEndpoint.useBaseManyToOneDeleteAPIMutation()[1],
  }  
  
  // JSX
  return (
    <React.Fragment>
      {/* BaseManyToOneDeletePage */}
      <BaseManyToOneDeleteComponent 
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

export default BaseManyToOneDeletePage
