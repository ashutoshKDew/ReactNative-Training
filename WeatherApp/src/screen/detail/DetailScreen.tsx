import {
  Alert,
  Image,
  Pressable,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {NavigationAction, Route, RouteConfig} from '@react-navigation/native';

// interface DetailScreenProps {
//   route: RouteConfig;
// }

export function DetailScreen({route}) {
  const {day, max, min, name} = route.params;
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Share',
        title: 'title',
        url: 'http://www.example.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log('Sharing activity');
        } else {
          // shared
          console.log('shared');
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log('dismissed');
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{name.toUpperCase()}</Text>
      <Text style={styles.day}>{day}</Text>
      <View style={styles.tempRow}>
        <Text style={styles.temp}>Max {max}°C</Text>
        <Text style={styles.temp}> </Text>
        <Text style={styles.temp}>Min {min}°C</Text>
      </View>
      <Pressable onPress={onShare}>
        <Image
          source={require('../../assets/share.png')}
          style={styles.shareImg}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(234, 215, 73, 0.8)',
    padding: 8,
  },
  temp: {
    textAlign: 'center',
    fontSize: 18,
  },
  tempRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  heading: {
    textAlign: 'center',
    fontSize: 32,
  },
  day: {
    textAlign: 'center',
    fontSize: 22,
  },
  shareImg: {
    marginTop: 35,
    height: 35,
    width: 35,
  },
});
