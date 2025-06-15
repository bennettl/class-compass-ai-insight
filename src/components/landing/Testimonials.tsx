
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Clock, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    university: "USC",
    department: "Computer Science",
    course: "CS 101 - Introduction to Programming",
    students: 450,
    timeReduction: "85%",
    satisfaction: "4.9/5",
    highlight: "Reduced grading time from 12 hours to 2 hours per assignment",
    color: "from-red-500 to-yellow-500"
  },
  {
    university: "UCLA",
    department: "Physics",
    course: "Physics 1A - Mechanics",
    students: 320,
    timeReduction: "78%",
    satisfaction: "4.8/5",
    highlight: "Improved consistency in grading complex problem sets",
    color: "from-blue-600 to-blue-800"
  },
  {
    university: "Stanford",
    department: "English Literature",
    course: "ENGL 90 - Writing & Rhetoric",
    students: 180,
    timeReduction: "72%",
    satisfaction: "4.7/5",
    highlight: "Enhanced feedback quality for essay assignments",
    color: "from-red-600 to-red-800"
  },
  {
    university: "UC Berkeley",
    department: "Economics",
    course: "ECON 1 - Introduction to Economics",
    students: 520,
    timeReduction: "80%",
    satisfaction: "4.8/5",
    highlight: "Streamlined grading for large lecture courses",
    color: "from-blue-500 to-yellow-500"
  },
  {
    university: "MIT",
    department: "Mathematics",
    course: "18.01 - Single Variable Calculus",
    students: 380,
    timeReduction: "76%",
    satisfaction: "4.9/5",
    highlight: "Accurate grading of mathematical proofs and derivations",
    color: "from-gray-600 to-gray-800"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Classrooms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how universities across the country are transforming their grading process
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {caseStudies.map((study, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full border-2 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-xl flex items-center justify-center text-white font-bold text-sm`}>
                          {study.university}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">{study.department}</div>
                          <div className="font-semibold text-gray-900">{study.course}</div>
                        </div>
                      </div>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-2">
                            <Users className="w-5 h-5 text-blue-500" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{study.students}</div>
                          <div className="text-xs text-gray-500">Students</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-2">
                            <Clock className="w-5 h-5 text-green-500" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{study.timeReduction}</div>
                          <div className="text-xs text-gray-500">Time Saved</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-2">
                            <TrendingUp className="w-5 h-5 text-purple-500" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{study.satisfaction}</div>
                          <div className="text-xs text-gray-500">Rating</div>
                        </div>
                      </div>
                      
                      {/* Highlight */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <GraduationCap className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700 text-sm leading-relaxed">{study.highlight}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full border border-indigo-200">
            <span className="text-indigo-800 font-semibold">Used by 500+ institutions worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};
