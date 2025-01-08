import React from "react"
import AuthFormComponent, { AuthFormPropsType } from "../../component/aAuthFormComponent";


const SignUpComponent = (props: AuthFormPropsType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SignUpComponent */}
      <AuthFormComponent Redux={props.Redux} APICall={props.APICall} extras={props.extras} />
    </React.Fragment>
  )
}

export default SignUpComponent;
