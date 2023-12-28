import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

export default function TopBar() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/location.png')}
        style={styles.locationImg}
      />
      <View style={styles.address}>
        <Text style={styles.mainAdd}>Home </Text>
        <Text style={styles.desAdd}>house No 2, Lower Nehrugram</Text>
      </View>
      <View style={styles.accountBtn}>
        <Text style={styles.accountName}>AK</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
    paddingHorizontal: 8,
  },
  locationImg: {
    width: 22,
    height: 22,
    marginHorizontal: 4,
    marginVertical: 12,
    tintColor: 'red',
  },
  address: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 6,
  },
  mainAdd: {
    color: 'black',
    fontWeight: '700',
  },
  desAdd: {
    color: 'gray',
    fontWeight: '500',
  },
  accountBtn: {
    height: 42,
    width: 42,
    borderRadius: 21,
    backgroundColor: 'orange',
    justifyContent: 'center',
  },
  accountName: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});
