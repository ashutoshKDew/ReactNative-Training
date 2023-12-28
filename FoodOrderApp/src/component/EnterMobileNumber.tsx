import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {HOME_NAVIGATION} from '../constant';

type enterNumberProps = {
  onSubmitNumber: () => void;
};
export default function EnterMobileNumber({onSubmitNumber}: enterNumberProps) {
  const {t} = useTranslation();
  const [number, onChangeNumber] = useState('');
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 8,
        paddingVertical: 8,
      }}>
      {/* country code and number input */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={[
            styles.inputBorder,
            {
              // padding: Platform.OS === 'ios' ? 8 : 0,
              height: '100%',
              // width: '100%',
            },
          ]}>
          <Text style={{padding: 14}}>IN</Text>
        </View>

        <View
          style={[
            styles.inputBorder,
            {
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
              // padding: Platform.OS === 'ios' ? 8 : 0,
              height: '100%',
            },
          ]}>
          <Text style={{marginHorizontal: 4}}>+91</Text>
          <TextInput
            onChangeText={onChangeNumber}
            value={number}
            maxLength={10}
            placeholder={t('welcome:enter_number')}
            keyboardType="numeric"
          />
        </View>
      </View>
      {/* continue button */}
      <TouchableOpacity onPress={onSubmitNumber}>
        <View
          style={{
            borderRadius: 12,
            marginVertical: 16,
            backgroundColor: 'red',
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              padding: 14,
            }}>
            {t('welcome:continue')}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  enterNumberRow: {
    flexDirection: 'row',
    marginVertical: 6,
    alignItems: 'center',
    marginHorizontal: 12,
  },
  inputBorder: {
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 2,
    marginHorizontal: 2,
  },
});
