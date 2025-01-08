import React from "react"
import { useDispatch, useSelector } from "react-redux";

import menuAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/cMenuAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiServerResponseHandler from "./extras/aAPIResponseHandler";

import MenuCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/cMenuComponent/bCreateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const MenuCreatePage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    createAPITrigger: menuAPIEndpoint.useMenuCreateAPIMutation()[0],
    createAPIResponse: menuAPIEndpoint.useMenuCreateAPIMutation()[1],
  }
  
  // JSX
  return (
    <React.Fragment>
      <MenuCreateComponent 
        ReduxCall={ReduxCall}
        APICall={{
          createAPITrigger: APICall.createAPITrigger,
          createAPIResponse: APICall.createAPIResponse,
        }}
        extras={{
          apiResponseHandler: {
            createAPIResponseHandler: apiServerResponseHandler.createAPIResponseHandler
          },
          data: data(APICall),
          formSchema: formSchema,
          formDefaultValue: {
            aTitle: "",
            aSubtitle: "",
            aDescription: "",
            aDetail: "",
            aStatus: "",
            aSlug: "",
          }
        }}        
      />
    </React.Fragment>
  )
}

export default MenuCreatePage;
