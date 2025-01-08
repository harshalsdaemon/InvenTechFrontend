import React from "react";


import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/aConnection/bShadcnConnection/components/ui/card";
import { cn } from "@/aConnection/bShadcnConnection/lib/utils";
// import SampleMiniListComponent from "./component/aSampleMiniListComponent";


const someList = [1,2,3,4,5,6,7,8];
// type HowToUseComponentType = {
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

const HowToUseComponent = () => {
  // Destructure Props
  // const { APICall, extras } = props;

  // JSX
  return (
    <React.Fragment>
      {/* HowToUseComponent */}
      <div className="flex-1 space-y-8">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">How To Use
            </h2>
            {/* <p className="text-muted-foreground">
              Sample List Details
            </p> */}
          </div>
          {/* <div className="hidden lg:flex items-center space-x-2">
            <Button asChild variant="blue" >
              <Link to={"/new-profile-edit"} ><Edit2Icon /> Edit</Link>
            </Button>
          </div> */}
        </div>

        {/* <div className="mx-auto flex flex-1 auto-rows-max gap-4"> */}
          <div className="mx-auto flex flex-wrap gap-4">
            {someList.map((_each, index) => (
              <div
                key={index}
                className="flex w-[30%] min-w-[300px] items-start sm:py-0"
              >
                <Card className="overflow-hidden w-[30%] min-w-[300px]">
                  <CardHeader className="flex flex-row items-start bg-muted/50 p-0 m-0">
                    <div className="grid gap-0.5">
                      <img
                        src={"https://picsum.photos/500/500"}
                        alt={"BrandLogo"}
                        className={cn(
                          "w-full h-52 object-fit transition-all hover:scale-105 block",
                          "aspect-video"
                        )}
                      />
                      <CardTitle className="group flex items-center gap-2 text-lg px-4 mt-4">
                        {"How To Add Product in Catalogue"}
                      </CardTitle>
                      <CardDescription className="px-4 mb-4" >{"Product | Catalogue |"}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        {/* </div> */}

      </div>

    </React.Fragment>      
  )
}  

export default HowToUseComponent;
