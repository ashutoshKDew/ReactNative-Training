export type TypeRecommendedForYou = {
  id: number;
  dishName: string;
  dishType: string;
  deliveryTime: string;
  discount?: string;
  dishImage: string;
};
export const DataRecommendedForYou: TypeRecommendedForYou[] = [
  {
    id: 1,
    dishName: 'Barista Coffee',
    dishType: 'cafe',
    deliveryTime: '25-30 min',
    discount: '40% off',
    dishImage: require('../assets/img_delivery/reco_one.jpg'),
  },
  {
    id: 2,
    dishName: 'Delicious Pizza',
    dishType: 'pizza',
    deliveryTime: '20-25 min',
    dishImage: require('../assets/img_delivery/reco_two.jpg'),
  },
  {
    id: 3,
    dishName: 'Burger Delight',
    dishType: 'burger',
    deliveryTime: '15-20 min',
    discount: '20% off',
    dishImage: require('../assets/img_delivery/reco_three.jpg'),
  },
];

export type TypeWhatsOnYourMind = {
  id: string;
  name: string;
  imgPath: string;
};

export const DataWhatsOnYourMind: TypeWhatsOnYourMind[] = [
  {
    id: '1',
    name: 'Pizza',
    imgPath: require('../assets/img_woym/woym_one.png'),
  },
  {
    id: '2',
    name: 'Burger',
    imgPath: require('../assets/img_woym/woym_two.png'),
  },
  {
    id: '3',
    name: 'Italian',
    imgPath: require('../assets/img_woym/woym_three.png'),
  },
  {
    id: '4',
    name: 'South',
    imgPath: require('../assets/img_woym/woym_four.png'),
  },
  {
    id: '5',
    name: 'Chole bhature',
    imgPath: require('../assets/img_woym/woym_five.png'),
  },
  {
    id: '6',
    name: 'Cake',
    imgPath: require('../assets/img_woym/woym_two.png'),
  },
  {
    id: '7',
    name: 'Thali',
    imgPath: require('../assets/img_woym/woym_one.png'),
  },
  {
    id: '8',
    name: 'Pratha',
    imgPath: require('../assets/img_woym/woym_three.png'),
  },
  {
    id: '9',
    name: 'North',
    imgPath: require('../assets/img_woym/woym_four.png'),
  },
  {
    id: '10',
    name: 'Pizza',
    imgPath: require('../assets/img_woym/woym_five.png'),
  },
  {
    id: '11',
    name: 'Pizza',
    imgPath: require('../assets/img_woym/woym_two.png'),
  },
  {
    id: '12',
    name: 'Pizza',
    imgPath: require('../assets/img_woym/woym_one.png'),
  },
];

export type TypeRestaurantFilterCategory = {
  id: string;
  name: string;
};

export const DataRestaurantFilterCategory: TypeRestaurantFilterCategory[] = [
  {id: '1', name: 'Sort'},
  {id: '2', name: 'Pure Veg'},
  {id: '3', name: 'Award Winning'},
  {id: '4', name: 'Nearest'},
  {id: '5', name: 'non veg'},
  {id: '6', name: 'daal'},
  {id: '7', name: 'Rice'},
  {id: '8', name: 'Roti'},
];
