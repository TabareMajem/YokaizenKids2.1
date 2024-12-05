import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import type { Language } from '../types/language';

// Import all translations
import * as enTranslations from './locales/en';
import * as jaTranslations from './locales/ja';
import * as esTranslations from './locales/es';
import * as koTranslations from './locales/ko';
import * as deTranslations from './locales/de';
import * as fiTranslations from './locales/fi';
import * as svTranslations from './locales/sv';
import * as daTranslations from './locales/da';
import * as frTranslations from './locales/fr';
import * as nlTranslations from './locales/nl';
import * as caTranslations from './locales/ca';

export const languages: Record<Language, { name: string; nativeName: string }> = {
  en: { name: 'English', nativeName: 'English' },
  ja: { name: 'Japanese', nativeName: '日本語' },
  es: { name: 'Spanish', nativeName: 'Español' },
  ko: { name: 'Korean', nativeName: '한국어' },
  de: { name: 'German', nativeName: 'Deutsch' },
  fi: { name: 'Finnish', nativeName: 'Suomi' },
  sv: { name: 'Swedish', nativeName: 'Svenska' },
  da: { name: 'Danish', nativeName: 'Dansk' },
  fr: { name: 'French', nativeName: 'Français' },
  nl: { name: 'Dutch', nativeName: 'Nederlands' },
  ca: { name: 'Catalan', nativeName: 'Català' }
};

const resources = {
  en: enTranslations,
  ja: jaTranslations,
  es: esTranslations,
  ko: koTranslations,
  de: deTranslations,
  fi: fiTranslations,
  sv: svTranslations,
  da: daTranslations,
  fr: frTranslations,
  nl: nlTranslations,
  ca: caTranslations
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: 'common',
    fallbackLng: 'en',
    supportedLngs: Object.keys(languages),
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;