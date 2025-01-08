import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";

import { DownloadCloudIcon } from "lucide-react";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { tasks } from "./data/tasks";


const ActivityLogListComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* ActivityLogListComponent */}

      <>
      <div className="h-full flex-1 flex-col space-y-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Activity Logs</h2>
            {/* <p className="text-muted-foreground">
              Sample List Details
            </p> */}
          </div>
          <div className="flex items-center space-x-2">
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

export default ActivityLogListComponent;
