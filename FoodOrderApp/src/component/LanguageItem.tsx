import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LanguageProps} from '../data/availableLang';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function LanguageItem({item}: {item: LanguageProps}) {
  const onLanguageItemSelect = (langId: number) => {
    console.log('onLanguageItemSelect ' + langId);
  };
  return (
    <TouchableOpacity
      onPress={() => onLanguageItemSelect(item.id)}
      style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 6,
    margin: 6,
    width: '100%',
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 32,
  },
});
