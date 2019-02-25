declare module 'i18n-js' {
  var fallbacks: boolean;
  var translations: {
    [keys: string]: any;
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
  function t(key: 'login.title'): 'LOGIN';
  function t(key: 'login.withFacebook'): 'Sign in with Facebook';
  function t(key: 'login.withGoogle'): 'Sign in with Google';
  function t(key: 'login.dontHaveAnAccount'): "Don't have an account yet?";
  function t(key: 'login.signUpNow'): 'Sign up now';
  function t(key: 'login.or'): 'or';
  function t(key: 'login.passwordForgotten'): 'Password forgotten?';
  function t(key: 'login.placeholderEmail'): 'Email Address';
  function t(key: 'login.placeholderPassword'): 'Password';
}

declare module '*.json' {
  const value: any;
  export default value;
}
