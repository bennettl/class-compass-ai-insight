
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying out SupaClass",
    features: [
      "5 AI feedback generations per month",
      "Basic analytics dashboard",
      "Email support",
      "Up to 30 students"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "Ideal for individual teachers",
    features: [
      "Unlimited AI feedback generation",
      "Advanced analytics & insights",
      "Differentiated strategy suggestions",
      "Priority support",
      "Up to 150 students",
      "Custom rubric creation",
      "Export capabilities"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "School",
    price: "$99",
    period: "/month",
    description: "Best for schools and districts",
    features: [
      "Everything in Professional",
      "Unlimited teachers",
      "Admin dashboard",
      "Professional development resources",
      "Custom integrations",
      "Dedicated account manager",
      "Advanced reporting"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our free plan and upgrade as you grow. All plans include our core AI feedback features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${plan.popular ? 'border-indigo-500 scale-105' : 'border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 ml-1">{plan.period}</span>}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-3 text-lg font-semibold rounded-lg transition-all duration-200 ${
                  plan.popular 
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Questions about pricing? 
            <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold ml-1">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
