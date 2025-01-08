import React from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import menuAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/cMenuAPIEndpoints";
import MenuDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/cMenuComponent/eDeleteComponent";
import data from "./extras/bData";


const MenuDeletePage = () => {
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
    deleteAPITrigger: menuAPIEndpoint.useMenuDeleteAPIMutation()[0],
    deleteAPIResponse: menuAPIEndpoint.useMenuDeleteAPIMutation()[1],
  }  
  
  // JSX
  return (
    <React.Fragment>
      {/* MenuDeletePage */}
      <MenuDeleteComponent 
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

export default MenuDeletePage
