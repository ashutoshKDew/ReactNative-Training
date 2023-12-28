import {StyleSheet} from 'react-native';
import {useTheme} from '../../../hooks';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // backgroundColor: isDark ? '#000000' : '#DFDFDF',
    // marginTop: StatusBar.currentHeight || 0,
  },
  heading: {
    marginVertical: 16,
    textAlign: 'center',
    letterSpacing: 1.2,
    color: 'black',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
