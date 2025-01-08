import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent"


type RoleCreateComponentType = {
  ReduxCall: any
  APICall: {
    createAPITrigger: any,
    createAPIResponse: any,
    specialListAPIResponse?: any,
  }
  extras: {
    apiResponseHandler: {
      createAPIResponseHandler: any
    },
    data: any
    formSchema: any,
    formDefaultValue: any,
    specialPreviousValue?: any,
  }
}

const RoleCreateComponent = (props: RoleCreateComponentType) => {
  // Destructure Props
  const { ReduxCall, APICall, extras } = props;
  
  // JSX
  return (
    <React.Fragment>
      {/* RoleCreateComponent */}
      <TypicalCreateComponent
        ReduxCall={ReduxCall}
        APICall={{
          createAPITrigger: APICall.createAPITrigger,
          createAPIResponse: APICall.createAPIResponse,
          specialListAPIResponse: APICall.specialListAPIResponse
        }}
        extras={{
          apiResponseHandler: {
            createAPIResponseHandler: extras.apiResponseHandler.createAPIResponseHandler
          },
          data: extras.data,
          formSchema: extras.formSchema,
          formDefaultValue: extras.formDefaultValue,
          specialPreviousValue: extras.specialPreviousValue,
        }}        
      />
    </React.Fragment>
  )
}  

export default RoleCreateComponent;
