import React from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import menuAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/cMenuAPIEndpoints";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import { RootState } from "@/aConnection/dReduxConnection";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import MenuRetrieveComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/cMenuComponent/cRetrieveComponent";
import data from "./extras/bData";


const MenuRetrievePage = () => {
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
    retrieveAPIResponse: menuAPIEndpoint.useMenuRetrievePIQuery({ params: { _id: id } }),
  }  

  // JSX
  return (
    <React.Fragment>
      {/* MenuRetrievePage */}
      <MenuRetrieveComponent 
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

export default MenuRetrievePage;
