
import React from "react";
import { Globe, Shield, Database, Smartphone, Server, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const StatusPage = () => {
  const services = [
    { name: "API Gateway", icon: Globe, status: "operational", uptime: "99.98%" },
    { name: "Authentication", icon: Shield, status: "operational", uptime: "100%" },
    { name: "Database Cluster", icon: Database, status: "operational", uptime: "99.99%" },
    { name: "Mobile Services", icon: Smartphone, status: "degraded", uptime: "97.51%" },
    { name: "Web Application", icon: Server, status: "operational", uptime: "99.95%" },
  ];

  const incidents = [
    {
      date: "Apr 12, 2025",
      title: "Mobile API Degraded Performance",
      status: "investigating",
      description: "We are investigating reports of slow response times from the mobile API.",
      updates: [
        { time: "10:32 AM", text: "Investigating reports of slow response times." },
        { time: "10:45 AM", text: "Identified high database load as the cause." },
        { time: "11:15 AM", text: "Scaling up database resources to address the issue." },
      ]
    }
  ];

  return (
    <section id="statuspage" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent <span className="text-gradient">status pages</span></h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Keep your users informed with beautiful, customizable status pages that reflect your brand.
          </p>
        </div>
        
        <div className="glass-card rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto">
          <div className="border-b border-gray-800 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                <span className="text-primary font-bold">W</span>
              </div>
              <h3 className="text-xl font-semibold">Example Status Page</h3>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-yellow-400 text-sm">Partial Outage</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid gap-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-md bg-gray-800/50">
                  <div className="flex items-center">
                    <service.icon className="h-5 w-5 mr-3 text-gray-400" />
                    <span className="font-medium">{service.name}</span>
                  </div>
                  <div className="flex items-center">
                    {service.status === "operational" ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 animate-pulse-slow" />
                    )}
                    <span className={`text-sm ${
                      service.status === "operational" ? "text-green-400" : "text-yellow-400"
                    }`}>
                      {service.status === "operational" ? "Operational" : "Degraded"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-gray-400" />
                <span>Recent Incidents</span>
              </h4>
              
              {incidents.map((incident, index) => (
                <div key={index} className="border border-gray-800 rounded-lg overflow-hidden">
                  <div className="bg-gray-800/50 p-4">
                    <div className="flex justify-between items-center">
                      <h5 className="font-medium">{incident.title}</h5>
                      <span className="text-yellow-400 text-sm bg-yellow-400/10 px-2 py-0.5 rounded-full">
                        Investigating
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">{incident.date}</span>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    {incident.updates.map((update, updateIndex) => (
                      <div key={updateIndex} className="flex">
                        <div className="w-20 flex-shrink-0 text-sm text-gray-500">{update.time}</div>
                        <div className="text-gray-300">{update.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <Button>Subscribe to Updates</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusPage;
