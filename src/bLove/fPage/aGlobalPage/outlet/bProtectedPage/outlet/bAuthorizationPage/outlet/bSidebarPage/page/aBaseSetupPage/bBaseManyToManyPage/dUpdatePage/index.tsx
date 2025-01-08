import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import baseAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/cBaseAPIEndpoints";
import baseManyToManyAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/bBaseManyToManyAPIEndpoints";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import { RootState } from "@/aConnection/dReduxConnection";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import BaseManyToManyUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/aBaseSetupComponent/bBaseManyToManyComponent/dUpdateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const BaseManyToManyUpdatePage = () => {
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
    retrieveAPIResponse: baseManyToManyAPIEndpoint.useBaseManyToManyRetrievePIQuery({ params: { _id: id } }),
    updateAPITrigger: baseManyToManyAPIEndpoint.useBaseManyToManyUpdateAPIMutation()[0],
    updateAPIResponse: baseManyToManyAPIEndpoint.useBaseManyToManyUpdateAPIMutation()[1],

    // Relationship... Muaaah...
    baseListAPIResponse: baseAPIEndpoint.useBaseListAPIQuery(null),

  }  
  
  // JSX
  return (
    <React.Fragment>
      {/* BaseManyToManyUpdatePage */}
      <BaseManyToManyUpdateComponent 
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
      
            cBase: [],
          },
          previousValue: (form: any) => (
            form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle),
            form.setValue("aSubtitle", APICall.retrieveAPIResponse.data.retrieve?.aSubtitle),
            form.setValue("aDescription", APICall.retrieveAPIResponse.data.retrieve?.aDescription),
            form.setValue("aDetail", APICall.retrieveAPIResponse.data.retrieve?.aDetail),
            form.setValue("aStatus", APICall.retrieveAPIResponse.data.retrieve?.aStatus ? "active" : "inactive"),
            form.setValue("aSlug", APICall.retrieveAPIResponse.data.retrieve?.aSlug),
    
            form.setValue("cBase", APICall.retrieveAPIResponse.data.retrieve?.cBase?.map((each: any) => each._id))
          )
        }}
        params={{id: id}}               
      />
    </React.Fragment>
  )
}

export default BaseManyToManyUpdatePage;
