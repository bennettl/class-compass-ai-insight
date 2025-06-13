
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "5th Grade Teacher",
    school: "Lincoln Elementary",
    content: "SupaClass has revolutionized how I provide feedback. The AI suggestions are incredibly thoughtful and help me catch learning gaps I might have missed. My students are more engaged than ever.",
    rating: 5,
    avatar: "SM"
  },
  {
    name: "Dr. James Rodriguez",
    role: "High School Math Teacher",
    school: "Washington High School",
    content: "The analytics dashboard is a game-changer. I can identify class-wide misconceptions instantly and adjust my lessons accordingly. It's like having a teaching assistant with superpowers.",
    rating: 5,
    avatar: "JR"
  },
  {
    name: "Lisa Chen",
    role: "Middle School Science Teacher",
    school: "Riverside Academy",
    content: "What I love most is how SupaClass maintains my teaching voice while enhancing my feedback. The differentiated strategies have helped me reach every student in my classroom.",
    rating: 5,
    avatar: "LC"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Educators Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how teachers are transforming their classrooms with SupaClass
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-indigo-200" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-200">
            <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
            <span className="text-green-800 font-semibold">4.9/5 stars from 10,000+ teachers</span>
          </div>
        </div>
      </div>
    </section>
  );
};
