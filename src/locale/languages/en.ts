// tslint:disable no-object-mutation no-hardcoded-credentials
const en = {
  title: 'example',
  platform: {
    ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
  },
  greetings: 'Welcome to React Native!',
  instructions: 'To get started, edit app.tsx',
  auth: {
    signIn: {
      title: 'SIGN IN',
      withFacebook: 'Sign in with Facebook',
      withGoogle: 'Sign in with Google',
      dontHaveAnAccount: "Don't have an account yet?",
      signUpNow: 'Sign up now',
      or: 'or',
      passwordForgotten: 'Password forgotten?',
      placeholderEmail: 'Email Address',
      placeholderPassword: 'Password',
    },
    signUp: {
      title: 'SIGN UP',
      placeholderEmail: 'Email Address',
      placeholderPassword: 'Password',
      placeholderConfirmPassword: 'Confirm Password',
      alreadyHaveAnAccount: 'Do you already have an account?',
      signInNow: 'Sing in now',
    },
  },
};

// has to export as commonJs to allow the `i18n-dts` script to auto generate the typings for us.
module.exports = en;
