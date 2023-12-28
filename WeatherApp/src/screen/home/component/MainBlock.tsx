import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getImagePath} from '../../../utils/Utils';
import {typography} from '../../../theme';

type MainBlockProps = {
  mainBlockData: MainBlockData;
};

export default function MainBlock({mainBlockData}: MainBlockProps) {
  const imagePath = getImagePath(mainBlockData.currentIcon);
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{mainBlockData.city}</Text>
      <Text style={styles.currentTemp}>{mainBlockData.currentTemp} °C</Text>
      <Image style={styles.icon} source={imagePath} />
      <View style={styles.extraInfo}>
        <Text style={styles.extraText}>
          H : {mainBlockData.currentHumidity}
        </Text>
        <Text style={styles.extraText}> | </Text>
        <Text style={styles.extraText}>W {mainBlockData.currentWind}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    marginVertical: 22,
    backgroundColor: 'rgba(118, 132, 201, 0.8)',
    marginHorizontal: 14,
    borderRadius: 12,
  },
  city: {
    ...typography.cityName,
    color: 'white',
  },
  currentTemp: {
    color: 'white',
    fontSize: 52,
    fontFamily: 'NanumGothic-ExtraBold',
  },
  extraInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  extraText: {
    color: 'white',
    fontFamily: 'NanumGothic-Regular',
  },
  icon: {
    width: 125,
    margin: 12,
    height: 125,
  },
});
