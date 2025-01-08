import { ColumnDef } from "@tanstack/react-table"


import { Task } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"

export const columns: ColumnDef<Task>[] = [
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
          <span className="max-w-[450px] truncate">
            {row.getValue("name")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "empCount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Emp. Count" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate">
            {row.getValue("empCount")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "dateAdded",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date Added" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate">
            {row.getValue("dateAdded")}
          </span>
        </div>
      )
    },
  },
]
