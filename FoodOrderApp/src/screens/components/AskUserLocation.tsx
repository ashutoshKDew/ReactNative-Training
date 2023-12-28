import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {reduxStorage} from '../../store';
import {useTranslation} from 'react-i18next';

export default function AskUserLocation() {
  const {t, i18n} = useTranslation();
  const [result, setResult] = useState('');
  useEffect(() => {
    (async () =>
      reduxStorage
        .getItem('office')
        .then((value: string) => {
          console.log('resukt ' + value);
          setResult(value);
        })
        .catch((error: {message: string}) => setResult(error.message)))();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.mainImage}
        source={require('../../assets/findlocation.png')}
      />
      <Text style={styles.semiBoldText}>{t('welcome:description')}</Text>
      <Text style={styles.semiBoldText}>
        {/* {strings.common.dontHavePermission} */}
        {result}
      </Text>
      <Text style={styles.normalText}>
        {/* {strings.common.startExploring} */}
        startExploring
      </Text>
      <TouchableOpacity
        style={styles.redButton}
        onPress={() => {
          reduxStorage.setItem('office', 'dew solutions ');
        }}>
        <Text style={styles.normalWhiteText}>
          {/* {strings.common.enableLocation} */}
          enableLocation
        </Text>
      </TouchableOpacity>
      <View style={styles.whiteButton}>
        <Text style={styles.normalRedText}>
          {/* {strings.common.enterLocation} */}
          enterLocation
        </Text>
      </View>
      <Text style={styles.termText}>
        {/* {strings.common.locationStatement} */}
        locationStatement
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainImage: {
    height: '40%',
    width: '60%',
  },
  semiBoldText: {
    marginVertical: 8,
    fontWeight: '700',
  },
  normalText: {
    marginVertical: 6,
  },
  whiteButton: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 12,
    borderWidth: 2,
    borderColor: 'red',
    marginVertical: 4,
    width: '90%',
    backgroundColor: 'white',
  },
  redButton: {
    width: '90%',
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
    alignItems: 'center',
    marginHorizontal: 12,
    backgroundColor: 'red',
  },
  normalWhiteText: {
    color: 'white',
  },
  normalRedText: {
    color: 'red',
  },
  termText: {
    marginTop: 50,
    textAlign: 'center',
  },
});
