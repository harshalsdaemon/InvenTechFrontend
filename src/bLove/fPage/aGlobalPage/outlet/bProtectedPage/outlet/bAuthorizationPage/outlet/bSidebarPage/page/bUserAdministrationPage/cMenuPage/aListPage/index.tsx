import React from "react"
import { useDispatch, useSelector } from "react-redux";

import menuAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/cMenuAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import MenuListComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/cMenuComponent/aListComponent";
import data from "./extras/bData";
import { listColumn, listSchema } from "./extras/cType";


const MenuListPage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    listAPIResponse: menuAPIEndpoint.useMenuListAPIQuery(null),
  }

  // JSX
  return (
    <React.Fragment>
      {/* MenuListPage */}
      <MenuListComponent
        ReduxCall={ReduxCall}
        APICall={{
          listAPIResponse: APICall.listAPIResponse
        }}
        extras={{
          apiResponseHandler: {
            listAPIResponseHandler: apiResponseHandler.listAPIResponseHandler
          },
          data: data(APICall),
          listSchema: listSchema,
          listColumn: listColumn,
        }}
      />
    </React.Fragment>
  )
}

export default MenuListPage;
