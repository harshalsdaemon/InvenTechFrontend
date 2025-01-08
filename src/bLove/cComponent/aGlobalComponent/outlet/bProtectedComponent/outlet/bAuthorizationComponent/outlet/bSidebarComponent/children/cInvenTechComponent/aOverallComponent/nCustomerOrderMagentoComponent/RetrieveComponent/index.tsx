import React from "react"
import moment from 'moment';

import UserBlockComponent from "@/bLove/cComponent/aGlobalComponent/component/aUserBlockComponent"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/aConnection/bShadcnConnection/components/ui/card"
import { formatLyricsWithHtml } from "@/aConnection/aAppConnection/HtmlTextParser";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/aConnection/bShadcnConnection/components/ui/table";
import { ScrollArea, ScrollBar } from "@/aConnection/bShadcnConnection/components/ui/scroll-area";
import { CheckCircle, Edit2Icon, OctagonMinus, Trash2Icon } from "lucide-react";
import data from "./extras/bData";
import { cn } from "@/aConnection/bShadcnConnection/lib/utils";
import SampleMiniListComponent from "./component/aSampleMiniListComponent";
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import { Link } from "react-router-dom";
import fullRoute from "@/bLove/gRoute/bFullRoute";


// type CustomerOrderMagentoRetrieveComponentType = {
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

const CustomerOrderMagentoRetrieveComponent = () => {
  // Destructure Props
  // const { APICall, extras } = props;

  // JSX
  return (
    <React.Fragment>
      {/* CustomerOrderMagentoRetrieveComponent */}
      <div className="flex-1 space-y-8">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Order Information
            </h2>
            {/* <p className="text-muted-foreground">
              Sample List Details
            </p> */}
          </div>
          <div className="hidden lg:flex items-center space-x-2">
            <Button asChild variant="blue" >
              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.aProductCatalogueRoute.bCreateRoute} ><Edit2Icon /> Edit</Link>
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
                              
                              {((eachValue.type === "data-list" &&
                                <li className={cn("flex flex-col gap-1 items-start justify-between col-span-5", eachValue?.style)} key={indexValue} >
                                  <span className="text-muted-foreground">
                                    {eachValue.label}:
                                  </span>
                                  <SampleMiniListComponent />
                                </li>
                              ))}
                              
                              {((eachValue.type === "normal-list" &&
                                <li className={cn("flex flex-col gap-4 items-start justify-between col-span-5", eachValue?.style)} key={indexValue} >
                                  {/* <span className="text-muted-foreground">
                                    {eachValue.label}:
                                  </span> */}
                                  <Table>
                                    <TableHeader className="bg-gray-300" >
                                      <TableRow>
                                        <TableHead className="w-[100px]">SKu ID</TableHead>
                                        <TableHead className="w-[100px]">Name</TableHead>
                                        <TableHead className="w-[100px]">Quantity</TableHead>
                                        <TableHead className="w-[100px]">Shipping From</TableHead>
                                        <TableHead className="w-[100px]">Barcode</TableHead>
                                        <TableHead className="w-[100px]">Price/Unit (AED)</TableHead>
                                        <TableHead className="w-[100px]">Shipping Cost (AED)</TableHead>
                                        <TableHead className="w-[100px]">Total Cost (AED)</TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      <TableRow>
                                        <TableCell className="font-medium">613872</TableCell>
                                        <TableCell className="font-medium">Lo'real Shampoo</TableCell>
                                        <TableCell className="font-medium">700</TableCell>
                                        <TableCell className="font-medium">Dubai</TableCell>
                                        <TableCell className="font-medium">3562362</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">613872</TableCell>
                                        <TableCell className="font-medium">Lo'real Shampoo</TableCell>
                                        <TableCell className="font-medium">700</TableCell>
                                        <TableCell className="font-medium">Dubai</TableCell>
                                        <TableCell className="font-medium">3562362</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">613872</TableCell>
                                        <TableCell className="font-medium">Lo'real Shampoo</TableCell>
                                        <TableCell className="font-medium">700</TableCell>
                                        <TableCell className="font-medium">Dubai</TableCell>
                                        <TableCell className="font-medium">3562362</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">613872</TableCell>
                                        <TableCell className="font-medium">Lo'real Shampoo</TableCell>
                                        <TableCell className="font-medium">700</TableCell>
                                        <TableCell className="font-medium">Dubai</TableCell>
                                        <TableCell className="font-medium">3562362</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">613872</TableCell>
                                        <TableCell className="font-medium">Lo'real Shampoo</TableCell>
                                        <TableCell className="font-medium">700</TableCell>
                                        <TableCell className="font-medium">Dubai</TableCell>
                                        <TableCell className="font-medium">3562362</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">613872</TableCell>
                                        <TableCell className="font-medium">Lo'real Shampoo</TableCell>
                                        <TableCell className="font-medium">700</TableCell>
                                        <TableCell className="font-medium">Dubai</TableCell>
                                        <TableCell className="font-medium">3562362</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium">613872</TableCell>
                                        <TableCell className="font-medium">Lo'real Shampoo</TableCell>
                                        <TableCell className="font-medium">700</TableCell>
                                        <TableCell className="font-medium">Dubai</TableCell>
                                        <TableCell className="font-medium">3562362</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
                                        <TableCell className="font-medium">34.29</TableCell>
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

export default CustomerOrderMagentoRetrieveComponent;
