
import React from "react";

const TrustedBy = () => {
  // Company types that would use this service
  const companies = [
    { name: "Startup Co.", type: "Startup" },
    { name: "Tech Agency", type: "Agency" },
    { name: "SaaS Platform", type: "SaaS" },
    { name: "Dev Studio", type: "Studio" },
    { name: "Enterprise Inc.", type: "Enterprise" },
  ];

  return (
    <div className="border-t border-gray-800 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <p className="text-gray-400 uppercase tracking-wider text-sm font-medium">
            Trusted by teams that care about uptime
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-800 flex items-center justify-center mb-3">
                <span className="text-2xl text-primary font-bold">
                  {company.name.charAt(0)}
                </span>
              </div>
              <span className="text-gray-300 font-medium text-sm">{company.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
