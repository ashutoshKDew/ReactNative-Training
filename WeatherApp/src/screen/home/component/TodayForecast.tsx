import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import ItemToday from './ItemToday';
import {typography} from '../../../theme';

type TodayForeCastProps = {
  todayForecastData: TodayForeCast[];
};

export default function TodayForecast({todayForecastData}: TodayForeCastProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {todayForecastData.map((forecast, index) => (
          <ItemToday key={index} forecast={forecast} index={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    ...typography.header,
    color: 'white',
    textAlign: 'left',
    marginHorizontal: 12,
    marginVertical: 12,
  },
});
