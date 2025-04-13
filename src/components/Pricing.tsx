
import React from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for small personal projects",
      features: [
        "5 monitors",
        "5-minute check intervals",
        "Email alerts",
        "Basic status page",
        "1 team member",
      ],
      notIncluded: [
        "WhatsApp alerts",
        "1-minute check intervals",
        "Domain/SSL monitoring",
        "Custom status page domain",
        "API access",
      ],
      buttonText: "Start for Free",
      buttonVariant: "outline",
      popular: false,
    },
    {
      name: "Pro",
      price: "4.99",
      description: "Ideal for startups and small teams",
      features: [
        "Unlimited monitors",
        "1-minute check intervals",
        "Email & WhatsApp alerts",
        "Domain/SSL monitoring",
        "Custom status page domain",
        "API access",
        "5 team members",
      ],
      notIncluded: [
        "Custom integrations",
        "Dedicated support engineer",
        "Flexible billing",
      ],
      buttonText: "Get Started",
      buttonVariant: "default",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Contact us",
      hideDecimal: true,
      description: "For businesses with advanced needs",
      features: [
        "Unlimited monitors",
        "1-minute check intervals",
        "All alert channels",
        "Domain/SSL monitoring",
        "Custom status page domain",
        "Full API access",
        "Unlimited team members",
        "Custom integrations",
        "Dedicated support engineer",
        "Flexible billing",
      ],
      notIncluded: [],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent <span className="text-accent">pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No hidden fees, no complicated tiers. Just straightforward plans to keep your services online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-xl overflow-hidden ${
                plan.popular ? "border-accent ring-1 ring-accent relative" : "border-gray-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-xs font-semibold py-1 px-3 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  {plan.price === "Contact us" ? (
                    <span className="text-3xl font-bold">{plan.price}</span>
                  ) : (
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      {!plan.hideDecimal && <span className="text-xl text-gray-400 ml-1">/mo</span>}
                    </div>
                  )}
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <Button 
                  variant={plan.buttonVariant as any} 
                  className="w-full mb-6"
                >
                  {plan.buttonText}
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mr-3 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <X className="h-5 w-5 text-gray-600 flex-shrink-0 mr-3 mt-0.5" />
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
