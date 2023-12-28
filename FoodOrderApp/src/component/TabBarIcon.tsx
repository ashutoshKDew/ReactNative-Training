import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {deliveryIcon, diningIcon} from '../assets';

const tabIcon = {
  Delivery: deliveryIcon,
  Dining: diningIcon,
};

type TabBarIconProps = {
  color: string;
  routeName: string;
};

export function TabBarIcon({color, routeName}: TabBarIconProps) {
  return (
    <Image
      accessibilityIgnoresInvertColors
      source={tabIcon[routeName]}
      style={styles(color).bottomIcon}
    />
  );
}

const styles = (tColor: string) =>
  StyleSheet.create({
    bottomIcon: {
      height: 22,
      width: 22,
      tintColor: tColor,
    },
  });

// TabBarIcon.propTypes = {
//   color: PropTypes.string.isRequired,
//   routeName: PropTypes.string.isRequired,
// };
