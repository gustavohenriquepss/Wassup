
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faqs = () => {
  const faqs = [
    {
      question: "How often can Wassup' check my services?",
      answer: "Free plans include checks every 5 minutes. Pro and Enterprise plans support checks as frequently as every minute for critical services."
    },
    {
      question: "What alert channels are supported?",
      answer: "We support Email (Free plan), plus WhatsApp, Slack, Discord, SMS, and webhooks for Pro and Enterprise plans."
    },
    {
      question: "How do I monitor an API endpoint?",
      answer: "Simply add your API URL, set the expected status code and optional request headers or body. You can even write custom validation rules for the response."
    },
    {
      question: "Can I monitor internal services behind a firewall?",
      answer: "Yes, you can use our lightweight agent to monitor internal services that aren't publicly accessible."
    },
    {
      question: "How do domain and SSL monitoring work?",
      answer: "We automatically check your domain expiration dates and SSL certificate validity, notifying you well in advance of any upcoming expirations."
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Yes, Enterprise plan customers can request custom integrations with their existing tooling. Pro plan users have access to our API and webhook system for building their own integrations."
    },
    {
      question: "How many team members can I add?",
      answer: "Free plans support 1 user, Pro plans support up to 5 team members, and Enterprise plans support unlimited users with role-based access control."
    },
    {
      question: "Can I customize the appearance of my status page?",
      answer: "Pro and Enterprise plans allow full customization of your status page, including custom domains, logos, colors, and CSS."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-secondary/20 via-background to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about Wassup' and how it can help you monitor your services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-card rounded-lg border border-gray-800">
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
