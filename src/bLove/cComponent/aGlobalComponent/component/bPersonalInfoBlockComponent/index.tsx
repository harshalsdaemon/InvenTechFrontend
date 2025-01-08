import React from "react"

import getInitials from "@/bLove/dUtility/aGetInitialsUtility";
import { Avatar, AvatarFallback, AvatarImage } from "@/aConnection/bShadcnConnection/components/ui/avatar";
import { Link } from "react-router-dom";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const PersonalInfoBlockBlockComponent = (props: { user: any }) => {
  // Desctructure Props
  const { user } = props;

  // JSX
  return (
    <React.Fragment>
      <Link to={fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute} >
        {user ? (
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={"asdsadsad"} />
            <AvatarFallback>{getInitials(user ? `${user.eFirstname}` : "N", user ? `${user.eLastname}` : "A"  )}</AvatarFallback>
          </Avatar>
          <div className='hidden sm:block' >
            <p className="text-sm font-medium leading-none">{user ? `${user.eFirstname} ${user.eLastname}` : `--N/A--`}</p>
            <p className="text-sm text-muted-foreground">{user && `${user.eEmail}`}</p>
          </div>
        </div> ) : "--N/A--" }
      </Link>
    </React.Fragment>
  )
}

export default PersonalInfoBlockBlockComponent;
