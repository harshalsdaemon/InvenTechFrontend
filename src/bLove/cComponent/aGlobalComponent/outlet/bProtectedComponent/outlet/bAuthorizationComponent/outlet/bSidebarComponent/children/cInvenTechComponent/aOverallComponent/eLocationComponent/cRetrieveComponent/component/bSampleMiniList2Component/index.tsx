import React from "react";


import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { tasks } from "./data/tasks";


const SampleMiniList2Component = () => {
  // JSX
  return (
    <React.Fragment>
      {/* SampleMiniList2Component */}

      <div className="mt-2 w-full">
        <DataTable data={tasks} columns={columns} />
      </div>
    </React.Fragment>
  )
}

export default SampleMiniList2Component;
