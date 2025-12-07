'use client'

import Blog from "@/components/landing/Blog/blog";
import Services from "../components/landing/services";
import { Button } from "../components/ui/button";
import Carousel from "@/components/landing/carousel";
import Contact from "@/components/landing/Contact/contact";
import { ArrowRight, Lightbulb } from "lucide-react";
import { useTheme } from "next-themes";
import BlurText from "@/components/BlurText";

export default function Home() {
  const { theme } = useTheme()
  return (
    <div className="min-h-screen flex flex-col w-full relative">
      {/* 1. Hero Section */}
      <section className="min-h-screen flex flex-col gap-8 md:items-center justify-center text-center relative overflow-hidden px-4 xl:px-64">

        <BlurText
          text="From Bengal to Beyond "
          delay={150}
          animateBy="words"
          direction="top"
          className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in custom-class text-center"
        />
        {/* <h1 className=""></h1> */}
        <p className="mt-6 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-in animation-delay-300 text-muted-foreground">
          We transform challenges into opportunities, delivering precise solutions that cut through complexity and drive meaningful results for ambitious professionals.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mt-10 justify-center animate-fade-in animation-delay-600">
          <Button size="lg" >
            Explore Our Research <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            Enroll in Training Programs
          </Button>
          <Button size="lg" variant="ghost">
            Get Consultation
          </Button>
        </div>

      </section>

      <div className="w-full pb-64">
        <div className="px-4 xl:px-64 w-full">
          <Services />
        </div>
      </div>

      {/* 3. Featured Carousel (Flagship Projects / Live Shows) */}
      <div className="py-20">
        <Carousel /> {/* You can feed this with flagship projects: Decentralization (Joy), Tea Workers, AI & Disinformation, China in Int’l System, etc. */}
      </div>

      {/* 4. Training Programs CTA */}
      <section className="py-20 md:py-40 px-4 xl:px-64 bg-linear-to-b from-transparent via-accent to-transparent">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium mb-6">
            <Lightbulb className="h-4 w-4" />
            Training Academy
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Professional Training for the Next Generation
          </h2>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
            Diplomats • Policy Makers • Law Enforcement • Cybersecurity Professionals • Journalists • Students<br />
            Intensive programs on OSINT, AI ethics, negotiation, crisis management, digital warfare, and regional studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Button size="lg">
              View All Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Request Corporate Training
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Watch, Listen & Read (Blog / Media Section) */}
      <div className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold">Watch • Listen • Read</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Micro-journals, Friday Night Bangladesh Live, Saturday Night Global Affairs, Wednesday Satire, podcasts, field interviews, and more.
          </p>
        </div>
        <Blog /> {/* Populate with latest micro-articles, podcast episodes, YouTube embeds, etc. */}
      </div>

      {/* 6. Contact / Consultation CTA */}
      <div className="py-20 bg-linear-to-b from-transparent to-accent">
        <Contact />
      </div>
    </div>
  );
}