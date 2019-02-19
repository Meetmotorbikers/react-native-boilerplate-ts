import { setI18nConfig } from '@@locale/language.utils';
import i18n from 'i18n-js';
import * as React from 'react';
import * as RNLocalize from 'react-native-localize';

import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default class ReactNativeLocalizeExample extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
    setI18nConfig(); // set initial config
  }

  componentDidMount(): void {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount(): void {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  render(): JSX.Element {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Line
            name="RNLocalize.getLocales()"
            value={RNLocalize.getLocales()}
          />
          <Line
            name="RNLocalize.getCurrencies()"
            value={RNLocalize.getCurrencies()}
          />
          <Line
            name="RNLocalize.getCountry()"
            value={RNLocalize.getCountry()}
          />
          <Line
            name="RNLocalize.getCalendar()"
            value={RNLocalize.getCalendar()}
          />
          <Line
            name="RNLocalize.getTemperatureUnit()"
            value={RNLocalize.getTemperatureUnit()}
          />
          <Line
            name="RNLocalize.getTimeZone()"
            value={RNLocalize.getTimeZone()}
          />
          <Line
            name="RNLocalize.uses24HourClock()"
            value={RNLocalize.uses24HourClock()}
          />
          <Line
            name="RNLocalize.usesMetricSystem()"
            value={RNLocalize.usesMetricSystem()}
          />
          <Line
            name="RNLocalize.findBestAvailableLanguage(['en-US', 'en', 'fr'])"
            value={RNLocalize.findBestAvailableLanguage(['en-US', 'en', 'fr'])}
          />

          <Line name="Translation example" value={i18n.t('greetings')} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  private handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };
}

const Line: React.SFC<{
  readonly name: string;
  readonly value: any;
}> = props => (
  <View style={styles.block}>
    <Text style={styles.name}>{props.name}</Text>
    <Text style={styles.value}>{JSON.stringify(props.value)}</Text>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    padding: 16,
    alignItems: 'flex-start',
  },
  block: {
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  name: {
    textDecorationLine: 'underline',
    fontWeight: '500',
    marginBottom: 8,
  },
  value: {
    textAlign: 'left',
  },
});
