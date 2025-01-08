import { RootState } from "@/aConnection/dReduxConnection"
import globalSlice from "@/bLove/bRedux/aGlobalSlice"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import userAPIEndpoint from "@/bLove/aAPI/bUserAdministrationAPI/aUserAPIEndpoints"
import getInitialsUtility from "@/bLove/dUtility/aGetInitialsUtility"
import fullRoute from "@/bLove/gRoute/bFullRoute"
import BrandLogo from "@/bLove/hAsset/BrandLogo/BrandLogo.png"
import apiResponseHandler from "./extras/aAPIResponseHandler"

import { ModeToggle } from "@/aConnection/bShadcnConnection/components/mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/aConnection/bShadcnConnection/components/ui/avatar"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/aConnection/bShadcnConnection/components/ui/sheet"
import { cn } from "@/aConnection/bShadcnConnection/lib/utils"
import brandConnection from "@/aConnection/eBrandConnection"
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu"
import {
  BookmarkX,
  FolderKey,
  KeyRound,
  LogIn,
  LogOut,
  Menu,
  Rat,
  User2,
  UserPen
} from "lucide-react"


const HeaderComponent = () => {
  // Variable
  const navigate = useNavigate();

  // Redux Call
  const ReduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    logoutAPITrigger: userAPIEndpoint.useLazyUserLogoutAPIQuery()[0],
    logoutAPIResponse: userAPIEndpoint.useLazyUserLogoutAPIQuery()[1],
  }
  
  // JSX
  return (
    <React.Fragment>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          {/* Important Comment */}
          {/* <img
            src={BrandLogo}
            alt={"BrandLogo"}
            className={cn(
              "h-auto object-fit transition-all hover:scale-105 w-[35px]",
              "aspect-square"
            )}
            onClick={() => navigate(fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute)}
          /> */}
          <img
            src={BrandLogo}
            alt={"BrandLogo"}
            className={cn(
              "h-[40px] object-fit transition-all hover:scale-105 w-auto hidden dark:block",
              "portrait"
            )}
            onClick={() => navigate(fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute)}
          />
          <img
            src={BrandLogo}
            alt={"BrandLogo"}
            className={cn(
              "h-[40px] object-fit transition-all hover:scale-105 w-auto block dark:hidden",
              "portrait"
            )}
            onClick={() => navigate(fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute)}
          />
          {/* Important Comment */}
          {/* <Link
            to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aDashboardRoute}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link> */}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to={fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute}
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <img
                  src={BrandLogo}
                  alt={"BrandLogo"}
                  className={cn(
                    "h-[40px] object-fit transition-all hover:scale-105 w-auto hidden dark:block",
                    "portrait"
                  )}
                  onClick={() => navigate(fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute)}
                />
                <img
                  src={BrandLogo}
                  alt={"BrandLogo"}
                  className={cn(
                    "h-[40px] object-fit transition-all hover:scale-105 w-auto block dark:hidden",
                    "portrait"
                  )}
                  onClick={() => navigate(fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute)}
                />
                <span className="sr-only">{brandConnection.brandName} - Admin</span>
              </Link>
              <Link 
                to={"fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute."} 
                className="hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute}
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute}
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute}
                className="text-muted-foreground hover:text-foreground"
              >
                User Administration
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-2 md:ml-auto md:gap-2 lg:gap-2">
          {/* Important Comment */}
          {/* <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form> */}
          <div className="ml-auto flex gap-2 flex-1 sm:flex-initial items-center">
            <ModeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {
                  (ReduxCall.state.receivedObject as any)?.ProfileRetrieve?._id ? (
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage src={"asdsadsad"} />
                        <AvatarFallback>{getInitialsUtility(
                          (ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eFirstname, 
                          (ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eLastname
                        )}</AvatarFallback>
                      </Avatar>
                      <div className='hidden sm:block' >
                        <div className="flex items-center flex-1 gap-1">
                          <p className="text-sm font-medium leading-none">{`
                            ${(ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eFirstname} 
                            ${(ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eLastname}
                          `}</p>
                          <p className="text-xs font-medium text-muted-foreground">
                            ({(ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.cRole?.aTitle})
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground">{(ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eEmail}</p>
                      </div>
                    </div>
                  ) : (
                    <Button variant="secondary" size="icon" className="rounded-full">
                      <User2 className="h-5 w-5" />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  )
                }
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {
                  (ReduxCall.state.receivedObject as any)?.ProfileRetrieve?._id ? (
                    <React.Fragment>
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.aProfileRetrieveRoute} >
                            <Rat /> View Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.bProfileUpdateRoute} >
                            <UserPen /> Edit Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.cProfilePasswordUpdateRoute} >
                            <FolderKey /> Change Password
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.dProfileDeleteRoute} >
                            <BookmarkX /> Delete Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <span onClick={() => apiResponseHandler.logoutAPIResponseHandler(APICall.logoutAPITrigger, navigate, ReduxCall)} >
                            <LogOut /> Sign Out
                          </span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.aSignInRoute} >
                            <LogIn /> Sign In
                          </Link>
                        </DropdownMenuItem>
                        {/* <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.bSignUpRoute} >
                            <UserPlus /> Sign Up
                          </Link>
                        </DropdownMenuItem> */}
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.cForgotPasswordRoute} >
                          <KeyRound /> Forgot Password
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </React.Fragment>
                  )
                }
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default HeaderComponent;
