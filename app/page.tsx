'use client'

import Blog from "@/components/landing/Blog/blog";
import Services from "../components/landing/services";
import { Button } from "../components/ui/button";
import Carousel from "@/components/landing/carousel";
import Contact from "@/components/landing/Contact/contact";
import { ArrowRight, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* 1. Hero */}
      <section className="min-h-screen flex flex-col gap-6 md:items-center justify-center text-center relative overflow-hidden px-4 xl:px-64">
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
            From Bengal to Beyond
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-300">
            We transform challenges into opportunities, delivering precise solutions that cut through complexity and drive meaningful results for ambitious professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center animate-fade-in animation-delay-600">
            <Button size="lg" >
              Start Research <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className=" transition-all duration-300">
              Learn More
            </Button>
          </div>
          <div className="mt-4">
            <Button size="lg" variant="ghost" className="">
              Explore Programs
            </Button>
          </div>
        </div>
      </section>
      {/* 2. Service Section */}
      <div className="w-full pb-64">
        <div className="px-4 xl:px-64 w-full">
          <Services />
        </div>
      </div>
      {/* 3. Carousel */}
      <div >
        <Carousel />
      </div>
      {/* 4. GSi programs */}
      <section className="py-20 md:py-40 px-4 xl:px-64 flex flex-col gap-6 md:items-center justify-center text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
            <Lightbulb className="h-4 w-4" />
            Elevate Your Skills
          </div>
          <h2 className="text-4xl md:text-6xl font-bold  leading-tight">
            GSI Training Programs
          </h2>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Transform your professional journey with targeted learning experiences designed to elevate your skills and strategic thinking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Button size="lg" >
              Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Connect with Us
            </Button>
          </div>
        </div>
      </section>
      {/* 4. Watch Listen and read */}
      <div>
        <Blog />
      </div>
      {/* 5. Contact */}
      <div>
        <Contact />
      </div>
    </div>
  );
}
