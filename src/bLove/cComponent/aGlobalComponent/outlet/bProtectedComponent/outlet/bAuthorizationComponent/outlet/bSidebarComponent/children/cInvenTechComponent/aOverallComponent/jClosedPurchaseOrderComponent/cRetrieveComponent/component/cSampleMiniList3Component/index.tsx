import React from "react";


import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { tasks } from "./data/tasks";


const SampleMiniList3Component = () => {
  // JSX
  return (
    <React.Fragment>
      {/* SampleMiniList3Component */}

      <div className="w-[100vh - 500px]">
        <DataTable data={tasks} columns={columns as any} />
      </div>
    </React.Fragment>
  )
}

export default SampleMiniList3Component;
