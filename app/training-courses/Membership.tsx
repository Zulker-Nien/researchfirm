import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Membership() {
    return (
        <section className="py-20 px-4 xl:px-64">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Simple, Transparent Pricing</h2>
                <p className="text-xl text-muted-foreground">Unlock massive discounts with GSI Membership</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="bg-linear-to-br from-indigo-700 to-purple-800 border-indigo-600 shadow-2xl relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-tertiary text-slate-800 px-4 py-1 text-md font-black">MOST POPULAR</Badge>
                    </div>
                    <CardHeader>
                        <CardTitle className="text-2xl text-white">GSI Member</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold mb-6 text-white">Tk 15000<span className="text-lg font-normal">/year</span></p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-white"><CheckCircle className="h-5 w-5 text-green-400" /> Access to all courses</li>
                            <li className="flex items-center gap-3 text-white"><CheckCircle className="h-5 w-5 text-green-400" /> Private member community</li>
                            <li className="flex items-center gap-3 text-white"><CheckCircle className="h-5 w-5 text-green-400" /> Priority live session access</li>
                            <li className="flex items-center gap-3 text-white"><CheckCircle className="h-5 w-5 text-green-400" /> Early access to new courses</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button variant={"outline"}>
                            Become a Member
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="bg-accent text-white scale-95">
                    <CardHeader>
                        <CardTitle className="text-2xl text-slate-800 dark:text-slate-50">Corporate / Government</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold mb-6 text-slate-800 dark:text-slate-50">Custom</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-slate-800 dark:text-slate-50"><CheckCircle className="h-5 w-5 text-green-400" /> Bulk licenses</li>
                            <li className="flex items-center gap-3 text-slate-800 dark:text-slate-50"><CheckCircle className="h-5 w-5 text-green-400" /> Tailored content</li>
                            <li className="flex items-center gap-3 text-slate-800 dark:text-slate-50"><CheckCircle className="h-5 w-5 text-green-400" /> Private cohorts</li>
                            <li className="flex items-center gap-3 text-slate-800 dark:text-slate-50"><CheckCircle className="h-5 w-5 text-green-400" /> On-site options</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline">
                            Contact Sales
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}