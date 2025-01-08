import * as React from "react"
import {
  ArrowDown,
  ArrowUp,
  Bell,
  // BellDotIcon,
  Copy,
  CornerUpLeft,
  CornerUpRight,
  FileText,
  GalleryVerticalEnd,
  LineChart,
  Link,
  // MoreHorizontal,
  Settings2,
  // Star,
  Trash,
  Trash2,
  User2Icon,
} from "lucide-react"

// import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import {
  Popover,
  PopoverContent,
  // PopoverTrigger,
} from "@/aConnection/bShadcnConnection/components/ui/popover"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/aConnection/bShadcnConnection/components/ui/sidebar"
import { ModeToggle } from "./mode-toggle"
import { NavLink } from "react-router-dom"
import fullRoute from "@/bLove/gRoute/bFullRoute"

const data = [
  [
    {
      label: "Customize Page",
      icon: Settings2,
    },
    {
      label: "Turn into wiki",
      icon: FileText,
    },
  ],
  [
    {
      label: "Copy Link",
      icon: Link,
    },
    {
      label: "Duplicate",
      icon: Copy,
    },
    {
      label: "Move to",
      icon: CornerUpRight,
    },
    {
      label: "Move to Trash",
      icon: Trash2,
    },
  ],
  [
    {
      label: "Undo",
      icon: CornerUpLeft,
    },
    {
      label: "View analytics",
      icon: LineChart,
    },
    {
      label: "Version History",
      icon: GalleryVerticalEnd,
    },
    {
      label: "Show delete pages",
      icon: Trash,
    },
    {
      label: "Notifications",
      icon: Bell,
    },
  ],
  [
    {
      label: "Import",
      icon: ArrowUp,
    },
    {
      label: "Export",
      icon: ArrowDown,
    },
  ],
]

export function NavActions() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // React.useEffect(() => {
  //   setIsOpen(true)
  // }, [])

  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="hidden font-medium text-muted-foreground md:inline-block">
        <div className="text-right text-xs" >
          {time.toLocaleDateString(undefined, {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
        <div className="text-right text-xs" >
          {time.toLocaleTimeString()}
        </div>
      </div>
      {/* <Button variant="ghost" size="icon" className="h-7 w-7">
        <Star />
      </Button> */}
      <ModeToggle />
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        {/* <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 data-[state=open]:bg-accent"
          >
            <ModeToggle />
          </Button>
        </PopoverTrigger> */}
        {/* <PopoverTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="data-[state=open]:bg-accent"
          >
            <BellDotIcon />
          </Button>
        </PopoverTrigger> */}
        <PopoverContent
          className="w-56 overflow-hidden rounded-lg p-0"
          align="end"
        >
          <Sidebar collapsible="none" className="bg-transparent">
            <SidebarContent>
              <SidebarGroup className="border-b last:border-none">
                <SidebarGroupContent className="gap-0">
                  <SidebarMenu>
                    <SidebarMenuItem>

                      <SidebarMenuButton asChild>
                        <NavLink to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.aProfileRetrieveRoute} >
                          <User2Icon /> <span>Profile Retrieve</span>
                        </NavLink>
                      </SidebarMenuButton>
                      <SidebarMenuButton asChild>
                        <NavLink to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.bProfileUpdateRoute} >
                          <User2Icon /> <span>Profile Update</span>
                        </NavLink>
                      </SidebarMenuButton>
                      <SidebarMenuButton asChild>
                        <NavLink to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.cProfilePasswordUpdateRoute} >
                          <User2Icon /> <span>Profile Password Update</span>
                        </NavLink>
                      </SidebarMenuButton>
                      <SidebarMenuButton asChild>
                        <NavLink to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.dProfileDeleteRoute} >
                          <User2Icon /> <span>Profile Delete</span>
                        </NavLink>
                      </SidebarMenuButton>
                      <SidebarMenuButton >
                        <User2Icon /> <span>Logout</span>
                      </SidebarMenuButton>

                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              {data.map((group, index) => (
                <SidebarGroup key={index} className="border-b last:border-none">
                  <SidebarGroupContent className="gap-0">
                    <SidebarMenu>
                      {group.map((item, index) => (
                        <SidebarMenuItem key={index}>
                          <SidebarMenuButton>
                            <item.icon /> <span>{item.label}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}
            </SidebarContent>
          </Sidebar>
        </PopoverContent>
      </Popover>
    </div>
  )
}
