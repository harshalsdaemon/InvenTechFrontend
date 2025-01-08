import { ColumnDef } from "@tanstack/react-table"

import { Task } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { Link } from "react-router-dom"

export const columns: ColumnDef<Task>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate">
            {row.getValue("id")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[250px] truncate">
            <Link to={`/organization-role-retrieve/_id`} className="hover:underline" >
              {row.getValue("name")}
            </Link>
          </span>
        </div>
      )
    },
  },
  // {
  //   accessorKey: "address",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Address" />
  //   ),
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex space-x-2">
  //         <span className="max-w-[450px] truncate font-medium">
  //           {row.getValue("address")}
  //         </span>
  //       </div>
  //     )
  //   },
  // },
  {
    accessorKey: "manager",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created By" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate">
            {row.getValue("manager")}
          </span>
        </div>
      )
    },
  },
  // {
  //   accessorKey: "contact",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Contact" />
  //   ),
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex space-x-2">
  //         <span className="max-w-[450px] truncate font-medium">
  //           {row.getValue("contact")}
  //         </span>
  //       </div>
  //     )
  //   },
  // },
  // {
  //   accessorKey: "employeeCount",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Emp. Count" />
  //   ),
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex space-x-2">
  //         <span className="max-w-[450px] truncate font-medium">
  //           {row.getValue("employeeCount")}
  //         </span>
  //       </div>
  //     )
  //   },
  // },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions 
        row={row} route="organziation-role" />
    ),
  },
]
