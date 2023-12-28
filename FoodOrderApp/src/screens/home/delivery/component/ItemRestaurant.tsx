import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RestaurantType} from '../../../../../types/RestaurantType';
import {HOME_NAVIGATION} from '../../../../constant';

type ItemRestaurantProps = {
  restaurant: RestaurantType;
  onRestaurantClick: (id: number) => void;
};
export function ItemRestaurant({
  restaurant,
  onRestaurantClick,
}: ItemRestaurantProps) {
  const {id, name, img, rating, des, timing, discount} = restaurant;
  const handleRestaurant = (id: number) => {
    console.log('handleRestaurant');
    onRestaurantClick(id);
  };
  const handleFavorite = () => {
    console.log('handleFavorite');
    // Handle favorite button press
  };

  const handleMenu = () => {
    console.log('handleMenu');
    // Handle menu button press
  };

  return (
    <Pressable onPress={() => handleRestaurant(id)}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: img}} style={styles.image} />
          <View style={styles.imageButtons}>
            <Pressable onPress={handleFavorite} style={styles.resMenuButton}>
              <Image
                style={styles.resMenu}
                source={require('../../../../assets/icon/ic_fav_off.png')}
              />
            </Pressable>
            <Pressable onPress={handleMenu} style={styles.resMenuButton}>
              <Image
                style={styles.resMenu}
                source={require('../../../../assets/icon/ic_menu.png')}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.shopNameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.rating}>{rating}</Text>
          </View>
          <Text style={styles.subName}>{des}</Text>
          <Text style={styles.subName}>{timing}</Text>
          <Text style={styles.offer}>{discount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    height: 'auto',
    flexDirection: 'column',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  imageContainer: {
    backgroundColor: 'grey',
    height: 140,
  },
  infoContainer: {
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  imageButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 12,
    right: 12,
  },
  resMenuButton: {
    backgroundColor: 'transparent',
    padding: 4,
    marginHorizontal: 4,
    borderRadius: 4,
  },
  resMenu: {
    height: 18,
    width: 18,
    tintColor: '#FFFFFF',
  },
  shopNameContainer: {
    flexDirection: 'row',
  },
  name: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 4,
    marginHorizontal: 6,
  },
  subName: {
    fontSize: 12,
    marginBottom: 4,
    marginHorizontal: 6,
  },
  offer: {
    marginVertical: 8,
    fontSize: 14,
    color: 'blue',
    fontWeight: 'bold',
    marginHorizontal: 6,
  },
  rating: {
    color: 'white',
    fontWeight: 'bold',
    padding: 2,
    paddingHorizontal: 6,
    borderRadius: 6,
    backgroundColor: 'green',
    fontSize: 12,
    textAlign: 'center',
    margin: 4,
  },
});
