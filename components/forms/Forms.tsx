import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";

function EnrollmentForm() {
    return (
        <section className="py-20 px-4 xl:px-64 bg-linear-to-b from-transparent to-accent">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Enroll or Request Information</h2>
                <Card>
                    <CardHeader>
                        <CardTitle>Start Your Application</CardTitle>
                        <CardDescription>We will contact you within 24 hours with enrollment details and payment link.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="course">Interested Course</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a course" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="osint">OSINT & Digital Intelligence Mastery</SelectItem>
                                    <SelectItem value="ai-disinfo">AI, Disinformation & Information Warfare</SelectItem>
                                    <SelectItem value="drone">Drone Warfare & Future Battlefields</SelectItem>
                                    <SelectItem value="negotiation">Negotiation & Crisis Management</SelectItem>
                                    <SelectItem value="cyber">Cybersecurity for Government & Corporate</SelectItem>
                                    <SelectItem value="genocide">Comparative Genocide & Mass Atrocity Prevention</SelectItem>
                                    <SelectItem value="china">China in the International System</SelectItem>
                                    <SelectItem value="decentral">Decentralized Governance Models</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message (optional)</Label>
                            <Textarea id="message" placeholder="Tell us about your background or specific needs..." className="min-h-[120px]" />
                        </div>
                        <Button size="lg">
                            Submit Application <ArrowRight className="ml-2" />
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
} 

export { EnrollmentForm }