import React from "react";


import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { tasks } from "./data/tasks";


const SampleMiniList3Component = () => {
  // JSX
  return (
    <React.Fragment>
      {/* SampleMiniList3Component */}

      <div className="w-full">
        <DataTable data={tasks} columns={columns} />
      </div>
    </React.Fragment>
  )
}

export default SampleMiniList3Component;
