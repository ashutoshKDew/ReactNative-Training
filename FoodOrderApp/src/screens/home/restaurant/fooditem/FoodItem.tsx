import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {updateCart} from '../../../../store/cart';
import {DishType} from '../../../../../types/RestaurantDetailType';
import {useAppDispatch, useAppSelector} from '../../../../hooks';

type FoodItemProps = {
  dishItem: DishType;
};
const FoodItem = ({dishItem}: FoodItemProps) => {
  const dispatch = useAppDispatch();

  const {items} = useAppSelector(state => state.cart);

  const handleUpdateCart = () => {
    dispatch(updateCart(dishItem));
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: dishItem.image}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{dishItem.name}</Text>
        <Text style={styles.price}>$ {dishItem.price}</Text>
        <View style={styles.buttonsRow}>
          <Pressable
            style={[
              styles.button,
              {borderTopLeftRadius: 20, borderBottomLeftRadius: 20},
            ]}
            onPress={handleUpdateCart}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
          <Text style={styles.quantity}>
            {items.find(cartItem => cartItem.dish.id === dishItem.id)
              ?.quantity || 0}
          </Text>
          <Pressable
            style={[
              styles.button,
              {borderTopRightRadius: 20, borderBottomRightRadius: 20},
            ]}
            onPress={handleUpdateCart}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  details: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  price: {
    marginTop: 5,
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  quantity: {
    marginHorizontal: 18,
    fontSize: 24,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FoodItem;
