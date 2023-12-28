import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
} from 'react-native';
import {ItemRestaurant} from './component/ItemRestaurant';
import {styles} from './DeliveryScreen.Style';
import SearchBar from './SearchBar';
import TopBar from './TopBar';
import RestaurantsFilter from './RestaurantsFilter';
import {useGetRestaurantsQuery} from '../../../services/modules/restaurants';
import {Colors} from '../../../theme/Variables';
import {useTheme} from '../../../hooks';
import {DeliveryScreenProps} from '../../../../types/navigation';

export default function DeliveryScreen({navigation}: DeliveryScreenProps) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {Common, Fonts, Gutters, Layout, darkMode: isDark} = useTheme();

  const {data, isLoading, isFetching, isSuccess, isError, error, refetch} =
    useGetRestaurantsQuery();

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView
      style={[
        {backgroundColor: isDark ? '#403737' : '#DFDFDF'},
        styles.container,
      ]}>
      {isLoading && <ActivityIndicator size="large" color={Colors.primary} />}
      {isError && <Text>{JSON.stringify(error)}</Text>}
      {isSuccess && (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ItemRestaurant
              restaurant={item}
              onRestaurantClick={id =>
                navigation.navigate('RestaurantDetail', {
                  restaurant_id: id,
                })
              }
            />
          )}
          keyExtractor={item => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#9Bd35A', '#689F38']} // Customize the color of the refresh spinner
            />
          }
          ListHeaderComponent={
            <>
              <TopBar />
              <SearchBar />
              {/* <WhatsOnYourMind /> */}
              <RestaurantsFilter />
            </>
          }
        />
      )}
    </SafeAreaView>
  );
}
