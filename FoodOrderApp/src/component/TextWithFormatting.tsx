import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type TextWithFormatProps = {
  text: string;
};

export default function TextWithFormatting({text}: TextWithFormatProps) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {flex: 1, height: 1, backgroundColor: 'grey', opacity: 0.3},
  text: {marginHorizontal: 4, fontWeight: '600'},
});
