
import { Shield, Lock, FileText, CheckCircle } from "lucide-react";

const complianceFeatures = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "End-to-end encryption for all student information"
  },
  {
    icon: Lock,
    title: "Access Controls",
    description: "Role-based permissions and secure authentication"
  },
  {
    icon: FileText,
    title: "Audit Trails",
    description: "Complete logging of all data access and modifications"
  },
  {
    icon: CheckCircle,
    title: "Compliance Ready",
    description: "Pre-configured to meet FERPA requirements"
  }
];

export const FerpaCompliance = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-sm font-semibold text-green-800 mb-4">
            <Shield className="w-4 h-4 mr-2" />
            FERPA Compliant
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Privacy & Security First
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with education privacy standards in mind. Your student data remains secure and compliant.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {complianceFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4 border border-gray-200">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Educational Privacy Standards
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">FERPA compliant data handling</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">SOC 2 Type II certified infrastructure</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Regular security audits and updates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Data residency options available</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Enterprise Security
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Bank-level encryption and security protocols protect your educational data
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 rounded-full text-xs font-medium text-green-800">
                  <Lock className="w-3 h-3 mr-1" />
                  256-bit AES Encryption
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
