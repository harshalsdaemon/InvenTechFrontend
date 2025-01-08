import moment from 'moment';
import React from "react";

import UserBlockComponent from "@/bLove/cComponent/aGlobalComponent/component/aUserBlockComponent";

import { formatLyricsWithHtml } from "@/aConnection/aAppConnection/HtmlTextParser";
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/aConnection/bShadcnConnection/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/aConnection/bShadcnConnection/components/ui/dialog";
import { Input } from '@/aConnection/bShadcnConnection/components/ui/input';
import { Label } from '@/aConnection/bShadcnConnection/components/ui/label';
import { ScrollArea, ScrollBar } from "@/aConnection/bShadcnConnection/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/aConnection/bShadcnConnection/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/aConnection/bShadcnConnection/components/ui/tabs';
import { cn } from "@/aConnection/bShadcnConnection/lib/utils";
import { CheckCircle, OctagonMinus, PlusIcon } from "lucide-react";
import SampleMiniListComponent from "./component/aSampleMiniListComponent";
import SampleMiniList2Component from "./component/bSampleMiniList2Component";
import data from "./extras/bData";


// type SettingComponentType = {
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

const SettingComponent = () => {
  // Destructure Props
  // const { APICall, extras } = props;

  // JSX
  return (
    <React.Fragment>
      {/* SettingComponent */}
      <div className="flex-1 space-y-8">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Setting
            </h2>
            {/* <p className="text-muted-foreground">
              Sample List Details
            </p> */}
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
                        <ul className="grid gap-3 grid-cols-4">
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
                                <li className={cn("flex flex-col gap-2 items-start justify-between col-span-5", eachValue?.style)} key={indexValue} >
                                  <span className="w-full flex flex-row align-middle items-center gap-4" >
                                    <span className="text-muted-foreground">
                                      {eachValue.label}:
                                    </span>
                                    <Dialog>
                                      <DialogTrigger asChild>
                                        <Button variant="blue" size="sm" ><PlusIcon /> Add Product</Button>
                                      </DialogTrigger>
                                      <DialogContent>
                                        <DialogHeader>
                                          <DialogTitle>Add Product</DialogTitle>
                                          {/* <DialogDescription>
                                            Anyone who has this link will be able to view this.
                                          </DialogDescription> */}
                                        </DialogHeader>

                                        <ul className="grid gap-4 grid-cols-2">
                                          <li className={cn("flex flex-col gap-1 items-start justify-between", eachValue?.style)} key={indexValue} >
                                            <span className="text-muted-foreground text-sm">
                                              {"Store Name"}:
                                            </span>
                                            <span className="w-4/5 truncate text-lg" >{"Dubai Center"}</span>
                                          </li>
                                          <li className={cn("flex flex-col gap-1 items-start justify-between col-span-5 ", eachValue?.style)} key={indexValue} >
                                            <span className="text-muted-foreground text-sm">
                                              {"Search & Select Product"}:
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
                  </Card>
                </div>                      
              ))}
              
              <div className='' >
                <Tabs defaultValue="password" className="w-full">
                  <TabsList className="grid w-[600px] grid-cols-4">
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="admin">Admin</TabsTrigger>
                    <TabsTrigger value="sync-setting">Sync Setting</TabsTrigger>
                    <TabsTrigger value="miscellaneous">Miscellaneous</TabsTrigger>
                  </TabsList>
                  <TabsContent value="password" className='flex flex-col gap-4' >
                    <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4" >
                      <CardHeader className="flex flex-row items-start bg-muted/50">
                        <div className="grid gap-0.5">
                          <CardTitle className="group flex items-center gap-2 text-lg">
                            {"Change Password"}
                          </CardTitle>
                          {/* <CardDescription>{eachSection.subtitle}</CardDescription> */}
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 text-sm">
                        <div className="flex flex-col gap-2" >
                          <div className="flex flex-col w-1/3 gap-3" >
                            <Label>{"Current Password"} :</Label>
                            <Input placeholder={""} type="text" />
                            <div className="flex justify-end m-0 p-0" >
                              <span className='m-0 p-0 underline' >Forgot Password?</span>
                            </div>
                          </div>
                          <div className="flex flex-col w-1/3 gap-3" >
                            <Label>{"New Password"} :</Label>
                            <Input placeholder={""} type="text" />
                          </div>
                          <div className="flex flex-col w-1/3 gap-3" >
                            <Label>{"Confirm Password"} :</Label>
                            <Input placeholder={""} type="text" />
                          </div>
                          <div className="flex flex-col w-1/3 gap-3" >
                            <Button variant="blue" >Change Password</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="admin" className='flex flex-col gap-4' >
                    <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4" >
                      <CardHeader className="flex flex-row items-start bg-muted/50">
                        <div className="grid gap-0.5">
                          <CardTitle className="group flex items-center gap-2 text-lg">
                            {"Admin Details"}
                          </CardTitle>
                          {/* <CardDescription>{eachSection.subtitle}</CardDescription> */}
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 text-sm">
                      <div className="grid gap-3">
                        <ul className="grid gap-3 grid-cols-4">
                          <li className={cn("flex flex-col gap-1 items-start justify-between")} >
                            <span className="text-muted-foreground">
                              {"ID"}:
                            </span>
                            <span className="w-4/5 truncate text-lg" >{"1982"}</span>
                          </li>
                          <li className={cn("flex flex-col gap-1 items-start justify-between")} >
                            <span className="text-muted-foreground">
                              {"Name"}:
                            </span>
                            <span className="w-4/5 truncate text-lg" >{"John Wick"}</span>
                          </li>
                          <li className={cn("flex flex-col gap-1 items-start justify-between")} >
                            <span className="text-muted-foreground">
                              {"Contact"}:
                            </span>
                            <span className="w-4/5 truncate text-lg" >{"987654312"}</span>
                          </li>
                          <li className={cn("flex flex-col gap-1 items-start justify-between")} >
                            <span className="text-muted-foreground">
                              {"Email"}:
                            </span>
                            <span className="w-4/5 truncate text-lg" >{"consequences@table.com"}</span>
                          </li>
                          <li className={cn("flex flex-col gap-1 items-start justify-between")} >
                            <span className="text-muted-foreground">
                              {"Location"}:
                            </span>
                            <span className="w-4/5 truncate text-lg" >{"Dubai"}</span>
                          </li>
                          <li className={cn("flex flex-col gap-1 items-start justify-between")} >
                            <span className="text-muted-foreground">
                              {"Username"}:
                            </span>
                            <span className="w-4/5 truncate text-lg" >{"keanu_reeves"}</span>
                          </li>
                        </ul>
                      </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="sync-setting" className='flex flex-col gap-4' >
                    <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4" >
                      <CardHeader className="flex flex-row items-start bg-muted/50">
                        <div className="grid gap-0.5">
                          <CardTitle className="group flex items-center gap-2 text-lg">
                            {"Sync Settings"}
                          </CardTitle>
                          <CardDescription className='text-red-600' >Sync settings are manager by Admin. Contact Admin for any changes & requests</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 text-sm">
                      <div className="grid gap-3">
                        <Table>
                          <TableHeader className="bg-gray-300" >
                            <TableRow>
                              <TableHead className="w-[300px]">Name</TableHead>
                              <TableHead className="w-[100px]">Type</TableHead>
                              <TableHead className="w-[100px]">To / From</TableHead>
                              <TableHead className="w-[100px]">Module</TableHead>
                              <TableHead className="w-[100px]">Duration</TableHead>
                              <TableHead className="w-[100px]">Change Request</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                          <TableRow>
                              <TableCell className="font-medium">Product Sync</TableCell>
                              <TableCell className="font-medium">Inward</TableCell>
                              <TableCell className="font-medium">From</TableCell>
                              <TableCell className="font-medium">Magento</TableCell>
                              <TableCell className="font-medium">1 hr</TableCell>
                              <TableCell className="font-medium">
                                <Button size="sm" variant="blue" >Request Change</Button>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Purchase Order Sync</TableCell>
                              <TableCell className="font-medium">Self</TableCell>
                              <TableCell className="font-medium">Within</TableCell>
                              <TableCell className="font-medium">Inventech</TableCell>
                              <TableCell className="font-medium">Instant</TableCell>
                              <TableCell className="font-medium">
                                <Button size="sm" variant="blue" >Request Change</Button>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Fulfilled Purchase Order to Closed Purchase Order</TableCell>
                              <TableCell className="font-medium">Self</TableCell>
                              <TableCell className="font-medium">Within</TableCell>
                              <TableCell className="font-medium">Inventech</TableCell>
                              <TableCell className="font-medium">Instant</TableCell>
                              <TableCell className="font-medium">
                                <Button size="sm" variant="blue" >Request Change</Button>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Outward Inventory Sync</TableCell>
                              <TableCell className="font-medium">Self</TableCell>
                              <TableCell className="font-medium">Within</TableCell>
                              <TableCell className="font-medium">Inventech</TableCell>
                              <TableCell className="font-medium">Instant</TableCell>
                              <TableCell className="font-medium">
                                <Button size="sm" variant="blue" >Request Change</Button>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Inventory Push</TableCell>
                              <TableCell className="font-medium">Outward</TableCell>
                              <TableCell className="font-medium">To</TableCell>
                              <TableCell className="font-medium">Magento</TableCell>
                              <TableCell className="font-medium">1 hr</TableCell>
                              <TableCell className="font-medium">
                                <Button size="sm" variant="blue" >Request Change</Button>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Customer Order Push</TableCell>
                              <TableCell className="font-medium">Outward</TableCell>
                              <TableCell className="font-medium">To</TableCell>
                              <TableCell className="font-medium">Shopify</TableCell>
                              <TableCell className="font-medium">1 hr</TableCell>
                              <TableCell className="font-medium">
                                <Button size="sm" variant="blue" >Request Change</Button>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="miscellaneous" className='flex flex-col gap-4' >
                    <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4" >
                      <CardHeader className="flex flex-row items-start bg-muted/50">
                        <div className="grid gap-0.5">
                          <CardTitle className="group flex items-center gap-2 text-lg">
                            {"Version"}
                          </CardTitle>
                          <CardDescription>2.3.0</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 text-sm">
                        <Button variant="blue" >Contact Developers</Button>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>                                
              </div>
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

export default SettingComponent;
