'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"
import {
    Youtube,
    Radio,
    Calendar,
    Mail,
    MessageCircle,
    Download,
    Users,
    HandshakeIcon,
    Globe,
    Sparkles,
} from "lucide-react"
import { InstagramIcon, FacebookIcon, LinkedInIcon, XIcon, YoutubeIcon } from "@/components/global/brand-icons/icons"


export default function Connect() {
    return (
        <>
            <div className="min-h-screen relative overflow-hidden animate-fade-in">
                {/* Subtle animated background */}
                <div className="fixed inset-0 -z-10">
                    <div className="absolute inset-0 bg-linear-to-br from-indigo-900/5 via-transparent to-purple-900/5" />
                    <div className="absolute inset-0 bg-[radial-linear(ellipse_at_center,_var(--tw-linear-stops))] from-indigo-900/10 via-transparent to-transparent" />
                </div>

                {/* Hero */}
                <section className="relative pt-32 pb-20 px-4 xl:px-64 text-center">
                    <div className="max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent backdrop-blur-sm border border-secondary rounded-full text-sm font-medium mb-8">
                            <Sparkles className="h-5 w-5 text-tertiary" />
                            <span className="text-primary">Let's Shape the Future Together</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Connect & Collaborate
                        </h1>
                        <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                            Join a vibrant community of policymakers, researchers, diplomats, tech leaders, and changemakers
                            from Bangladesh and around the world.
                        </p>
                    </div>
                </section>

                {/* Social Media Grid */}
                <section className="px-4 xl:px-64 py-20">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Follow Our Journey</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {[
                                { icon: XIcon, label: "X / Twitter", href: "https://twitter.com/GSI_BD", color: "hover:bg-black hover:text-white" },
                                { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com/company/gsi-bd", color: "hover:bg-[#0077b5] hover:text-white" },
                                { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/GSIthinktank", color: "hover:bg-[#1877f2] hover:text-white" },
                                { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/gsi_bd", color: "hover:bg-linear-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white" },
                                { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com/@GSI_BD", color: "hover:bg-red-600 hover:text-white" },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                >
                                    <Card className={`h-full border-2 hover:border-indigo-900/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${social.color}`}>
                                        <CardContent className="flex flex-col items-center justify-center p-10">
                                            <social.icon className={`h-16 w-16 mb-4 transition-all duration-300`} />
                                            <span className="font-semibold text-lg">{social.label}</span>
                                        </CardContent>
                                    </Card>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <hr className="max-w-7xl mx-auto" />

                {/* Live Sessions Calendar */}
                <section className="px-4 xl:px-64 py-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-3 mb-8">
                            <Radio className="h-8 w-8 text-indigo-900" />
                            <h2 className="text-4xl md:text-5xl font-bold">Weekly Live Sessions</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            <Card className="border-indigo-900/30 bg-linear-to-br from-indigo-900/5 to-transparent">
                                <CardHeader>
                                    <CardTitle className="text-2xl flex items-center gap-3">
                                        <Calendar className="h-7 w-7 text-indigo-900" />
                                        Friday Nights
                                    </CardTitle>
                                    <CardDescription className="text-lg">Bangladesh Time • 9 PM</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <CardContent className="text-xl font-medium">Bangladesh Affairs Live</CardContent>
                                </CardContent>
                            </Card>

                            <Card className="border-purple-900/30 bg-linear-to-br from-purple-900/5 to-transparent">
                                <CardHeader>
                                    <CardTitle className="text-2xl flex items-center gap-3">
                                        <Globe className="h-7 w-7 text-purple-900" />
                                        Saturday Nights
                                    </CardTitle>
                                    <CardDescription className="text-lg">International • 9 PM BD / 8:30 PM IST / 4 PM CET</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-xl font-medium">Global Affairs Live</p>
                                </CardContent>
                            </Card>

                            <Card className="border-amber-900/30 bg-linear-to-br from-amber-900/5 to-transparent">
                                <CardHeader>
                                    <CardTitle className="text-2xl flex items-center gap-3">
                                        <Sparkles className="h-7 w-7 text-amber-900" />
                                        Wednesday Nights
                                    </CardTitle>
                                    <CardDescription className="text-lg">Bangladesh Time • 10 PM</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-xl font-medium">Political Satire & Comedy</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Newsletter + WhatsApp */}
                <section className="px-4 xl:px-64 py-20">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                        <Card className="border-2 hover:border-indigo-900/50 transition-all">
                            <CardHeader>
                                <Mail className="h-10 w-10 text-indigo-900 mb-4" />
                                <CardTitle className="text-3xl">Newsletter</CardTitle>
                                <CardDescription className="text-lg">Get weekly insights, research briefs, and live session reminders directly in your inbox.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div>
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" placeholder="your@email.com" className="mt-2" required />
                                    </div>
                                    <Button className="w-full bg-indigo-900 hover:bg-indigo-800">Subscribe to Newsletter</Button>
                                </form>
                            </CardContent>
                        </Card>

                        <Card className="border-2 hover:border-green-600/50 transition-all">
                            <CardHeader>
                                <MessageCircle className="h-10 w-10 text-green-600 mb-4" />
                                <CardTitle className="text-3xl">WhatsApp Channel</CardTitle>
                                <CardDescription className="text-lg">Instant updates, polls, live announcements, and exclusive snippets.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button className="w-full bg-green-600 hover:bg-green-700">
                                    {/* <Whatsapp className="mr-3 h-5 w-5" /> */}
                                    Join WhatsApp Channel
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Collaboration Form + Media Kit + Partnerships */}
                <section className="px-4 xl:px-64 py-20">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
                        {/* Collaboration Interest Form */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-10 flex items-center gap-4">
                                <Users className="h-12 w-12 text-indigo-900" />
                                Collaborate With Us
                            </h2>
                            <Card>
                                <CardHeader>
                                    <CardDescription className="text-lg">
                                        Guest contributions • Research partnerships • Co-hosting • Field projects • Speaking invitations
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <Label>Name</Label>
                                                <Input placeholder="Your name" className="mt-1" />
                                            </div>
                                            <div>
                                                <Label>Organization</Label>
                                                <Input placeholder="University / Company / NGO" className="mt-1" />
                                            </div>
                                        </div>
                                        <div>
                                            <Label>Email</Label>
                                            <Input type="email" placeholder="your@email.com" className="mt-1" />
                                        </div>
                                        <div>
                                            <Label>Collaboration Type</Label>
                                            <Textarea placeholder="Tell us about your idea or how you'd like to contribute..." className="mt-1 min-h-32" />
                                        </div>
                                        <Button className="w-full bg-indigo-900 hover:bg-indigo-800">Submit Collaboration Request</Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Media Kit & Partnerships */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Download className="h-9 w-9 text-indigo-900" />
                                    Media Kit
                                </h3>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Download our official media kit with logos, brand guidelines, key messages, and contact info for press and partners.
                                </p>
                                <Button size="lg" className="bg-indigo-900 hover:bg-indigo-800">
                                    <Download className="mr-3 h-5 w-5" />
                                    Download Media Kit (PDF)
                                </Button>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <HandshakeIcon className="h-9 w-9 text-purple-900" />
                                    Strategic Partnerships
                                </h3>
                                <p className="text-lg text-muted-foreground mb-6">
                                    We actively partner with universities, tech companies, think tanks, NGOs, government agencies, and political organizations for joint research, training programs, events, and policy initiatives.
                                </p>
                                <Button size="lg" variant="outline" className="border-2 border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white">
                                    Explore Partnership Opportunities
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="px-4 xl:px-64 py-20 text-center bg-linear-to-b from-transparent to-accent">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Make an Impact?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-10">
                            Whether you're a researcher, policymaker, journalist, or passionate citizen — there's a place for you at GSI.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button size="lg" className="bg-indigo-900 hover:bg-indigo-800">
                                Start a Conversation
                            </Button>
                            <Button size="lg" variant="outline">
                                Book a Consultation
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}