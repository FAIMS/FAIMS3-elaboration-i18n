import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

/**
 * i18next plugins:
 * @LanguageDetector - Attempts to detect the browser language
 * @Backend - Lazy loading for translations
 * 
 * saveMissing - Used for automating new translations but most implementations require $$$ and a backend server like locize
 * Translations are located in ../public/locales/en/translation.json 
 */

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
        debug: true,
        fallbackLng: 'en',
        saveMissing: true,
});
