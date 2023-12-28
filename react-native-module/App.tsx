import React, {useState} from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AndroidModule from './src/androidModule/AndroidModule';
import CommonModule from './src/commonModule/CommonModule';
import IosModule from './src/iosModule/IosModule';

export default function App() {
  const [text, onChangeText] = React.useState('');

  const [androidResult, setAndroidResult] = useState('');
  const [iosResult, setIosResult] = useState('');
  const [commonResult, setCommonResult] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.android}>
        <Text style={styles.label}>{`From Android : ${androidResult}`}</Text>
        <Button
          title="Press me"
          onPress={() => {
            if (Platform.OS === 'android') {
              const random = Math.floor(Math.random() * 100);
              console.log(`android random ${random}`);
              AndroidModule.createAndroidEvent(random, result => {
                setAndroidResult(result.toString());
              });
            }
          }}
        />
      </View>
      <View style={styles.ios}>
        <Text style={styles.label}>{`From IOs : ${iosResult}`}</Text>
        <Button
          title="Press me"
          onPress={() => {
            if (Platform.OS === 'ios') {
              const random = Math.floor(Math.random() * 100);
              console.log(`ios random ${random}`);
              IosModule.createIosEvent(random, result => {
                setIosResult(result.toString());
              });
            }
          }}
        />
      </View>
      <View style={styles.both}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="enter name..."
          value={text}
        />
        <Text style={styles.label}>{`Common : ${commonResult}`}</Text>
        <Button
          title="Press me"
          onPress={() => {
            CommonModule.createCommonEvent(text, result => {
              setCommonResult(result);
            });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 12,
  },
  android: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
  },
  ios: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
  },
  both: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
  },
  label: {
    fontSize: 22,
    fontWeight: '600',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {},
});
