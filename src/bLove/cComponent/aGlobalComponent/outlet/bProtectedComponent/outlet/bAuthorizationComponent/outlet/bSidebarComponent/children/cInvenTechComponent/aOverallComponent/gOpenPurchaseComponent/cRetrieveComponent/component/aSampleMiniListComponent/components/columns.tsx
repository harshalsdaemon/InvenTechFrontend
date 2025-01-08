import { ColumnDef } from "@tanstack/react-table"

// import { Badge } from "@/aConnection/bShadcnConnection/components/ui/badge"

// import { labels, priorities, statuses } from "../data/data"
import { Task } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
// import { DataTableRowActions } from "./data-table-row-actions"
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
    accessorKey: "skuID",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[350px] truncate">
            {row.getValue("skuID")}
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
          <span className="max-w-[300px] truncate">
            <Link to={`/product-catalogue-retrieve/_id`} className="hover:underline" >
              {row.getValue("name")}
            </Link>
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "orderQty",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order QTY" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[80px] truncate">
            {row.getValue("orderQty")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "receivedQty",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Received QTY" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[80px] truncate">
            {row.getValue("receivedQty")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "pending",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pending" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[80px] truncate">
            {row.getValue("pending")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "purchaseSKU",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Purchase/SKU (AED)" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] truncate">
            {row.getValue("purchaseSKU")}
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
          <span className="max-w-[100px] truncate">
            {row.getValue("warehouse")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "totalCost",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Cost" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] truncate">
            {row.getValue("totalCost")}
          </span>
        </div>
      )
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
]
