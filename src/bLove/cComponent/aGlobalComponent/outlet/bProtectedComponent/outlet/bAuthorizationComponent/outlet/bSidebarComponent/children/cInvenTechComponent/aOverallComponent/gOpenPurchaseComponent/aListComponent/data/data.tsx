import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"
import { Star, StarHalfIcon, StarOff } from "lucide-react"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
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
    value: "unfullfilled",
    label: "Unfullfilled",
    icon: StarOff,
  },
  {
    value: "partiallyFullfilled",
    label: "Partially Fullfilled",
    icon: StarHalfIcon,
  },
  {
    value: "fullfilled",
    label: "Fullfilled",
    icon: Star,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
]
