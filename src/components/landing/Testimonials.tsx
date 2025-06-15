
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Clock, TrendingUp, MapPin, BookOpen } from "lucide-react";

const caseStudies = [
  {
    university: "USC",
    department: "Computer Science",
    course: "CS 101 - Introduction to Programming",
    students: 450,
    timeReduction: "85%",
    satisfaction: "4.9/5",
    highlight: "Reduced grading time from 12 hours to 2 hours per assignment",
    color: "from-red-500 to-yellow-500",
    bgPattern: "bg-gradient-to-br from-red-50 to-yellow-50"
  },
  {
    university: "UCLA",
    department: "Physics",
    course: "Physics 1A - Mechanics",
    students: 320,
    timeReduction: "78%",
    satisfaction: "4.8/5",
    highlight: "Improved consistency in grading complex problem sets",
    color: "from-blue-600 to-blue-800",
    bgPattern: "bg-gradient-to-br from-blue-50 to-indigo-50"
  },
  {
    university: "Stanford",
    department: "English Literature",
    course: "ENGL 90 - Writing & Rhetoric",
    students: 180,
    timeReduction: "72%",
    satisfaction: "4.7/5",
    highlight: "Enhanced feedback quality for essay assignments",
    color: "from-red-600 to-red-800",
    bgPattern: "bg-gradient-to-br from-red-50 to-pink-50"
  },
  {
    university: "UC Berkeley",
    department: "Economics",
    course: "ECON 1 - Introduction to Economics",
    students: 520,
    timeReduction: "80%",
    satisfaction: "4.8/5",
    highlight: "Streamlined grading for large lecture courses",
    color: "from-blue-500 to-yellow-500",
    bgPattern: "bg-gradient-to-br from-blue-50 to-yellow-50"
  },
  {
    university: "MIT",
    department: "Mathematics",
    course: "18.01 - Single Variable Calculus",
    students: 380,
    timeReduction: "76%",
    satisfaction: "4.9/5",
    highlight: "Accurate grading of mathematical proofs and derivations",
    color: "from-gray-600 to-gray-800",
    bgPattern: "bg-gradient-to-br from-gray-50 to-slate-50"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
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
            <CarouselContent className="-ml-6">
              {caseStudies.map((study, index) => (
                <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group">
                    <CardContent className="p-0 relative">
                      {/* Background Pattern */}
                      <div className={`absolute inset-0 ${study.bgPattern} opacity-60`}></div>
                      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
                      
                      {/* Content */}
                      <div className="relative p-8">
                        {/* Header with University Badge */}
                        <div className="flex items-start justify-between mb-8">
                          <div className={`relative px-6 py-3 bg-gradient-to-r ${study.color} rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                            <div className="text-white font-bold text-lg">{study.university}</div>
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                              <GraduationCap className="w-3 h-3 text-gray-600" />
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-gray-500 text-sm mb-1">
                              <MapPin className="w-4 h-4 mr-1" />
                              {study.department}
                            </div>
                            <div className="flex items-center font-semibold text-gray-900">
                              <BookOpen className="w-4 h-4 mr-2 text-indigo-500" />
                              {study.course}
                            </div>
                          </div>
                        </div>
                        
                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                          <div className="text-center group-hover:scale-105 transition-transform duration-300">
                            <div className="bg-white rounded-2xl p-4 shadow-md mb-2">
                              <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-gray-900">{study.students}</div>
                            </div>
                            <div className="text-xs text-gray-500 font-medium">Students</div>
                          </div>
                          <div className="text-center group-hover:scale-105 transition-transform duration-300 delay-75">
                            <div className="bg-white rounded-2xl p-4 shadow-md mb-2">
                              <Clock className="w-6 h-6 text-green-500 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-gray-900">{study.timeReduction}</div>
                            </div>
                            <div className="text-xs text-gray-500 font-medium">Time Saved</div>
                          </div>
                          <div className="text-center group-hover:scale-105 transition-transform duration-300 delay-150">
                            <div className="bg-white rounded-2xl p-4 shadow-md mb-2">
                              <TrendingUp className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-gray-900">{study.satisfaction}</div>
                            </div>
                            <div className="text-xs text-gray-500 font-medium">Rating</div>
                          </div>
                        </div>
                        
                        {/* Highlight Quote */}
                        <div className="relative">
                          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-lg">"</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed font-medium italic pl-4">
                              {study.highlight}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-lg"></div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12 bg-white shadow-lg hover:shadow-xl border-2 hover:scale-110 transition-all duration-300" />
            <CarouselNext className="hidden sm:flex -right-12 bg-white shadow-lg hover:shadow-xl border-2 hover:scale-110 transition-all duration-300" />
          </Carousel>
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <span className="text-white font-semibold text-lg">Used by 500+ institutions worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};
