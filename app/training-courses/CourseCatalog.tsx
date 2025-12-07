import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Radio, Brain, Globe, Users, Shield, Building2, ArrowRight, Lock, type LucideIcon } from "lucide-react";
import { useEffect, useState } from 'react';
import { client } from "@/sanity/lib/client";

interface Course {
  title: string;
  instructor: string;
  duration: string;
  level: string;
  icon: string;
  price: string;
  memberPrice: string;
}

export default function CourseCatalog() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [totalCourses, setTotalCourses] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(6);

  useEffect(() => {
    const settingsQuery = '*[_type == "siteSettings"][0].coursesPerPage';
    client.fetch<number | null>(settingsQuery).then((perPage) => {
      if (perPage) {
        setCoursesPerPage(perPage);
      }
    });
  }, []);

  useEffect(() => {
    if (coursesPerPage === 0) return;

    const lowerSearch = searchTerm.toLowerCase();
    const filter = searchTerm ? `&& lower(title) match "*${lowerSearch}*"` : '';

    const countQuery = `count(*[_type == "course" ${filter}])`;
    const start = (currentPage - 1) * coursesPerPage;
    const end = start + coursesPerPage - 1;
    const dataQuery = `*[_type == "course" ${filter}] [${start}..${end}] { title, instructor, duration, level, icon, price, memberPrice }`;

    Promise.all([
      client.fetch<number>(countQuery),
      client.fetch<Course[]>(dataQuery)
    ]).then(([total, data]) => {
      setTotalCourses(total);
      setCourses(data);
    });
  }, [currentPage, searchTerm, coursesPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, coursesPerPage]);

  const iconMap: Record<string, LucideIcon> = {
    Radio,
    Brain,
    Globe,
    Users,
    Shield,
    Building2,
    ArrowRight,
    Lock,
  };

  const totalPages = Math.ceil(totalCourses / coursesPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="py-20 px-4 xl:px-64">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Course Catalog</h2>
        <p className="text-xl text-muted-foreground">All courses include certificates • Lifetime access to materials • Private community</p>
      </div>

      <div className="max-w-7xl mx-auto mb-8">
        <Input
          type="text"
          placeholder="Search by course title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {totalCourses > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto">
            {courses.map((course) => {
              const IconComponent = iconMap[course.icon] ?? Globe;
              return (
                <Card key={course.title} className="group py-2 gap-0 relative overflow-hidden border-2 hover:border-indigo-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-row md:flex-col items-center justify-between md:items-start md:justify-start">
                  <CardHeader className="p-4 md:p-6 flex md:flex-col items-center md:items-start w-2/3 md:w-full">
                    <div className="p-2 md:p-4 w-fit rounded-xl bg-primary/10 md:mb-4">
                      <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg md:text-xl">{course.title}</CardTitle>
                    <CardDescription className="hidden md:block">
                      <span className="text-sm">by {course.instructor}</span><br />
                      {course.duration} • {course.level}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="hidden md:block">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">Live Sessions</Badge>
                      <Badge variant="secondary">Recorded</Badge>
                      <Badge variant="secondary">Exercises</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-4 p-4 md:p-6">
                    <div className="w-full">
                      <p className="text-xl md:text-2xl font-bold dark:text-tertiary">Tk{course.memberPrice.split('Tk')[1]} <span className="text-sm font-normal text-muted-foreground line-through">${course.price.split('Tk')[1]}</span></p>
                      <p className="text-sm text-green-600 font-medium hidden md:block">GSI Members save up to 40%</p>
                    </div>
                    <Button size="sm" className="md:size=auto">
                      Enroll Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          <div className="flex justify-center items-center gap-2 mt-8 max-w-7xl mx-auto">
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              variant="outline"
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                onClick={() => handlePageChange(page)}
                variant={currentPage === page ? "default" : "outline"}
              >
                {page}
              </Button>
            ))}
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              variant="outline"
            >
              Next
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center text-muted-foreground max-w-7xl mx-auto">
          No courses found matching your search.
        </div>
      )}
    </section>
  )
}