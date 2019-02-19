// tslint:disable: no-object-mutation readonly-keyword
import i18n from 'i18n-js';
import { I18nManager } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import Types from 'Types';

interface FallBack {
  languageTag: 'en';
  isRTL: false;
}

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require('../locale/languages/en') as Types.Locale,
  de: () => require('../locale/languages/de') as Types.Locale,
};

export const setLocale = (locale: string) => (i18n.locale = locale);
export const getCurrentLocale = () => i18n.locale;

export const setI18nConfig = () => {
  /** fallback if no available language fits */
  const fallback = { languageTag: 'en', isRTL: false } as FallBack;

  /**
   * If an English translation is not available in en.js, it will look inside de.js
   */
  i18n.fallbacks = true;
  /**
   * It will convert HOME_noteTitle to "HOME note title" if the value of HOME_noteTitle doesn't
   * exist in any of the translation files.
   */
  i18n.missingBehaviour = 'guess';

  /** If the current locale in device is not en or ... */
  i18n.defaultLocale = 'en';

  const bestAvailableLanguage =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  const { languageTag, isRTL } = bestAvailableLanguage;

  /** update layout direction */
  I18nManager.forceRTL(isRTL);

  /** set i18n-js config */
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  setLocale(languageTag);
};
