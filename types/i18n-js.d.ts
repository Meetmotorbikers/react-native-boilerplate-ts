declare module 'i18n-js' {
  var fallbacks: boolean;
  var translations: {
    readonly [keys: string]: any;
  };
  var defaultLocale: string;
  var locale: string;
  function currentLocale(): string;
  function t(key: 'title'): 'example';
  function t(
    key: 'platform.ios'
  ): 'Press Cmd+R to reload,\nCmd+D or shake for dev menu';
  function t(
    key: 'platform.android'
  ): 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu';
  function t(key: 'greetings'): 'Welcome to React Native!';
  function t(key: 'instructions'): 'To get started, edit app.tsx';
}

declare module '*.json' {
  const value: any;
  export default value;
}
