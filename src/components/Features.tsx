
import React from "react";
import { Clock, Bell, Globe, Shield, Database, Code, Users, LineChart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Real-time Uptime Checks",
      description: "Monitor your services as frequently as every minute with instant notifications when things go wrong.",
    },
    {
      icon: Bell,
      title: "Multi-channel Alerts",
      description: "Get notified via Email, WhatsApp, Slack, and more when your services experience downtime.",
    },
    {
      icon: Globe,
      title: "Public & Private Status Pages",
      description: "Create beautiful status pages with your own branding and custom domain to keep your users informed.",
    },
    {
      icon: Shield,
      title: "SSL & Domain Monitoring",
      description: "Never miss an SSL certificate or domain expiration again with timely reminders.",
    },
    {
      icon: Database,
      title: "Database & API Monitoring",
      description: "Check the health of your databases and APIs with custom queries and endpoints.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Add up to 5 team members to help monitor your services and respond to incidents.",
    },
    {
      icon: Code,
      title: "Developer-friendly",
      description: "Comprehensive API with webhooks and integrations for your monitoring workflows.",
    },
    {
      icon: LineChart,
      title: "Intuitive Dashboard",
      description: "Beautiful, easy-to-use dashboard to get a quick overview of all your services.",
    },
  ];

  return (
    <section id="features" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to <span className="text-gradient">stay online</span></h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive monitoring for every part of your tech stack, with alerts that actually reach you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-lg transition-all duration-300 hover:border-primary/50 hover:translate-y-[-5px]"
            >
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
