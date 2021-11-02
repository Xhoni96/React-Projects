import i18n from "i18next";
// import Backend from 'i18next-http-backend'; not installed
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const DETECTION_OPTIONS = {
  order: ["localStorage", "navigator"], // order => LanguageDetector checks in localStorage first for a cached lang.if it doesn't find anything it searches on user browser
  caches: ["localStorage"],
};

const languages = {
  "en-US": { nativeName: "English" },
  it: { nativeName: "Italian" },
  al: { nativeName: "Albanian" },
};

i18n
  // load translation from server using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    detection: DETECTION_OPTIONS,
    debug: process.env.NODE_ENV === "development",
    fallbackLng: "en", // use en if detected lng is not available
    saveMissing: false, // send not translated keys to endpoint https://github.com/i18next/i18next-http-middleware#add-routes
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    languages,
    resources: {
      //   en: {
      //     translation: translationEN,
      //   },
      //   it: {
      //     translation: translationIT,
      //   },
      //   al: {
      //     translation: translationAL,
      //   },
    },
    // even if you don't specify a path it will load from default path /public/locales
    // backend: {
    //   // loadPath: `${NODE_ENV === 'staging' ? 'https://d1h5g873oixm9n.cloudfront.net' : ''}/locales/{{lng}}/{{ns}}.json`,
    // eslint-disable-next-line max-len
    //   loadPath: `${window.location.origin}/locales/{{lng}}/{{ns}}.json`, // no matter what environment we are it will get the base URL
    // },
  });

export default i18n;
