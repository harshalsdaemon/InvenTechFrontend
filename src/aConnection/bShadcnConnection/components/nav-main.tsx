import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/aConnection/bShadcnConnection/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/aConnection/bShadcnConnection/components/ui/sidebar"
import { Link } from "react-router-dom"
import React from "react"

export function NavMain({
  header,
  items,
}: {
  header: string,
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    isCollapsible?: boolean
    isHighlighted?: boolean
    items?: {
      title: string
      url: string
      isBlue?: boolean
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{header}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>

              { 
                item.isCollapsible ? (
                  <React.Fragment>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title} className={item.isHighlighted ? "bg-blue-100 hover:bg-blue-100/80 dark:bg-slate-800 dark:hover:bg-slate-800/80" : ""} >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild className={subItem.isBlue ? "bg-blue-100 hover:bg-blue-100/80 dark:bg-slate-800 dark:hover:bg-slate-800/80" : ""} >
                              <Link to={subItem.url}>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <SidebarMenuButton asChild className={item.isHighlighted ? "bg-blue-100 hover:bg-blue-100/80 dark:bg-slate-800 dark:hover:bg-slate-800/80" : ""} >
                      <Link to={item.url}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </React.Fragment>
                ) 
              }

              {/* <SidebarMenuButton asChild>
                <a href={item.url}>
                  <Frame />
                  <span>{"item.name"}</span>
                </a>
              </SidebarMenuButton> */}

              {/* <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link to={subItem.url}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent> */}
              
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
