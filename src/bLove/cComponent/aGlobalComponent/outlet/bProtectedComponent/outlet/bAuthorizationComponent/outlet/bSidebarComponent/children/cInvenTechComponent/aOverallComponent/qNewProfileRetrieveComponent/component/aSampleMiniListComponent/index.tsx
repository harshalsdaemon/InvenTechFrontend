import React from "react"

import { ScrollArea, ScrollBar } from "@/aConnection/bShadcnConnection/components/ui/scroll-area";

import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { tasks } from "./data/tasks";


const SampleMiniListComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* SampleMiniListComponent */}

      <>
        <div className="">
          <ScrollArea className="w-auto whitespace-nowrap rounded-md border-none p-2">
            <DataTable data={tasks} columns={columns} />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </>
    </React.Fragment>
  )
}

export default SampleMiniListComponent;
