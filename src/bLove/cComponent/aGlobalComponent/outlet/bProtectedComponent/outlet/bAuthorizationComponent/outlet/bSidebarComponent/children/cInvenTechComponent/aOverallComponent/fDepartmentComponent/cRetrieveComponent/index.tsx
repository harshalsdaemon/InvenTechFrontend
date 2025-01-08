import moment from 'moment';
import React from "react";

import UserBlockComponent from "@/bLove/cComponent/aGlobalComponent/component/aUserBlockComponent";

import { formatLyricsWithHtml } from "@/aConnection/aAppConnection/HtmlTextParser";
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/aConnection/bShadcnConnection/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/aConnection/bShadcnConnection/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/aConnection/bShadcnConnection/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/aConnection/bShadcnConnection/components/ui/table";
import { cn } from "@/aConnection/bShadcnConnection/lib/utils";
import fullRoute from "@/bLove/gRoute/bFullRoute";
import { CheckCircle, Edit2Icon, OctagonMinus, PlusIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import SampleMiniListComponent from "./component/aSampleMiniListComponent";
import SampleMiniList2Component from "./component/bSampleMiniList2Component";
import data from "./extras/bData";


// type DepartmentRetrieveComponentType = {
  // ReduxCall: any
  // APICall: {
  //   retrieveAPIResponse: any
  // }
  // extras: {
  //   apiResponseHandler: {
  //     retrieveAPIResponseHandler: any
  //   },
  //   data: any
  // }
// }

const DepartmentRetrieveComponent = () => {
  // Destructure Props
  // const { APICall, extras } = props;

  // JSX
  return (
    <React.Fragment>
      {/* DepartmentRetrieveComponent */}
      <div className="flex-1 space-y-8">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Department Information
            </h2>
            {/* <p className="text-muted-foreground">
              Sample List Details
            </p> */}
          </div>
          <div className="hidden lg:flex items-center space-x-2">
            <Button asChild variant="blue" >
              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.fDepartmentRoute.bCreateRoute} ><Edit2Icon /> Edit</Link>
            </Button>
            <Button asChild variant="destructive" >
              <Link to={""} ><Trash2Icon /> Delete</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto grid flex-1 auto-rows-max gap-4">
          {/* {
            APICall.retrieveAPIResponse.isLoading ? "Loading..." : 
            APICall.retrieveAPIResponse.isError ? "Error..." :
            APICall.retrieveAPIResponse.isSuccess ? (
              <React.Fragment> */}
                {/* {
                  APICall.retrieveAPIResponse.data.success ? (
                    <React.Fragment> */}

            <div className="grid flex-1 items-start gap-4 sm:py-0">
              {data().content.sections.map((eachSection: any, indexSection: number) => eachSection.display && (
                <div key={indexSection} >
                  <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4" >
                    <CardHeader className="flex flex-row items-start bg-muted/50">
                      <div className="grid gap-0.5">
                        <CardTitle className="group flex items-center gap-2 text-lg">
                          {eachSection.title}
                        </CardTitle>
                        {/* <CardDescription>{eachSection.subtitle}</CardDescription> */}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 text-sm">
                      <div className="grid gap-3">
                        <ul className="grid gap-3 grid-cols-5">
                          {eachSection.values.map((eachValue: any, indexValue: number) => (
                            <React.Fragment>
                              {((eachValue.type === "normal" &&
                                <li className={cn("flex flex-col gap-1 items-start justify-between", eachValue?.style)} key={indexValue} >
                                  <span className="text-muted-foreground">
                                    {eachValue.label}:
                                  </span>
                                  <span className="w-4/5 truncate text-lg" >{eachValue.value || "--N/A--"}</span>
                                </li>
                              ))}

                              {((eachValue.type === "textarea" &&
                                <li className="flex flex-col gap-1 items-start justify-between" key={indexValue} >
                                  <span className="text-muted-foreground">
                                    {eachValue.label}:
                                  </span>
                                  <span>{formatLyricsWithHtml(eachValue.value || "--N/A--") || "--N/A--"}</span>
                                </li>
                              ))}

                              {((eachValue.type === "userBlock" &&
                                <li className="flex items-center justify-between">
                                  <span className="text-muted-foreground">
                                    {eachValue.label}:
                                  </span>
                                  <span>{eachValue.value ? <UserBlockComponent user={eachValue.value} /> : "--N/A--"}</span>
                                </li>
                              ))}
                              
                              {((eachValue.type === "date" &&
                                <li className="flex items-center justify-between">
                                  <span className="text-muted-foreground">
                                    {eachValue.label}:
                                  </span>
                                  <span className="flex flex-col items-end" >
                                    {eachValue.value ? (
                                      <React.Fragment>
                                        <span>{moment(eachValue.value).format("ddd, Do MMM YYYY")}</span>
                                        <span>{moment(eachValue.value).format("hh:mm:ss A")}</span>
                                      </React.Fragment>
                                    ) : <span>--N/A--</span>}
                                  </span>
                                </li>
                              ))}

                              {((eachValue.type === "special-checkbox" &&
                                <React.Fragment>
                                  <li className="flex flex-col items-start justify-between">
                                    <span className="text-muted-foreground">
                                      {eachValue.label}:
                                    </span>
                                    <span className="flex flex-col items-end" >
                                      <ScrollArea className="w-[450px] p-1" >
                                      {eachValue.value ? (
                                        <React.Fragment>
                                            <Table>
                                              <TableHeader>
                                                <TableRow>
                                                  {eachValue.columns.map((eachColumn: any, indexColumn: any) => (
                                                    <TableHead key={indexColumn} className="min-w-[100px]">
                                                      {eachColumn}
                                                    </TableHead>
                                                  ))}
                                                </TableRow>
                                              </TableHeader>
                                              <TableBody>
                                                {eachValue.value
                                                  ?.filter((menuOption: any) => menuOption?.menu?._id)
                                                  ?.map((menuOption: any, indexOption: any) => (
                                                  <TableRow key={indexOption}>
                                                    <TableCell>{menuOption.menu.aTitle}</TableCell>
                                                    {Object.keys(menuOption.access).map((permission) => (
                                                      <TableCell key={permission} >
                                                        {menuOption.access[permission] ? <CheckCircle className="text-green-500 h-4 w-4" /> : <OctagonMinus className="text-red-500 h-4 w-4" />}
                                                      </TableCell>
                                                    ))}
    
                                                  </TableRow>
                                                ))}
                                              </TableBody>
                                            </Table>
                                            <ScrollBar orientation="horizontal" />
                                        </React.Fragment>
                                      ) : <span>--N/A--</span>}
                                      </ScrollArea>
                                    </span>
                                  </li>
                                </React.Fragment>
                              ))}
                              
                              {((eachValue.type === "data-list-1" &&
                                <li className={cn("flex flex-col gap-2 items-start justify-between col-span-5", eachValue?.style)} key={indexValue} >
                                  <span className="w-full flex flex-row align-middle items-center gap-4" >
                                    <span className="text-muted-foreground">
                                      {eachValue.label}:
                                    </span>
                                    <Dialog>
                                      <DialogTrigger asChild>
                                        <Button variant="blue" size="sm" ><PlusIcon /> Add Department</Button>
                                      </DialogTrigger>
                                      <DialogContent>
                                        <DialogHeader>
                                          <DialogTitle>Add Department</DialogTitle>
                                          {/* <DialogDescription>
                                            Anyone who has this link will be able to view this.
                                          </DialogDescription> */}
                                        </DialogHeader>

                                        <ul className="grid gap-3 grid-cols-2">
                                          <li className={cn("flex flex-col gap-1 items-start justify-between", eachValue?.style)} key={indexValue} >
                                            <span className="text-muted-foreground">
                                              {"Loaction Name"}:
                                            </span>
                                            <span className="w-4/5 truncate text-lg" >{"Dubai Center"}</span>
                                          </li>
                                          <li className={cn("flex flex-col gap-1 items-start justify-between col-span-5 ", eachValue?.style)} key={indexValue} >
                                            <span className="text-muted-foreground">
                                              {"Department List"}:
                                            </span>
                                            <SampleMiniList2Component />
                                          </li>
                                        </ul>

                                        {/* <div className="flex items-center space-x-2">
                                          <div className="grid flex-1 gap-2">
                                            <Label htmlFor="link" className="sr-only">
                                              Link
                                            </Label>
                                            <Input
                                              id="link"
                                              defaultValue="https://ui.shadcn.com/docs/installation"
                                              readOnly
                                            />
                                          </div>
                                          <Button type="submit" size="sm" className="px-3">
                                            <span className="sr-only">Copy</span>
                                            <Copy />
                                          </Button>
                                        </div> */}
                                        <DialogFooter className="sm:justify-between">
                                          <DialogClose asChild>
                                            <Button type="button" variant="destructive">
                                              Cancel
                                            </Button>
                                          </DialogClose>
                                          <Button type="button" variant="blue">
                                            <PlusIcon /> Add
                                          </Button>
                                        </DialogFooter>
                                      </DialogContent>
                                    </Dialog>

                                  </span>
                                  <SampleMiniListComponent />
                                </li>
                              ))}
                              
                              {((eachValue.type === "data-list-2" &&
                                <li className={cn("flex flex-col gap-2 items-start justify-between col-span-5", eachValue?.style)} key={indexValue} >
                                  <span className="w-full flex flex-row align-middle items-center gap-4" >
                                    <span className="text-muted-foreground">
                                      {eachValue.label}:
                                    </span>
                                    <Dialog>
                                      <DialogTrigger asChild>
                                        <Button variant="blue" size="sm" ><PlusIcon /> Add Employee</Button>
                                      </DialogTrigger>
                                      <DialogContent>
                                        <DialogHeader>
                                          <DialogTitle>Add Employee</DialogTitle>
                                          {/* <DialogDescription>
                                            Anyone who has this link will be able to view this.
                                          </DialogDescription> */}
                                        </DialogHeader>

                                        <ul className="grid gap-3 grid-cols-2">
                                          <li className={cn("flex flex-col gap-1 items-start justify-between", eachValue?.style)} key={indexValue} >
                                            <span className="text-muted-foreground text-sm">
                                              {"Location Name"}:
                                            </span>
                                            <span className="w-4/5 truncate text-lg" >{"Dubai Center"}</span>
                                          </li>
                                          <li className={cn("flex flex-col gap-1 items-start justify-between col-span-5 ", eachValue?.style)} key={indexValue} >
                                            <span className="text-muted-foreground text-sm">
                                              {"Employee List"}:
                                            </span>
                                            <SampleMiniList2Component />
                                          </li>
                                        </ul>

                                        {/* <div className="flex items-center space-x-2">
                                          <div className="grid flex-1 gap-2">
                                            <Label htmlFor="link" className="sr-only">
                                              Link
                                            </Label>
                                            <Input
                                              id="link"
                                              defaultValue="https://ui.shadcn.com/docs/installation"
                                              readOnly
                                            />
                                          </div>
                                          <Button type="submit" size="sm" className="px-3">
                                            <span className="sr-only">Copy</span>
                                            <Copy />
                                          </Button>
                                        </div> */}
                                        <DialogFooter className="sm:justify-between">
                                          <DialogClose asChild>
                                            <Button type="button" variant="destructive">
                                              Cancel
                                            </Button>
                                          </DialogClose>
                                          <Button type="button" variant="blue">
                                            <PlusIcon /> Add
                                          </Button>
                                        </DialogFooter>
                                      </DialogContent>
                                    </Dialog>

                                  </span>
                                  <SampleMiniListComponent />
                                </li>
                              ))}
                              
                              {((eachValue.type === "normal-list" &&
                                <li className={cn("flex flex-col gap-1 items-start justify-between col-span-5", eachValue?.style)} key={indexValue} >
                                  <span className="text-muted-foreground">
                                    {eachValue.label}:
                                  </span>
                                  <Table>
                                    <TableHeader className="bg-gray-300" >
                                      <TableRow>
                                        <TableHead className="w-[100px]">Category List</TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      <TableRow>
                                        <TableCell className="font-medium">INV001 //dsadqwad sadadsad. hsad9as sadaslkjadlkjsadlksa</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">INV001 //dsadqwad sadadsad. hsad9as sadaslkjadlkjsadlksa</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">INV001 //dsadqwad sadadsad. hsad9as sadaslkjadlkjsadlksa</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">INV001 //dsadqwad sadadsad. hsad9as sadaslkjadlkjsadlksa</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">INV001 //dsadqwad sadadsad. hsad9as sadaslkjadlkjsadlksa</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">INV001 //dsadqwad sadadsad. hsad9as sadaslkjadlkjsadlksa</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">INV001 //dsadqwad sadadsad. hsad9as sadaslkjadlkjsadlksa</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">INV001 //dsadqwad sadadsad. hsad9as sadaslkjadlkjsadlksa</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">INV001 //dsadqwad sadadsad. hsad9as sadaslkjadlkjsadlksa</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">INV001 //dsadqwad sadadsad. hsad9as sadaslkjadlkjsadlksa</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">INV001 //dsadqwad sadadsad. hsad9as sadaslkjadlkjsadlksa</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">INV001 //dsadqwad sadadsad. hsad9as sadaslkjadlkjsadlksa</TableCell>
                                      </TableRow>
                                    </TableBody>
                                  </Table>
                                </li>
                              ))}
                              
                            </React.Fragment>
                          ))}
                          {/* Important Comment */}
                          {/* <li className="flex items-center justify-center mb-3">
                            <div
                              className="flex flex-col gap-2 items-center justify-between rounded-md border-2 border-muted bg-transparent p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span className="text-muted-foreground" >Cover Image:</span>
                              <img src={Cover} alt="User" width={150} />
                            </div>
                          </li> */}
                          {/* <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                              Title:
                            </span>
                            <span>{APICall.retrieveAPIResponse.data.retrieve.aTitle || "--N/A--"}</span>
                          </li> */}
                          {/* <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                              Status:
                            </span>
                            <span>{APICall.retrieveAPIResponse.data.retrieve.aStatus ? <Badge>Active</Badge> : <Badge>Inactive</Badge>}</span>
                          </li> */}
                          {/* <li className="flex flex-col gap-1 items-start justify-between">
                            <span className="text-muted-foreground">
                              Description:
                            </span>
                            <span>{formatLyricsWithHtml(APICall.retrieveAPIResponse.data.retrieve.aDescription || "--N/A--") || "--N/A--"}</span>
                          </li> */}
                        </ul>
                      </div>
                    </CardContent>
                    {/* <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                      <div className="text-xs text-muted-foreground">
                        Updated <time dateTime="2023-11-23">November 23, 2023</time>
                      </div>
                      <Pagination className="ml-auto mr-0 w-auto">
                        <PaginationContent>
                          <PaginationItem>
                            <Button size="icon" variant="outline" className="h-6 w-6">
                              <ChevronLeft className="h-3.5 w-3.5" />
                              <span className="sr-only">Previous Order</span>
                            </Button>
                          </PaginationItem>
                          <PaginationItem>
                            <Button size="icon" variant="outline" className="h-6 w-6">
                              <ChevronRight className="h-3.5 w-3.5" />
                              <span className="sr-only">Next Order</span>
                            </Button>
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </CardFooter> */}
                  </Card>
                </div>                      
              ))}
              
            </div>

                    {/* </React.Fragment>
                  ) : "Backend Error"
                } */}
              {/* </React.Fragment>
            ) :
            "Let me understand first"
          } */}
        </div>
      </div>

    </React.Fragment>      
  )
}  

export default DepartmentRetrieveComponent;
