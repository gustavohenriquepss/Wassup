
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pt-BR" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button 
      variant="outline" 
      size="sm"
      onClick={toggleLanguage}
      className="w-16"
    >
      {i18n.language === "en" ? "PT-BR" : "EN"}
    </Button>
  );
};

export default LanguageSwitcher;
