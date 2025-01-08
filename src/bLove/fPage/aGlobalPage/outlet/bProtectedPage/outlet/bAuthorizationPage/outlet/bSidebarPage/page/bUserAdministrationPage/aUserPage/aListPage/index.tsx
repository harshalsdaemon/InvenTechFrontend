import React from "react"
import { useDispatch, useSelector } from "react-redux";

import userAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/aUserAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import UserListComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/aUserComponent/aListComponent";
import data from "./extras/bData";
import { listColumn, listSchema } from "./extras/cType";


const UserListPage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    listAPIResponse: userAPIEndpoint.useUserListAPIQuery(null),
  }

  // JSX
  return (
    <React.Fragment>
      {/* UserListPage */}
      <UserListComponent
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

export default UserListPage;
