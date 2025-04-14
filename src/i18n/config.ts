
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      features: "Features",
      pricing: "Pricing",
      statusPage: "Status Page",
      faq: "FAQ",
      login: "Log in",
      startFree: "Start for Free",
      monitor: "Monitor everything.",
      sleep: "Sleep better.",
      realTimeAlerts: "Real-time alerts for your websites, APIs, databases, SSL certificates, and domains. All in one place.",
      noCredit: "No credit card required",
      setup: "5 minute setup",
    }
  },
  "pt-BR": {
    translation: {
      features: "Funcionalidades",
      pricing: "Preços",
      statusPage: "Página de Status",
      faq: "Dúvidas",
      login: "Entrar",
      startFree: "Começar Grátis",
      monitor: "Monitore tudo.",
      sleep: "Durma melhor.",
      realTimeAlerts: "Alertas em tempo real para seus sites, APIs, bancos de dados, certificados SSL e domínios. Tudo em um só lugar.",
      noCredit: "Sem cartão de crédito",
      setup: "5 minutos para configurar",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
