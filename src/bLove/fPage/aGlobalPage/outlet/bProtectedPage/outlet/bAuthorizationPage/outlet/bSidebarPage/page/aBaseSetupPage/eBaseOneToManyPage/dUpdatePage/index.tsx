import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import baseAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/cBaseAPIEndpoints";
import baseOneToManyAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/eBaseOneToManyAPIEndpoints";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import { RootState } from "@/aConnection/dReduxConnection";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import BaseOneToManyUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/aBaseSetupComponent/eBaseOneToManyComponent/dUpdateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const BaseOneToManyUpdatePage = () => {
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
    retrieveAPIResponse: baseOneToManyAPIEndpoint.useBaseOneToManyRetrievePIQuery({ params: { _id: id } }),
    updateAPITrigger: baseOneToManyAPIEndpoint.useBaseOneToManyUpdateAPIMutation()[0],
    updateAPIResponse: baseOneToManyAPIEndpoint.useBaseOneToManyUpdateAPIMutation()[1],

    // Relationship... Muaaah...
    baseListAPIResponse: baseAPIEndpoint.useBaseListAPIQuery(null),

  }  
  
  // JSX
  return (
    <React.Fragment>
      {/* BaseOneToManyUpdatePage */}
      <BaseOneToManyUpdateComponent 
        ReduxCall={ReduxCall}
        APICall={{
          retrieveAPIResponse: APICall.retrieveAPIResponse,
          updateAPITrigger: APICall.updateAPITrigger,
          updateAPIResponse: APICall.updateAPIResponse,
        }}
        extras={{
          apiResponseHandler: {
            updateAPIResponseHandler: apiResponseHandler.updateAPIResponseHandler
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
      
            cBase: "",
          },
          previousValue: (form: any) => (
            form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle),
            form.setValue("aSubtitle", APICall.retrieveAPIResponse.data.retrieve?.aSubtitle),
            form.setValue("aDescription", APICall.retrieveAPIResponse.data.retrieve?.aDescription),
            form.setValue("aDetail", APICall.retrieveAPIResponse.data.retrieve?.aDetail),
            form.setValue("aStatus", APICall.retrieveAPIResponse.data.retrieve?.aStatus ? "active" : "inactive"),
            form.setValue("aSlug", APICall.retrieveAPIResponse.data.retrieve?.aSlug),
    
            form.setValue("cBase", APICall.retrieveAPIResponse.data.retrieve?.cBase?._id)
          )
        }}
        params={{id: id}}               
      />
    </React.Fragment>
  )
}

export default BaseOneToManyUpdatePage;
