import React from 'react';
import {useDispatch} from 'react-redux';
import {useLazyFetchOneQuery} from '../../../services/modules/restaurants';
import {useTranslation} from 'react-i18next';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

export default function SearchBar() {
  const {t} = useTranslation();

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/ic_search.png')}
        style={styles.icon}
      />
      <TextInput placeholder="Search" style={styles.input} />
      <TouchableOpacity onPress={() => console.log('Microphone Icon Pressed')}>
        <Image
          source={require('../../../assets/ic_microphone.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={{backgroundColor: 'orange'}}
        onPress={() => {
          console.log('button pressed');
          fetchOne(`${Math.ceil(Math.random() * 10 + 1)}`);
        }}>
        {isFetching || isLoading ? (
          <ActivityIndicator />
        ) : (
          <Image
            // source={Images.icons.send}
            source={require('../../../assets/icon/ic_menu.png')}
            style={[styles.icon, {tintColor: '#44427D'}]}
          />
        )}
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: 'gray',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    margin: 12,
    paddingHorizontal: 6,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 12,
    tintColor: 'red',
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
});
