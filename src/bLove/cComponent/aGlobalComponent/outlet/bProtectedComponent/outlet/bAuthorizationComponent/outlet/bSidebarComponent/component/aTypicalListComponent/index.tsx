import { Link } from "react-router-dom"

import { DataTable } from "./components/data-table"

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import { ScrollArea, ScrollBar } from "@/aConnection/bShadcnConnection/components/ui/scroll-area"


type TypicalListComponentType = {
  ReduxCall: any
  APICall: {
    listAPIResponse: any
  }
  extras: {
    apiResponseHandler: {
      listAPIResponseHandler: any
    },
    data: any,
    listSchema: any,
    listColumn: any,
  }
}

export default function TypicalListComponent(props: TypicalListComponentType) {
  // Destructure Props
  const { extras } = props;

  // JSX
  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{extras.data.header.title}</h2>
            <p className="text-muted-foreground">
              {extras.data.header.subtitle}
            </p>
          </div>
          <div className="flex items-center space-x-2">
          {extras.data.header.buttons.map((each: any, index: number) => (
            <Button asChild variant="secondary" key={index} >
              <Link to={each.to} >{each.label}</Link>
            </Button>
          ))}
          </div>
        </div>

        <ScrollArea className="w-fit whitespace-nowrap rounded-md border-none">
          {extras.data?.content?.list && <DataTable data={extras.data.content.list} columns={extras.listColumn} />}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        {/* <DataTable data={tasks} columns={columns} /> */}
      </div>
    </>
  )
}
