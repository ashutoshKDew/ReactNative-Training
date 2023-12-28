export type RestaurantDetailType = {
  id: number;
  name: string;
  tag: string[];
  promotionTag: string[];
  rating: string;
  timing: string;
  dish: DishType[];
};

export type DishType = {
  id: string;
  name: string;
  price: number;
  description: string;
  vegan: boolean;
  image: string;
};
