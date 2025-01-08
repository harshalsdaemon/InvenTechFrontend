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
import { Badge } from "@/aConnection/bShadcnConnection/components/ui/badge"
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
  aTitle: z.string(),
  aSubtitle: z.string(),
  aDescription: z.string(),
  aDetail: z.string(),
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
    accessorKey: "aTitle",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === (row.original.aStatus ? "active" : "inactive"))

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[450px] truncate">
            {row.getValue("aTitle")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "aSubtitle",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subtitle" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate">
            {row.getValue("aSubtitle")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "aStatus",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === (row.getValue("aStatus") ? "active" : "inactive")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions 
        row={row} route="base" />
    ),
  },
]

