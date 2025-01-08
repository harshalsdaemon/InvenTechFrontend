import React from "react"

import getInitials from "@/bLove/dUtility/aGetInitialsUtility";
import { Avatar, AvatarFallback, AvatarImage } from "@/aConnection/bShadcnConnection/components/ui/avatar";
import { Link } from "react-router-dom";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const UserBlockComponent = ({ user }: any) => {
  // JSX
  return (
    <React.Fragment>
      <Link to={fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute} >
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={"asdsadsad"} />
            <AvatarFallback>{getInitials(user ? `${user.eFirstname}` : "InvenTech", user ? `${user.eLastname}` : "InvenTech"  )}</AvatarFallback>
          </Avatar>
          <div className='hidden sm:block' >
            <p className="text-sm font-medium leading-none">{user ? `${user.eFirstname} ${user.eLastname}` : `InvenTech`}</p>
            {/* <p className="text-sm text-muted-foreground">{user ? `${user.eEmail}` : `someone@inventech.com`}</p> */}
          </div>
        </div>
      </Link>
    </React.Fragment>
  )
}

export default UserBlockComponent;
