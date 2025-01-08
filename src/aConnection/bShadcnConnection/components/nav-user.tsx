"use client"

import {
  ChevronsUpDown,
  KeyRound,
  LogIn,
  LogOut,
  Rat,
  User2,
  UserPen,
  UserPlus
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/aConnection/bShadcnConnection/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/aConnection/bShadcnConnection/components/ui/sidebar"
import apiResponseHandler from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/component/aHeaderComponent/extras/aAPIResponseHandler"
import getInitialsUtility from "@/bLove/dUtility/aGetInitialsUtility"
import fullRoute from "@/bLove/gRoute/bFullRoute"
import React from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"


export function NavUser({
  user,
  ReduxCall,
  APICall,
  navigate
}: {
  user: {
    name: string
    email: string
    avatar: string
  },
  ReduxCall?: any,
  APICall?: any,
  navigate?: any
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              {
                (ReduxCall.state.receivedObject as any)?.ProfileRetrieve?._id ? (
                  <React.Fragment>
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg">{getInitialsUtility(
                        (ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eFirstname, 
                        (ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eLastname
                      )}</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{`
                        ${(ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eFirstname} 
                        ${(ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eLastname}
                      `}</span>
                      <span className="truncate text-xs">{(ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eEmail}</span>
                    </div>
                  </React.Fragment>
                ) : (
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <User2 className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                )
              }
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              {
                (ReduxCall.state.receivedObject as any)?.ProfileRetrieve?._id ? (
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg">{getInitialsUtility(
                        (ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eFirstname, 
                        (ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eLastname
                      )}</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{`
                        ${(ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eFirstname} 
                        ${(ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eLastname}
                      `}</span>
                      <span className="truncate text-xs">{(ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eEmail}</span>
                    </div>
                  </div>
                ) : (
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <User2 className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                )
              }
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {
              (ReduxCall.state.receivedObject as any)?.ProfileRetrieve?._id ? (
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild >
                    <Link to={"new-profile-retrieve"} >
                      <Rat /> View Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild >
                    <Link to={"new-profile-edit"} >
                      <UserPen /> Edit Profile
                    </Link>
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem asChild >
                    <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.cProfilePasswordUpdateRoute} >
                      <FolderKey /> Change Password
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild >
                    <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.dProfileDeleteRoute} >
                      <BookmarkX /> Delete Profile
                    </Link>
                  </DropdownMenuItem> */}
                  <DropdownMenuItem asChild >
                    <span onClick={() => apiResponseHandler.logoutAPIResponseHandler(APICall.logoutAPITrigger, navigate, ReduxCall)} >
                      <LogOut /> Sign Out
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              ) : (
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild >
                    <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.aSignInRoute} >
                      <LogIn /> Sign In
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild >
                    <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.bSignUpRoute} >
                      <UserPlus /> Sign Up
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild >
                    <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.cForgotPasswordRoute} >
                    <KeyRound /> Forgot Password
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              )
            }
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
