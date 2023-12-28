import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TypeRestaurantFilterCategory} from '../../../../data/DeliveryData';

export default function ItemRestaurantFilter({
  name,
}: TypeRestaurantFilterCategory) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: 'white',
    marginHorizontal: 6,
  },
  itemText: {
    fontWeight: 'bold',
  },
});
