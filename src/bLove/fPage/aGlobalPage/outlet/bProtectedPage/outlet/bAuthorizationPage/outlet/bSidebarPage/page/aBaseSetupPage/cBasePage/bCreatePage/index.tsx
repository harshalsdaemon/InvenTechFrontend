import React from "react"
import { useDispatch, useSelector } from "react-redux";

import baseAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/cBaseAPIEndpoints";
import baseOneToOneAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/dBaseOneToOneAPIEndpoints";
import baseOneToManyAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/eBaseOneToManyAPIEndpoints";
import baseManyToOneAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/aBaseManyToOneAPIEndpoints";
import baseManyToManyAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/bBaseManyToManyAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiServerResponseHandler from "./extras/aAPIResponseHandler";

import BaseCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/aBaseSetupComponent/cBaseComponent/bCreateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const BaseCreatePage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    createAPITrigger: baseAPIEndpoint.useBaseCreateAPIMutation()[0],
    createAPIResponse: baseAPIEndpoint.useBaseCreateAPIMutation()[1],

    // Relationship... Muaaah...
    baseOneToOneListAPIResponse: baseOneToOneAPIEndpoint.useBaseOneToOneListAPIQuery(null),
    baseOneToManyListAPIResponse: baseOneToManyAPIEndpoint.useBaseOneToManyListAPIQuery(null),
    baseManyToOneListAPIResponse: baseManyToOneAPIEndpoint.useBaseManyToOneListAPIQuery(null),
    baseManyToManyListAPIResponse: baseManyToManyAPIEndpoint.useBaseManyToManyListAPIQuery(null),

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
            aImage: "",
            aTitle: "",
            aSubtitle: "",
            aDescription: "",
            aDetail: "",
            aStatus: "",
            aSlug: "",
      
            cBaseOneToOne: "",
            cBaseOneToMany: [],
            cBaseManyToOne: "",
            cBaseManyToMany: [],
          }
        }}        
      />
    </React.Fragment>
  )
}

export default BaseCreatePage;
