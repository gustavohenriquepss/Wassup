
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto">
              Keep your services online with <span className="text-accent">Wassup'</span>
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
