import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    detection: {
      checkWhitelist: true, // options for language detection
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      // bindI18n: 'languageChanged',
      // bindI18nStore: '',
      // transEmptyNodeValue: '',
      // transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'em', 'b'],
      useSuspense: false,
    },
  });

export default i18n;
