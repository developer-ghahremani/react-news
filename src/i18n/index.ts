import { initReactI18next, useTranslation } from "react-i18next";

import en from "./en";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
  },

  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const useI18Next = () => useTranslation();

export default i18n;
