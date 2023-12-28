import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {DataRestaurantFilterCategory} from '../../../data/DeliveryData';
import ItemRestaurantFilter from './component/ItemRestaurantFilter';
import {useTranslation} from 'react-i18next';

export default function RestaurantsFilter() {
  const {t} = useTranslation();

  return (
    <View>
      <Text style={styles.heading}>{t('common:all_restaurant')}</Text>
      <View style={styles.filterItem}>
        <FlatList
          data={DataRestaurantFilterCategory}
          renderItem={({item}) => (
            <ItemRestaurantFilter id={item.id} name={item.name} />
          )}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text style={styles.subHeading}>
        {t('common:no_of_restaurant', {number: '2314'})}
      </Text>
      <Text style={styles.subHeading}>FEATURED</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  heading: {
    marginVertical: 16,
    textAlign: 'center',
    letterSpacing: 1.2,
    color: 'black',
  },
  subHeading: {
    marginVertical: 8,
    textAlign: 'center',
  },
  filterItem: {},
});
