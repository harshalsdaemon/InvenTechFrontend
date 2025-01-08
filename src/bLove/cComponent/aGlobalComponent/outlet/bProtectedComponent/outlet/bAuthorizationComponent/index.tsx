import React from "react"

import SidebarAndHeaderComponent from "./component/bSidebarAndHeaderComponent";


const AuthorizationComponent = ({ children }: { children: React.ReactNode }) => {
  // JSX
  return (
    <React.Fragment>
      {/* AuthorizationComponent */}
      <SidebarAndHeaderComponent>
        {children}
      </SidebarAndHeaderComponent>
    </React.Fragment>
  )
}

export default AuthorizationComponent;
