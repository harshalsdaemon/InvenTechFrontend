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
    accessorKey: "skuID",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SKU ID" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] truncate font-normal">
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
          <span className="max-w-[300px] truncate font-normal">
            <Link to={`/product-catalogue-retrieve/_id`} className="hover:underline" >
              {row.getValue("name")}
            </Link>
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "storeViewCode",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Store View Code" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] truncate font-normal">
            {row.getValue("storeViewCode")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] truncate font-normal">
            {row.getValue("type")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "priceAEDSupplier",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price (AED-Supplier)" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] truncate font-normal">
            {row.getValue("priceAEDSupplier")}
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
          <span className="max-w-[100px] truncate font-normal">
            {row.getValue("barcode")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "minQuantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Min. Qty." />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] truncate font-normal">
            {row.getValue("minQuantity")}
          </span>
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions 
        row={row} route="product-catalogue" />
    ),
  },
]
