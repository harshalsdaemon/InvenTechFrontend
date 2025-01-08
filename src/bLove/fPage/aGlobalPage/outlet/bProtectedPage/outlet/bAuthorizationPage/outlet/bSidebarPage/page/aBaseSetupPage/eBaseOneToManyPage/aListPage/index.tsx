import React from "react"
import { useDispatch, useSelector } from "react-redux";

import baseOneToManyAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/eBaseOneToManyAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import BaseOneToManyListComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/aBaseSetupComponent/eBaseOneToManyComponent/aListComponent";
import data from "./extras/bData";
import { listColumn, listSchema } from "./extras/cType";


const BaseOneToManyListPage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    listAPIResponse: baseOneToManyAPIEndpoint.useBaseOneToManyListAPIQuery(null),
  }

  // JSX
  return (
    <React.Fragment>
      {/* BaseOneToManyListPage */}
      <BaseOneToManyListComponent
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

export default BaseOneToManyListPage;
