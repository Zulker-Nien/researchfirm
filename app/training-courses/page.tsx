'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Shield, Brain, Radio, Users, GraduationCap, Lock, CheckCircle, Zap, Building2, UserCheck,Globe } from "lucide-react";

export default function TrainingCourses() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 xl:px-64">
          <Badge className="mb-6 bg-indigo-600/30 text-white border-indigo-400">Training Academy</Badge>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            GSI Training Academy
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-indigo-100">
            World-class, practitioner-led training in governance, security, technology, intelligence, and strategic studies.<br />
            Designed for diplomats, policymakers, law enforcement, government officials, journalists, corporate leaders, and ambitious students.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-10 justify-center">
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">
              Browse All Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Become a Member (20–50% Off)
            </Button>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4 xl:px-64 bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Who We Train</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our programs are intensive, practical, and delivered by active researchers and field practitioners.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Building2, label: "Diplomats & MFA" },
            { icon: UserCheck, label: "Policymakers" },
            { icon: Shield, label: "Law Enforcement" },
            { icon: GraduationCap, label: "Government Officials" },
            { icon: Users, label: "Students & Academics" },
            { icon: Zap, label: "Corporate Leaders" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <div className="p-6 rounded-full bg-indigo-900/10 mb-4">
                <item.icon className="h-12 w-12 text-indigo-900" />
              </div>
              <p className="font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-20 px-4 xl:px-64">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Course Catalog</h2>
          <p className="text-xl text-muted-foreground">All courses include certificates • Lifetime access to materials • Private community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { title: "OSINT & Digital Intelligence Mastery", instructor: "Sid & GSI Media Wing", duration: "8 weeks", level: "Intermediate–Advanced", icon: Radio, price: "$899", memberPrice: "$599" },
            { title: "AI, Disinformation & Information Warfare", instructor: "Asheer & Technology Wing", duration: "6 weeks", level: "All levels", icon: Brain, price: "$799", memberPrice: "$499" },
            { title: "Drone Warfare & Future Battlefields", instructor: "GSI Technology Wing", duration: "5 weeks", level: "Intermediate", icon: Globe, price: "$999", memberPrice: "$699" },
            { title: "Negotiation & Crisis Management in Crisis", instructor: "MH Joy & Global Affairs", duration: "4 weeks", level: "Advanced", icon: Users, price: "$1,199", memberPrice: "$799" },
            { title: "Cybersecurity for Government & Corporate", instructor: "Sid & International Partners", duration: "10 weeks", level: "Intermediate–Advanced", icon: Lock, price: "$1,499", memberPrice: "$999" },
            { title: "Comparative Genocide & Mass Atrocity Prevention", instructor: "History & Linguistics Wing", duration: "7 weeks", level: "All levels", icon: Shield, price: "$799", memberPrice: "$499" },
            { title: "China in the International System", instructor: "MH Joy", duration: "8 weeks", level: "Intermediate–Advanced", icon: Globe, price: "$1,099", memberPrice: "$749" },
            { title: "Decentralized Governance Models", instructor: "MH Joy & Bangladesh Affairs", duration: "6 weeks", level: "All levels", icon: Building2, price: "$899", memberPrice: "$599" },
          ].map((course) => (
            <Card key={course.title} className="group relative overflow-hidden border-2 hover:border-indigo-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <CardHeader>
                <div className="p-4 w-fit rounded-xl bg-indigo-900/10 mb-4">
                  <course.icon className="h-8 w-8 text-indigo-900" />
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription>
                  <span className="text-sm">by {course.instructor}</span><br />
                  {course.duration} • {course.level}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">Live Sessions</Badge>
                  <Badge variant="secondary">Recorded</Badge>
                  <Badge variant="secondary">Exercises</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div className="w-full">
                  <p className="text-2xl font-bold text-indigo-900">${course.memberPrice.split('$')[1]} <span className="text-sm font-normal text-muted-foreground line-through">${course.price.split('$')[1]}</span></p>
                  <p className="text-sm text-green-600 font-medium">GSI Members save up to 40%</p>
                </div>
                <Button className="w-full group-hover:bg-indigo-900">
                  Enroll Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 xl:px-64 bg-indigo-900 text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-indigo-200">Unlock massive discounts with GSI Membership</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Standard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-6">$0<span className="text-lg font-normal">/year</span></p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-green-400" /> Full course prices</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-green-400" /> Access to free micro-content</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-green-400" /> Public live sessions</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-indigo-900">
                Continue as Guest
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-700 to-purple-800 border-indigo-600 shadow-2xl scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-yellow-500 text-black px-4 py-1 text-lg">MOST POPULAR</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-3xl">GSI Member</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-bold mb-6">$299<span className="text-lg font-normal">/year</span></p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-green-400" /> 20–50% off all courses</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-green-400" /> Exclusive research reports</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-green-400" /> Private member community</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-green-400" /> Priority live session access</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-green-400" /> Early access to new courses</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full bg-white text-indigo-900 hover:bg-indigo-50">
                Become a Member
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Corporate / Government</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-6">Custom</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-green-400" /> Bulk licenses</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-green-400" /> Tailored content</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-green-400" /> Private cohorts</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-green-400" /> On-site options</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-indigo-900">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20 px-4 xl:px-64 bg-muted/30">
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
              <Button size="lg" className="w-full bg-indigo-900 hover:bg-indigo-800">
                Submit Application <ArrowRight className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}