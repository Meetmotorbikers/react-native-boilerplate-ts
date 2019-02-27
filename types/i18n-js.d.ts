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
  function t(key: 'auth.signIn.title'): 'SIGN IN';
  function t(key: 'auth.signIn.withFacebook'): 'Sign in with Facebook';
  function t(key: 'auth.signIn.withGoogle'): 'Sign in with Google';
  function t(
    key: 'auth.signIn.dontHaveAnAccount'
  ): "Don't have an account yet?";
  function t(key: 'auth.signIn.signUpNow'): 'Sign up now';
  function t(key: 'auth.signIn.or'): 'or';
  function t(key: 'auth.signIn.passwordForgotten'): 'Password forgotten?';
  function t(key: 'auth.signIn.placeholderEmail'): 'Email Address';
  function t(key: 'auth.signIn.placeholderPassword'): 'Password';
  function t(key: 'auth.signUp.title'): 'SIGN UP';
  function t(key: 'auth.signUp.placeholderEmail'): 'Email Address';
  function t(key: 'auth.signUp.placeholderPassword'): 'Password';
  function t(key: 'auth.signUp.placeholderConfirmPassword'): 'Confirm Password';
  function t(
    key: 'auth.signUp.alreadyHaveAnAccount'
  ): 'Do you already have an account?';
  function t(key: 'auth.signUp.signInNow'): 'Sing in now';
}

declare module '*.json' {
  const value: any;
  export default value;
}
