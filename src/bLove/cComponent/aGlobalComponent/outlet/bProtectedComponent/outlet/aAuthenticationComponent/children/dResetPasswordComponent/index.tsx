import React from "react"
import AuthFormComponent, { AuthFormPropsType } from "../../component/aAuthFormComponent";


const ResetPasswordComponent = (props: AuthFormPropsType & { token: string | undefined }) => {
  // JSX
  return (
    <React.Fragment>
      {/* ResetPasswordComponent */}
      <AuthFormComponent APICall={props.APICall} extras={props.extras} token={props.token} />
    </React.Fragment>
  )
}

export default ResetPasswordComponent;
