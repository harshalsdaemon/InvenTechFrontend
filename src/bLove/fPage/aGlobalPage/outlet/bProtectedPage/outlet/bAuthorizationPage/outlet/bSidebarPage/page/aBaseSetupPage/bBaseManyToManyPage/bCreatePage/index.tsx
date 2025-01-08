import React from "react"
import { useDispatch, useSelector } from "react-redux";

import baseAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/cBaseAPIEndpoints";
import baseManyToManyAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/bBaseManyToManyAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiServerResponseHandler from "./extras/aAPIResponseHandler";

import BaseCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/aBaseSetupComponent/cBaseComponent/bCreateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const BaseManyToManyCreatePage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    createAPITrigger: baseManyToManyAPIEndpoint.useBaseManyToManyCreateAPIMutation()[0],
    createAPIResponse: baseManyToManyAPIEndpoint.useBaseManyToManyCreateAPIMutation()[1],

    // Relationship... Muaaah...
    baseListAPIResponse: baseAPIEndpoint.useBaseListAPIQuery(null),

  }
  
  // JSX
  return (
    <React.Fragment>
      <BaseCreateComponent 
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
      
            cBase: [],
          }
        }}        
      />
    </React.Fragment>
  )
}

export default BaseManyToManyCreatePage;
