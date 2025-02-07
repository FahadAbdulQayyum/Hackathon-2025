import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import { AppSidebar } from "../app-sidebar"
import Dashboard from "../Dashboard"

export function TabComp() {
    return (
        // <Tabs defaultValue="account" className="w-[400px]">
        // <Tabs defaultValue="account" className="w-[400px] flex pt-44">
        // <Tabs defaultValue="account" className="w-[600px] flex">
        <Tabs defaultValue="orders" className="flex px-standardSize">
            {/* <TabsList className="grid w-full grid-cols-2"> */}
            <TabsList className="flex flex-col space-y-5" >
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="agents">Agents</TabsTrigger>
                <TabsTrigger value="location">Locations</TabsTrigger>
                <TabsTrigger value="service">Services</TabsTrigger>
            </TabsList>
            <TabsContent value="orders" className="pl-4">
                <Card>
                    <Dashboard
                        // type="job"
                        // definedField='["_id", "name", "city_available", "selected_services_list", "agent_chosen", "_createdAt", "time"]'

                        type="job"
                        definedField={["_id", "name", "city_available", "selected_services_list", "agent_chosen", "_createdAt", "time"]}

                    />
                </Card>
            </TabsContent>
            <TabsContent value="users" className="pl-4">
                <Card>
                    <Dashboard
                        type="job"
                        definedField={["_id", "name", "city_available", "selected_services_list", "agent_chosen", "_createdAt", "time"]}
                    />
                </Card>
            </TabsContent>
            <TabsContent value="agents" className="pl-4">
                <Card>
                    <Card>
                        <Dashboard
                            type="agent"
                            definedField={["_id", "name", "city_available", "selected_services_list", "agent_chosen", "_createdAt", "time"]}
                        />
                    </Card>
                </Card>
            </TabsContent>
            <TabsContent value="location" className="pl-4">
                <Card>
                    <Dashboard
                        type="location"
                        definedField={["_id", "name", "city_available", "selected_services_list", "agent_chosen", "_createdAt", "time"]}
                    />
                </Card>
            </TabsContent>
            <TabsContent value="service" className="pl-4">
                <Card>
                    <Dashboard
                        type="service"
                        definedField={["_id", "name", "city_available", "selected_services_list", "agent_chosen", "_createdAt", "time"]}
                    />
                </Card>
            </TabsContent>
        </Tabs >
    )
}



// import { Button } from "@/components/ui/button"
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//     Tabs,
//     TabsContent,
//     TabsList,
//     TabsTrigger,
// } from "@/components/ui/tabs"

// export function TabComp() {
//     return (
//         // <Tabs defaultValue="account" className="w-[400px]">
//         <Tabs defaultValue="account" className="w-[400px] flex">
//             {/* <TabsList className="grid w-full grid-cols-2"> */}
//             <TabsList className="grid w-full grid-rows-2 space-y-5">
//                 <TabsTrigger value="orders">Orders</TabsTrigger>
//                 <TabsTrigger value="users">Users</TabsTrigger>
//                 <TabsTrigger value="agents">Agents</TabsTrigger>
//                 <TabsTrigger value="locations">Locations</TabsTrigger>
//                 <TabsTrigger value="services">Services</TabsTrigger>
//                 <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
//             </TabsList>
//             <TabsContent value="account">
//                 <Card>
//                     <CardHeader>
//                         <CardTitle>Account</CardTitle>
//                         <CardDescription>
//                             Make changes to your account here. Click save when you&apos;re done.
//                         </CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-2">
//                         <div className="space-y-1">
//                             <Label htmlFor="name">Name</Label>
//                             <Input id="name" defaultValue="Pedro Duarte" />
//                         </div>
//                         <div className="space-y-1">
//                             <Label htmlFor="username">Username</Label>
//                             <Input id="username" defaultValue="@peduarte" />
//                         </div>
//                     </CardContent>
//                     <CardFooter>
//                         <Button>Save changes</Button>
//                     </CardFooter>
//                 </Card>
//             </TabsContent>
//             <TabsContent value="password">
//                 <Card>
//                     <CardHeader>
//                         <CardTitle>Password</CardTitle>
//                         <CardDescription>
//                             Change your password here. After saving, you&apos;ll be logged out.
//                         </CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-2">
//                         <div className="space-y-1">
//                             <Label htmlFor="current">Current password</Label>
//                             <Input id="current" type="password" />
//                         </div>
//                         <div className="space-y-1">
//                             <Label htmlFor="new">New password</Label>
//                             <Input id="new" type="password" />
//                         </div>
//                     </CardContent>
//                     <CardFooter>
//                         <Button>Save password</Button>
//                     </CardFooter>
//                 </Card>
//             </TabsContent>
//         </Tabs>
//     )
// }
