import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {
  DataWhatsOnYourMind,
  TypeWhatsOnYourMind,
} from '../../../data/DeliveryData';
import {Image} from 'react-native';

const data = [
  [DataWhatsOnYourMind[2], DataWhatsOnYourMind[3]],
  [DataWhatsOnYourMind[4], DataWhatsOnYourMind[5]],
  [DataWhatsOnYourMind[6], DataWhatsOnYourMind[7]],
  [DataWhatsOnYourMind[8], DataWhatsOnYourMind[9]],
  [DataWhatsOnYourMind[12], DataWhatsOnYourMind[1]],
  [DataWhatsOnYourMind[10], DataWhatsOnYourMind[11]],
];

function Card({name, imgPath}: TypeWhatsOnYourMind) {
  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.itemImg}
        source={require('../../../assets/img_woym/woym_two.png')}
      />
      <Text style={styles.itemName}>{name}</Text>
    </View>
  );
}

export default function WhatsOnYourMind() {
  const renderItem = useCallback(({item}) => {
    return (
      <View>
        <Card {...item[0]} />
        <Card {...item[1]} />
      </View>
    );
  }, []);

  const keyExtractor = useCallback(item => {
    return item.id;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What's on your mind</Text>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  heading: {
    marginVertical: 16,
    textAlign: 'center',
    letterSpacing: 1.2,
    color: 'black',
  },
  item: {
    height: 75,
    width: 105,
    padding: 2,
    marginVertical: 4,
    marginHorizontal: 4,
  },
  itemContainer: {
    flexDirection: 'column',
    // borderColor: 'black',
    // borderWidth: 1,
    margin: 4,
  },
  itemImg: {
    width: 90,
    height: 60,
    margin: 2,
    marginHorizontal: 6,
  },
  itemName: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
  },
});
