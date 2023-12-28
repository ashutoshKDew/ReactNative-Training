import {StyleSheet} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import OnBoardingNavigation from './src/navigation/OnBoardingNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Loading from './src/component/Loading';
import {store, persistor} from './src/store';
import './src/localization';

export default function App() {
  if (__DEV__) console.log('Running in dev mode');

  return (
    <Provider store={store}>
      <PersistGate
        loading={<Loading />}
        // onBeforeLift={onBeforeLift}
        persistor={persistor}>
        <GestureHandlerRootView style={styles.container}>
          <OnBoardingNavigation />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
