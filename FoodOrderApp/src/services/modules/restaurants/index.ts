import {RestaurantDetailType} from '../../../../types/RestaurantDetailType';
import {RestaurantType} from '../../../../types/RestaurantType';
import {api} from '../../api';

export const restaurantApi = api.injectEndpoints({
  endpoints: build => ({
    getRestaurants: build.query<RestaurantType[], void>({
      query: () => `/restaurant/`,
      providesTags: ['restaurant'],
    }),
    getRestaurantsDetail: build.query<RestaurantDetailType, string>({
      query: (id: string) => `/restaurantsDetails/${id}`,
    }),
  }),
  // overrideExisting: false,
});

export const {useGetRestaurantsQuery, useGetRestaurantsDetailQuery} =
  restaurantApi;
