import { ColumnDef } from "@tanstack/react-table"

import { AlertTriangle, ThumbsUp } from "lucide-react"
import { Link } from "react-router-dom"
import { Task } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

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
      <DataTableColumnHeader column={column} title="SKU ID" />
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
            <Link to={`/inventory-general-retrieve/_id`} className="hover:underline" >
              {row.getValue("name")}
            </Link>
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Qty" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate">
            {row.getValue("quantity")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "warehouse",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Warehouse" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate">
            {row.getValue("warehouse")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "barcode",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Barcode" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate">
            {row.getValue("barcode")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "averagePurchase",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Avg Purch./SKU (AED)" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate">
            {row.getValue("averagePurchase")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "averageCost",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Avg Cost/SKU (AED)" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate">
            {row.getValue("averageCost")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "alert",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Alert" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate">
            {row.getValue("alert") === "up" ? (
              <ThumbsUp className="w-6 h-6 text-green-500"  />
            ) : (
              <AlertTriangle className="w-6 h-6 text-red-500" />
            )}
          </span>
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions 
        row={row} route="employee" />
    ),
  },
]
