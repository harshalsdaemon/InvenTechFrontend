import React from "react"
import { useDispatch, useSelector } from "react-redux";

import baseManyToManyAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/bBaseManyToManyAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import BaseManyToManyListComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/aBaseSetupComponent/bBaseManyToManyComponent/aListComponent";
import data from "./extras/bData";
import { listColumn, listSchema } from "./extras/cType";


const BaseManyToManyListPage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    listAPIResponse: baseManyToManyAPIEndpoint.useBaseManyToManyListAPIQuery(null),
  }

  // JSX
  return (
    <React.Fragment>
      {/* BaseManyToManyListPage */}
      <BaseManyToManyListComponent
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

export default BaseManyToManyListPage;
