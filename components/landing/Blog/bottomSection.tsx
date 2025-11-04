import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function BottomSection() {
    return (
        <div>
            <h3>Latest Research</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-4">

                    <Skeleton className="h-64 w-full" />
                    <div className="flex gap-4 items-center">
                        <Badge variant="default">Category</Badge>
                        <p className="text-xs"> 5 min. read</p>
                    </div>
                    <h3>Blog title heading will go here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <Button>Read</Button>
                </div>
                <div className="flex flex-col gap-4">

                    <Skeleton className="h-64 w-full" />
                    <div className="flex gap-4 items-center">
                        <Badge variant="default">Category</Badge>
                        <p className="text-xs"> 5 min. read</p>
                    </div>
                    <h3>Blog title heading will go here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <Button>Read</Button>
                </div>
                <div className="flex flex-col gap-4">

                    <Skeleton className="h-64 w-full" />
                    <div className="flex gap-4 items-center">
                        <Badge variant="default">Category</Badge>
                        <p className="text-xs"> 5 min. read</p>
                    </div>
                    <h3>Blog title heading will go here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <Button>Read</Button>
                </div>
            </div>
        </div>
    )
}