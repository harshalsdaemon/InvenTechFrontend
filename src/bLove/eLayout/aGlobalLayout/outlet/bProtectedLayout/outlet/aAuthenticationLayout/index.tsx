import React from "react";
import { Outlet } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import globalSlice from "@/bLove/bRedux/aGlobalSlice";
// import { RootState } from "@/aConnection/dReduxConnection";

import AuthenticationComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/aAuthenticationComponent";
// import fullRoute from "@/bLove/gRoute/bFullRoute";


const AuthenticationLayout = () => {
  // // Variable
  // const navigate = useNavigate();

  // // Redux Call
  // const ReduxCall = {
  //   state: useSelector((state: RootState) => state.globalSlice),
  //   dispatch: useDispatch(),
  //   action: globalSlice.actions
  // }

  // // All Renders
	// // First Render
	// useEffect(() => {
	// 	(ReduxCall.state.receivedObject as any)?.ProfileRetrieve?._id ?
	// 		navigate(fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute)
	// 		:
	// 		null
	// }, [ReduxCall.state])
  
  // JSX
  return (
    <React.Fragment>
      {/* AuthenticationLayout */}
      <AuthenticationComponent>
        <Outlet />
      </AuthenticationComponent>
    </React.Fragment>
  )
}

export default AuthenticationLayout; 
