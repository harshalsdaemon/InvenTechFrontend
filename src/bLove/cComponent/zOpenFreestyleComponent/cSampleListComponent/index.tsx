import React from "react"
import { Link } from "react-router-dom";

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import { ScrollArea, ScrollBar } from "@/aConnection/bShadcnConnection/components/ui/scroll-area";

import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { tasks } from "./data/tasks";
import { DownloadCloudIcon, PlusIcon, RefreshCwIcon } from "lucide-react";


const SampleListComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* SampleListComponent */}

      <>
      <div className="h-full flex-1 flex-col space-y-8 md:flex p-4">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Sample List</h2>
            {/* <p className="text-muted-foreground">
              Sample List Details
            </p> */}
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex flex-col text-right" >
              <p className="text-xs text-muted-foreground" >Last Sync on Sept 20, 2024 at 4:30 PM.</p>
              <p className="text-xs text-muted-foreground text-green-400" >Auto Sync is ON. Syncing from Magento.</p>
            </div>
            <Button asChild variant="secondary" >
              <Link to={"/"} ><RefreshCwIcon /> Sync</Link>
            </Button>
            <Button asChild variant="secondary" >
              <Link to={"/"} ><PlusIcon /> Create</Link>
            </Button>
            <Button asChild variant="secondary" >
              <Link to={"#"} ><DownloadCloudIcon /> Export</Link>
            </Button>
          </div>
        </div>

        <ScrollArea className="w-auto whitespace-nowrap rounded-md border-none">
          <DataTable data={tasks} columns={columns} />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
    </React.Fragment>
  )
}

export default SampleListComponent;
