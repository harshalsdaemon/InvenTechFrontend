import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/aConnection/bShadcnConnection/components/ui/dialog";
import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu";
import fullRoute from "@/bLove/gRoute/bFullRoute";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { DownloadCloudIcon, MenuIcon, PlusIcon, RefreshCwIcon } from "lucide-react";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { tasks } from "./data/tasks";


const ClosedPurchaseOrderListComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* ClosedPurchaseOrderListComponent */}

      <>
        <div className="h-full flex-1 flex-col space-y-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Closed Purchase Orders</h2>
              {/* <p className="text-muted-foreground">
                Sample List Details
              </p> */}
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <div className="flex flex-col text-right" >
                <p className="text-xs text-muted-foreground" >Last Sync on Sept 20, 2024 at 4:30 PM.</p>
                <p className="text-xs text-green-500" >Auto Sync is ON. Syncing from Magento.</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="yellow">
                    <RefreshCwIcon />Sync
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-amber-500 " ><ExclamationTriangleIcon /> <div className="mb-1" >Warning!</div></DialogTitle>
                    <DialogDescription>
                      Product catalogue is synced automatically FROM Magento System.
                      Adding a product in this system will NOT update in Magento.
                      It is recommended to add product in Magento System.
                      Do you wish to continue?
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="sm:justify-start">
                    <Button type="button" variant="yellow">
                      Yes
                    </Button>
                    <DialogClose asChild>
                      <Button type="button" variant="destructive">
                        No
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button asChild variant="blue" >
                <Link to={"#"} ><DownloadCloudIcon /> Export</Link>
              </Button>
            </div>
            <div className="flex lg:hidden items-center space-x-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="yellow">
                    <RefreshCwIcon />Sync
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-amber-500 " ><ExclamationTriangleIcon /> <div className="mb-1" >Warning!</div></DialogTitle>
                    <DialogDescription>
                      Product catalogue is synced automatically FROM Magento System.
                      Adding a product in this system will NOT update in Magento.
                      It is recommended to add product in Magento System.
                      Do you wish to continue?
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="sm:justify-start">
                    <Button type="button" variant="yellow">
                      Yes
                    </Button>
                    <DialogClose asChild>
                      <Button type="button" variant="destructive">
                        No
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="blue" size="icon" >
                    <MenuIcon className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="min-w-1.5" >
                  <DropdownMenuLabel>
                    <div className="flex flex-col text-right" >
                      <p className="text-xs text-muted-foreground" >Last Sync on Sept 20, 2024 at 4:30 PM.</p>
                      <p className="text-xs text-green-500" >Auto Sync is ON. Syncing from Magento.</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup className="flex flex-col gap-1" >
                    <DropdownMenuItem asChild >
                      <Button asChild variant="blue" >
                        <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.jClosedPurchaseOrderRoute.bCreateRoute} ><PlusIcon /> Create</Link>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild >
                      <Button asChild variant="blue" >
                        <Link to={"#"} ><DownloadCloudIcon /> Export</Link>
                      </Button>                    
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <DataTable data={tasks} columns={columns as any} />
        </div>
      </>
    </React.Fragment>
  )
}

export default ClosedPurchaseOrderListComponent;
