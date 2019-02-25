# react-native-boilerplate

### INSTALL:

to be able to run the app you need to have the [EXPO-CLI](https://docs.expo.io/versions/v32.0.0/introduction/installation) installed globally on your system.

you can choose to either use `npm` or `yarn`

```bash
$ npm install -g expo-cli
```

```bash
$ yarn global add expo-cli
```

### RUN:

start an emulator, ios or android then

```bash
yarn start
```

### DEBUG:

to more conveniently debug the app, we suggest [React Native Debugger](https://github.com/jhen0409/react-native-debugger).

to install it:

```bash
$ brew update && brew cask install react-native-debugger
```

the first time you want to run it use this command, since it is necessary with EXPO.

```bash
$ REACT_DEBUGGER="unset ELECTRON_RUN_AS_NODE && open -g 'rndebugger://set-debugger-loc?port=19001' ||" npm start
```
