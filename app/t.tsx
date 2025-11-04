'use client'

import Blog from "@/components/landing/Blog/blog";
import Services from "../components/landing/services";
import { Button } from "../components/ui/button";
import Carousel from "@/components/landing/carousel";
import Contact from "@/components/landing/Contact/contact";
import { ArrowRight, Play, BookOpen, Users, Lightbulb } from "lucide-react"; // Assuming Lucide icons for better visuals

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col w-full bg-linear-to-br from-white via-slate-50 to-slate-100">
            {/* 1. Hero */}
            <section className="py-20 md:py-40 px-4 xl:px-64 flex flex-col gap-6 md:items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-blue-50/50 via-transparent to-indigo-50/50"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        From Bengal to Beyond
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We transform challenges into opportunities, delivering precise solutions that cut through complexity and drive meaningful results for ambitious professionals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                        <Button size="lg" className="bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                            Start Research <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300">
                            Learn More
                        </Button>
                        <Button size="lg" variant="ghost" className="text-gray-500 hover:text-gray-700">
                            Explore Programs
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Services Section */}
            <section className="w-full bg-white py-20 border-t border-gray-200">
                <div className="px-4 xl:px-64 w-full">
                    <Services />
                </div>
            </section>

            {/* 3. Carousel */}
            <section className="bg-linear-to-r from-slate-100 to-gray-100 py-20">
                <div className="px-4 xl:px-64">
                    <Carousel />
                </div>
            </section>

            {/* 4. GSI Programs */}
            <section className="py-20 md:py-40 px-4 xl:px-64 flex flex-col gap-6 md:items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-l from-indigo-50/50 via-transparent to-purple-50/50"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
                        <Lightbulb className="h-4 w-4" />
                        Elevate Your Skills
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        GSI Training Programs
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Transform your professional journey with targeted learning experiences designed to elevate your skills and strategic thinking.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                        <Button size="lg" className="bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                            Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300">
                            Connect with Us
                        </Button>
                    </div>
                </div>
            </section>

            {/* 5. Watch, Listen, and Read */}
            <section className="py-20 bg-white">
                <div className="px-4 xl:px-64">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                            <BookOpen className="h-4 w-4" />
                            Insights & Inspiration
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Watch, Listen, and Read
                        </h2>
                    </div>
                    <Blog />
                </div>
            </section>

            {/* 6. Contact */}
            <section className="py-20 bg-linear-to-b from-gray-50 to-slate-100">
                <div className="px-4 xl:px-64">
                    <Contact />
                </div>
            </section>
        </div>
    );
}