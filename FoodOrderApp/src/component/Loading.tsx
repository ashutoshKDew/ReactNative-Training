import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Loading() {
  return (
    <View style={{flex: 1}}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
}
