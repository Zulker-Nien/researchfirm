'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { University, ArrowDown } from "lucide-react";
import CourseCatalog from "./CourseCatalog";
import { EnrollmentForm } from "@/components/forms/Forms";
import Link from "next/link";
import Membership from "./Membership";
import TargetAudience from "./TargetAudience";


export default function TrainingCourses() {
  return (
    <div className=" animate-fade-in ">
      {/* Hero Section */}
      <section className="py-20 lg:pt-32 px-4 xl:px-64 min-h-screen max-h-screen flex justify-between items-center relative">
        <div className="relative z-10 mx-auto px-4 w-full text-center">
          <div className="inline-flex justify-start gap-3 px-6 py-3 bg-accent backdrop-blur-sm border border-secondary rounded-full text-sm font-medium mb-8">
            <University className="h-5 w-5 text-tertiary" />
            <span className="text-primary">Training Academy</span>
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold">GSI Training Academy</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              World-class, practitioner-led training in governance, security, technology, intelligence, and strategic studies.<br />
              Designed for diplomats, policymakers, law enforcement, government officials, journalists, corporate leaders, and ambitious students.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 mt-10 justify-center">
            
              <Button
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('course-catalog');
                  element?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                  });
                }}
              >
                Browse All Courses <ArrowDown className="ml-2 h-5 w-5" />
              </Button>

            <Button size="lg" variant="outline"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('membership');
                element?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                  inline: 'nearest'
                });
              }}>
              Become a Member
            </Button>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <TargetAudience />

      {/* Course Catalog */}
      <div id="course-catalog" className="pb-8" />
      <CourseCatalog />

      {/* Membership */}
      <div id="membership" className="pb-8" />
      <Membership />

      {/* Enrollment Form */}
      <EnrollmentForm />
    </div>
  );
}