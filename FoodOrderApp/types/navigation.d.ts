import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export type OnBoardingStackParamList = {
  LoginSignUp: undefined;
  AskUserLocation: undefined;
  SelectLanguageModal: undefined;
  HomeScreen: NavigatorScreenParams<HomeParamList>;
};

export type OnBoardingStackScreenProps<
  T extends keyof OnBoardingStackParamList,
> = StackScreenProps<OnBoardingStackParamList, T>;

export type HomeParamList = {
  DeliveryScreenStack: NavigatorScreenParams<DeliveryStackParamList>;
  DiningScreenStack: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeParamList> =
  CompositeNavigationProp<
    BottomTabScreenProps<HomeParamList, T>,
    OnBoardingStackScreenProps<keyof OnBoardingStackParamList>
  >;

export type DiningStackParamList = {
  DiningScreen: undefined;
};

type DiningScreenProps = CompositeNavigationProp<
  HomeTabScreenProps<HomeParamList, 'DiningScreen'>,
  StackScreenProps<DiningStackParamList>
>;

export type DeliveryStackParamList = {
  DeliveryScreen: undefined;
  RestaurantDetail: {restaurant_id: number};
};

type DeliveryScreenProps = CompositeScreenProps<
  HomeTabScreenProps<HomeParamList, 'DeliveryScreen'>,
  StackScreenProps<DeliveryStackParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends OnBoardingStackParamList {}
  }
}
