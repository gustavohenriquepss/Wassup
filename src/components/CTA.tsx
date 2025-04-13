
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-60 -left-40 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl opacity-30"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto">
              Keep your services online with <span className="text-gradient">Wassup'</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust Wassup' to monitor their critical infrastructure.
            </p>
            <Button size="lg" className="text-lg px-8">
              Start Monitoring for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-gray-400 mt-4">No credit card required. 5-minute setup.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
