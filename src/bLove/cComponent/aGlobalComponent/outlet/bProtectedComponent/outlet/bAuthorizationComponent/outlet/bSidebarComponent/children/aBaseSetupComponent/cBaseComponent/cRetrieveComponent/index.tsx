import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type BaseRetrieveComponentType = {
  ReduxCall: any
  APICall: {
    retrieveAPIResponse: any
  }
  extras: {
    apiResponseHandler: {
      retrieveAPIResponseHandler: any
    },
    data: any
  }
}

const BaseRetrieveComponent = (props: BaseRetrieveComponentType) => {
  // Destructure Props
  const { ReduxCall, APICall, extras } = props;

  // JSX
  return (
    <React.Fragment>
      {/* BaseRetrieveComponent */}
      <TypicalRetrieveComponent 
        ReduxCall={ReduxCall}
        APICall={{
          retrieveAPIResponse: APICall.retrieveAPIResponse
        }}
        extras={{
          apiResponseHandler: {
            retrieveAPIResponseHandler: extras.apiResponseHandler.retrieveAPIResponseHandler
          },
          data: extras.data
        }}                
      />
    </React.Fragment>      
  )
}  

export default BaseRetrieveComponent;
