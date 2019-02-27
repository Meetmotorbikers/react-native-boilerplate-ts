// tslint:disable no-object-mutation no-hardcoded-credentials
import Types from 'MyTypes';

const de: Types.Locale = {
  title: 'Example',
  platform: {
    ios:
      'Drücken Sie Cmd + R zum Neuladen, \nCmd + D oder Schütteln für das Dev-Menü',
    android:
      'Tippen Sie doppelt auf R auf Ihrer Tastatur, \num das Gerät neu zu laden, zu schütteln oder die Menütaste zu drücken',
  },
  greetings: 'Willkommen zu React Native!',
  instructions: 'Bearbeiten Sie zunächst app.tsx',
  auth: {
    signIn: {
      title: 'EINLOGGEN',
      withFacebook: 'Einloggen mit Facebook',
      withGoogle: 'Einloggen mit Google',
      dontHaveAnAccount: 'Hast du noch keinen Account?',
      signUpNow: 'Jetzt Registrieren',
      or: 'oder',
      passwordForgotten: 'Passwort vergessen?',
      placeholderUsername: 'Username',
      placeholderPassword: 'Passwort',
      signInBtn: 'Einloggen',
    },
    signUp: {
      title: 'ANMELDEN',
      placeholderEmail: 'Email Addresse',
      placeholderPassword: 'Passwort',
      placeholderConfirmPassword: 'Passwort bestätigen',
      alreadyHaveAnAccount: 'Hast du bereits einen Account?',
      signInNow: 'Schreib dich jetzt ein',
    },
  },
};

export default de;
