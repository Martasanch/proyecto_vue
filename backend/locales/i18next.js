import i18next from 'i18next';

import es from '@/locales/es.json'
import en from '@/locales/en.json'
import fr from '@/locales/fr.json'




export default i18next.init({
  fallbackLng: ['en', 'fr'],
  lng: 'es',
  debug: true, //Depurar
  resources: {
    en: en,
    es: es,
    fr: fr
  }

})