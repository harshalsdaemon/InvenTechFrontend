import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";

import fullRoute from "@/bLove/gRoute/bFullRoute";
import { DownloadCloudIcon, PlusIcon } from "lucide-react";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { tasks } from "./data/tasks";


const WarehouseManagementListComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* WarehouseManagementListComponent */}

      <>
        <div className="h-full flex-1 flex-col space-y-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Warehouse Management</h2>
              {/* <p className="text-muted-foreground">
                Sample List Details
              </p> */}
            </div>
            <div className="flex items-center space-x-2">
              <Button asChild variant="blue" >
                <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.bWarehouseManagementRoute.bCreateRoute} ><PlusIcon /> Create</Link>
              </Button>
              <Button asChild variant="blue" >
                <Link to={"#"} ><DownloadCloudIcon /> Export</Link>
              </Button>
            </div>
          </div>

          <DataTable data={tasks} columns={columns as any} />
        </div>
      </>
    </React.Fragment>
  )
}

export default WarehouseManagementListComponent;
