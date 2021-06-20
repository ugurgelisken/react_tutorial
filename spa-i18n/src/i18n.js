import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationTR from './locale/tr/translation.json';
import translationEN from './locale/en/translation.json';
import translationJA from './locale/ja/translation.json';

// Dil paketleri
const resources = {
    tr: { translation: translationTR },
    en: { translation: translationEN },
    ja: { translation: translationJA }
};

i18n
    .use(reactI18nextModule)
    .init({
        resources,
        lng: localStorage.getItem('language') || "tr",
        keySeparator: false, // messages.title gibi tanımlama yapmadığımız için false.
        interpolation: {
            escapeValue: false //XSS koruması için gerekli.
        }
    });

export default i18n;