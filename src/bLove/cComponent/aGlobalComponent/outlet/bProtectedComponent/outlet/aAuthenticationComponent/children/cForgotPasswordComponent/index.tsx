import React from "react"
import AuthFormComponent, { AuthFormPropsType } from "../../component/aAuthFormComponent";


const ForgotPasswordComponent = (props: AuthFormPropsType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ForgotPasswordComponent */}
      <AuthFormComponent APICall={props.APICall} extras={props.extras} />
    </React.Fragment>
  )
}

export default ForgotPasswordComponent;
