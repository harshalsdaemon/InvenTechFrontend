import { ColumnDef } from "@tanstack/react-table"


import { Checkbox } from "@/aConnection/bShadcnConnection/components/ui/checkbox"
import { Link } from "react-router-dom"
import { Task } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // {
  //   accessorKey: "id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Task" />
  //   ),
  //   cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  // {
  //   accessorKey: "title",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Title" />
  //   ),
  //   cell: ({ row }) => {
  //     const label = labels.find((label) => label.value === row.original.label)

  //     return (
  //       <div className="flex space-x-2">
  //         {label && <Badge variant="outline">{label.label}</Badge>}
  //         <span className="max-w-[450px] truncate font-medium">
  //           {row.getValue("title")}
  //         </span>
  //       </div>
  //     )
  //   },
  // },
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
    accessorKey: "skuID",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SKU ID" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] truncate">
            {row.getValue("skuID")}
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
          <span className="max-w-[100px] truncate">
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
          <span className="max-w-[100px] truncate">
            {row.getValue("priceAEDSupplier")}
          </span>
        </div>
      )
    },
  },
]
