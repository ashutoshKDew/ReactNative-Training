import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useGetRestaurantsDetailQuery} from '../../../services/modules/restaurants';
import {Colors} from '../../../theme/Variables';
import FoodItem from './fooditem/FoodItem';
import {useAppSelector} from '../../../hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DeliveryStackParamList} from '../../../../types/navigation';

type Props = NativeStackScreenProps<DeliveryStackParamList, 'RestaurantDetail'>;

export default function RestaurantDetail({route, navigation}: Props) {
  const {restaurant_id} = route.params;
  const {items, totalPrice} = useAppSelector(state => state.cart);
  const {data, isLoading, isSuccess, isError, error} =
    useGetRestaurantsDetailQuery(restaurant_id.toString());

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          style={{flex: 1, justifyContent: 'center'}}
          size="large"
          color={Colors.primary}
        />
      )}
      {isError && <Text>{JSON.stringify(error)}</Text>}
      {isSuccess && (
        <FlatList
          ListHeaderComponent={
            <>
              <View style={styles.cartTopBar}>
                <Text style={styles.cartQuantity}>
                  {`Total item ${items.length}`}
                </Text>
                <Text style={styles.cartPrice}>{`Price $ ${totalPrice}`}</Text>
              </View>
            </>
          }
          data={data.dish}
          renderItem={({item}) => <FoodItem dishItem={item} />}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartTopBar: {
    padding: 32,
    flexDirection: 'column',
  },
  cartQuantity: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    padding: 4,
  },
  cartPrice: {
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'right',
    padding: 8,
  },
});
