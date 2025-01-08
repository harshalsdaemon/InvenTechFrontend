import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type BaseOneToManyRetrieveComponentType = {
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

const BaseOneToManyRetrieveComponent = (props: BaseOneToManyRetrieveComponentType) => {
  // Destructure Props
  const { ReduxCall, APICall, extras } = props;

  // JSX
  return (
    <React.Fragment>
      {/* BaseOneToManyRetrieveComponent */}
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

export default BaseOneToManyRetrieveComponent;
