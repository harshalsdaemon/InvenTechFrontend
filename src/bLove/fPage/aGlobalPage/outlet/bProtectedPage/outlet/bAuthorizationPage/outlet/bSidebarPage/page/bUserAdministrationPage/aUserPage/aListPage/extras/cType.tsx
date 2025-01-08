import { z } from "zod"
import { ColumnDef } from "@tanstack/react-table"

import {
  // ArrowDownIcon,
  // ArrowRightIcon,
  // ArrowUpIcon,
  CheckCircledIcon,
  // CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"
// import { Badge } from "@/aConnection/bShadcnConnection/components/ui/badge"
import { Checkbox } from "@/aConnection/bShadcnConnection/components/ui/checkbox"

import { DataTableColumnHeader } from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/component/aTypicalListComponent/components/data-table-column-header"
import { DataTableRowActions } from "@/bLove/cComponent/zOpenFreestyleComponent/bDataListComponent/components/data-table-row-actions2"


export const labels = [
  {
    value: "active",
    label: "Active",
  },
  {
    value: "inactive",
    label: "Inactive",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "active",
    label: "Active",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "inactive",
    label: "Inactive",
    icon: StopwatchIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
]


export const listSchema = z.object({
  _id: z.string(),
  eFirstname: z.string().optional(),
  eLastname: z.string().optional(),
  eEmail: z.string().optional(),
  eMobile: z.string().optional(),
  // cRole: z.object({aTitle: z.string()}).optional(),
  aStatus: z.boolean(),
  aSlug: z.string(),
})
export type List = z.infer<typeof listSchema>

export const listColumn: ColumnDef<List>[] = [
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
  {
    accessorKey: "_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-[180px]">{row.getValue("_id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "eFirstname",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Firstname" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate">
            {row.getValue("eFirstname")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "eLastname",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Lastname" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate">
            {row.getValue("eLastname")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "eEmail",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate">
            {row.getValue("eEmail")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "eMobile",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Mobile" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate">
            {row.getValue("eMobile")}
          </span>
        </div>
      )
    },
  },
  // {
  //   accessorKey: "cRole",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Role" />
  //   ),
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex space-x-2">
  //         <span className="max-w-[450px] truncate font-medium">
  //           {(row.getValue("cRole") as { aTitle: string } | undefined)?.aTitle}
  //         </span>
  //       </div>
  //     )
  //   },
  // },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions 
        row={row} route="user" />
    ),
  },
]

