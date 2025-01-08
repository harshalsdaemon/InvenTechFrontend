import React from "react"
import { useDispatch, useSelector } from "react-redux";

import roleAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/bRoleAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import RoleListComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/bRoleComponent/aListComponent";
import data from "./extras/bData";
import { listColumn, listSchema } from "./extras/cType";


const RoleListPage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    listAPIResponse: roleAPIEndpoint.useRoleListAPIQuery(null),
  }

  // JSX
  return (
    <React.Fragment>
      {/* RoleListPage */}
      <RoleListComponent
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

export default RoleListPage;
