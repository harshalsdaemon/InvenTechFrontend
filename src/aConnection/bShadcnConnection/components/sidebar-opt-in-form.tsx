// import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import {
  Card,
  // CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/aConnection/bShadcnConnection/components/ui/card"
// import { SidebarInput } from "@/aConnection/bShadcnConnection/components/ui/sidebar"
import { Quote } from "lucide-react"

export function SidebarOptInForm() {
  return (
    <Card className="shadow-none">
      {/* <form> */}
        <CardHeader className="p-4">
          <CardTitle className="text-sm flex gap-2"><Quote /> Thought of the Day</CardTitle>
          <CardDescription>
            Learn, how to learn.
          </CardDescription>
        </CardHeader>
        {/* <CardContent className="grid gap-2.5 p-4">
          <SidebarInput type="email" placeholder="Email" />
          <Button
            className="w-full bg-sidebar-primary text-sidebar-primary-foreground shadow-none"
            size="sm"
          >
            Subscribe
          </Button>
        </CardContent> */}
      {/* </form> */}
    </Card>
  )
}
