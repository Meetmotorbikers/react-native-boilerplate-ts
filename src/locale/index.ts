// tslint:disable: no-object-mutation no-commented-code

// import * as RNLocalize from "react-native-localize";
import i18n from 'i18n-js';
import de from './languages/de';
import { default as en } from './languages/en';

i18n.locale = 'de';
i18n.fallbacks = true;
i18n.translations = {
  en,
  de,
};

export default i18n;
