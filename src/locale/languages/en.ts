// tslint:disable no-object-mutation
export const en = {
  title: 'example',
  platform: {
    ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
  },
  greetings: 'Welcome to React Native!',
  instructions: 'To get started, edit app.tsx',
};

// has to export as commonJs to allow the `i18n-dts` script to auto generate the typings for us.
module.exports = en;
