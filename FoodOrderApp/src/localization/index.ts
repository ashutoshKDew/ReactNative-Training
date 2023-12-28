import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as resources from './resources';
import {getCurrencies, getLocales} from 'react-native-localize';

const ns = Object.keys(Object.values(resources)[0]);
export const defaultNS = ns[0];

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  ns,
  defaultNS,
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {},
    ),
  },
  lng: 'en',
  compatibilityJSON: 'v3',
});

export default i18n;
