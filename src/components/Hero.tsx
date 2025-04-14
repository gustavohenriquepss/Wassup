
import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden pt-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-accent">{t('monitor')}</span><br />
              <span className="text-foreground">{t('sleep')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              {t('realTimeAlerts')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8">
                {t('startFree')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                {t('pricing')}
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-y-3 mt-10 justify-center lg:justify-start">
              <div className="flex items-center sm:mr-6">
                <Check className="text-accent h-5 w-5 mr-2" />
                <span className="text-muted-foreground">{t('noCredit')}</span>
              </div>
              <div className="flex items-center">
                <Check className="text-accent h-5 w-5 mr-2" />
                <span className="text-muted-foreground">{t('setup')}</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="glass-card rounded-xl overflow-hidden shadow-2xl relative z-10">
              <div className="bg-secondary p-1 rounded-lg">
                <div className="flex items-center mb-3 px-3 pt-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="px-4 py-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white">Uptime Dashboard</h3>
                    <div className="flex space-x-3">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-green-400 text-sm">All systems operational</span>
                    </div>
                  </div>
                  
                  <div className="grid gap-4">
                    {[
                      { name: "API Gateway", icon: Globe, status: "up", uptime: "99.98%" },
                      { name: "Payment Service", icon: Shield, status: "up", uptime: "100%" },
                      { name: "User Database", icon: Database, status: "up", uptime: "99.99%" },
                      { name: "Mobile App", icon: Smartphone, status: "incident", uptime: "97.51%" },
                      { name: "Notification System", icon: Bell, status: "up", uptime: "99.95%" }
                    ].map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-md bg-gray-800/50">
                        <div className="flex items-center">
                          <service.icon className="h-5 w-5 mr-3 text-gray-400" />
                          <span className="font-medium">{service.name}</span>
                        </div>
                        <div className="flex items-center">
                          <div 
                            className={`h-2 w-2 rounded-full ${
                              service.status === "up" ? "bg-green-500" : "bg-yellow-500 animate-pulse-slow"
                            } mr-2`}
                          ></div>
                          <span className={`text-sm ${
                            service.status === "up" ? "text-gray-400" : "text-yellow-400"
                          }`}>
                            {service.uptime}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/30 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/30 rounded-full filter blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
