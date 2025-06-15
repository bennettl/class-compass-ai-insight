
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const universities = [
  {
    name: "Stanford University",
    logo: "STANFORD",
    color: "from-red-500 to-red-600"
  },
  {
    name: "Harvard University", 
    logo: "HARVARD",
    color: "from-red-700 to-red-800"
  },
  {
    name: "MIT",
    logo: "MIT",
    color: "from-gray-700 to-gray-800"
  },
  {
    name: "UC Berkeley",
    logo: "UC BERKELEY",
    color: "from-blue-600 to-blue-700"
  },
  {
    name: "Yale University",
    logo: "YALE",
    color: "from-blue-800 to-blue-900"
  },
  {
    name: "Princeton University",
    logo: "PRINCETON",
    color: "from-orange-600 to-orange-700"
  },
  {
    name: "University of Chicago",
    logo: "U CHICAGO",
    color: "from-red-600 to-red-700"
  },
  {
    name: "Columbia University",
    logo: "COLUMBIA",
    color: "from-blue-700 to-blue-800"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Universities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join top higher education institutions using SupaClass to enhance teaching effectiveness
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {universities.map((university, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                  <div className="flex items-center justify-center p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-32">
                    <div className={`w-16 h-16 bg-gradient-to-br ${university.color} rounded-lg flex items-center justify-center text-white font-bold text-xs text-center leading-tight`}>
                      {university.logo}
                    </div>
                  </div>
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
