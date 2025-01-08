import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import roleAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/bRoleAPIEndpoints";
import menuAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/cMenuAPIEndpoints";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import { RootState } from "@/aConnection/dReduxConnection";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import RoleUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/bRoleComponent/dUpdateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const RoleUpdatePage = () => {
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
    retrieveAPIResponse: roleAPIEndpoint.useRoleRetrievePIQuery({ params: { _id: id } }),
    updateAPITrigger: roleAPIEndpoint.useRoleUpdateAPIMutation()[0],
    updateAPIResponse: roleAPIEndpoint.useRoleUpdateAPIMutation()[1],

    // Relationship... Muaaah...
    menuListAPIResponse: menuAPIEndpoint.useMenuListAPIQuery(null),

  }  
  
  // JSX
  return (
    <React.Fragment>
      {/* RoleUpdatePage */}
      <RoleUpdateComponent 
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
            cMenu: [],
          },
          previousValue: (form: any) => (
            form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle),
            form.setValue("aSubtitle", APICall.retrieveAPIResponse.data.retrieve?.aSubtitle),
            form.setValue("aDescription", APICall.retrieveAPIResponse.data.retrieve?.aDescription),
            form.setValue("aDetail", APICall.retrieveAPIResponse.data.retrieve?.aDetail),
            form.setValue("aStatus", APICall.retrieveAPIResponse.data.retrieve?.aStatus ? "active" : "inactive"),
            form.setValue("aSlug", APICall.retrieveAPIResponse.data.retrieve?.aSlug),

            form.setValue("cMenu", APICall.retrieveAPIResponse.data.retrieve?.cMenu?.map((each: any) => ({
              menu: each.menu._id,
              access: each.access
            })))
          )
        }}
        params={{id: id}}               
      />
    </React.Fragment>
  )
}

export default RoleUpdatePage;
