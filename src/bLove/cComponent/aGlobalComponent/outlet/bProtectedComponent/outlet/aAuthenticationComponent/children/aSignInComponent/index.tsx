import React from "react"

import AuthFormComponent, { AuthFormPropsType } from "../../component/aAuthFormComponent";


const SignInComponent = (props: AuthFormPropsType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SignInComponent */}
      <AuthFormComponent Redux={props.Redux} APICall={props.APICall} extras={props.extras} />
    </React.Fragment>
  )
}

export default SignInComponent;
