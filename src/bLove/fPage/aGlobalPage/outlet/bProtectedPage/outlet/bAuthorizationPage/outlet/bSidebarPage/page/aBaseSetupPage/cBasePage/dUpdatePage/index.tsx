import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import baseAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/cBaseAPIEndpoints";
import baseOneToOneAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/dBaseOneToOneAPIEndpoints";
import baseOneToManyAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/eBaseOneToManyAPIEndpoints";
import baseManyToOneAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/aBaseManyToOneAPIEndpoints";
import baseManyToManyAPIEndpoint from "@/bLove/aAPI/aBaseSetupAPI/bBaseManyToManyAPIEndpoints";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import { RootState } from "@/aConnection/dReduxConnection";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import BaseUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/aBaseSetupComponent/cBaseComponent/dUpdateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const BaseUpdatePage = () => {
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
    retrieveAPIResponse: baseAPIEndpoint.useBaseRetrievePIQuery({ params: { _id: id } }),
    updateAPITrigger: baseAPIEndpoint.useBaseUpdateAPIMutation()[0],
    updateAPIResponse: baseAPIEndpoint.useBaseUpdateAPIMutation()[1],

    // Relationship... Muaaah...
    baseOneToOneListAPIResponse: baseOneToOneAPIEndpoint.useBaseOneToOneListAPIQuery(null),
    baseOneToManyListAPIResponse: baseOneToManyAPIEndpoint.useBaseOneToManyListAPIQuery(null),
    baseManyToOneListAPIResponse: baseManyToOneAPIEndpoint.useBaseManyToOneListAPIQuery(null),
    baseManyToManyListAPIResponse: baseManyToManyAPIEndpoint.useBaseManyToManyListAPIQuery(null),

  }  
  
  // JSX
  return (
    <React.Fragment>
      {/* BaseUpdatePage */}
      <BaseUpdateComponent 
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
      
            cBaseOneToOne: "",
            cBaseOneToMany: [],
            cBaseManyToOne: "",
            cBaseManyToMany: [],
          },
          previousValue: (form: any) => (
            form.setValue("aImage", APICall.retrieveAPIResponse.data.retrieve?.aImage),
            form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle),
            form.setValue("aSubtitle", APICall.retrieveAPIResponse.data.retrieve?.aSubtitle),
            form.setValue("aDescription", APICall.retrieveAPIResponse.data.retrieve?.aDescription),
            form.setValue("aDetail", APICall.retrieveAPIResponse.data.retrieve?.aDetail),
            form.setValue("aStatus", APICall.retrieveAPIResponse.data.retrieve?.aStatus ? "active" : "inactive"),
            form.setValue("aSlug", APICall.retrieveAPIResponse.data.retrieve?.aSlug),
    
            form.setValue("cBaseOneToOne", APICall.retrieveAPIResponse.data.retrieve?.cBaseOneToOne?._id),
            form.setValue("cBaseOneToMany", APICall.retrieveAPIResponse.data.retrieve?.cBaseOneToMany?.map((each: any) => each._id)),
            form.setValue("cBaseManyToOne", APICall.retrieveAPIResponse.data.retrieve?.cBaseManyToOne?._id),
            form.setValue("cBaseManyToMany", APICall.retrieveAPIResponse.data.retrieve?.cBaseManyToMany?.map((each: any) => each._id))
          )
        }}
        params={{id: id}}               
      />
    </React.Fragment>
  )
}

export default BaseUpdatePage;
