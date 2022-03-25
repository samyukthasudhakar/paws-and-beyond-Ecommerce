import { v4 as uuid } from "uuid";
import { dogBandana, dogCollar, dogFoodApple, dogFoodPumpkin, squeakyBone, treatDispenser} from '../../assets/images/product'

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Riley's Apple Munchies",
    categoryName: "Dogs",
    type: 'treat',
    description: 'Healthy snacks for dogs',
    price: "500",
    discount: 10,
    badge: '',
    image: dogFoodApple,
    addedToWishList: false,
    addedToCart: false,
    cartCount: 0
  },
  {
    _id: uuid(),
    name: "Riley's Pumpkin Munchies",
    categoryName: "Dogs",
    type: 'treat',
    description: 'Healthy snacks for dogs',
    price: "300",
    discount: '',
    badge: '',
    image: dogFoodPumpkin,
    addedToWishList: false,
    addedToCart: false,
    cartCount: 0
  },
  {
    _id: uuid(),
    name: "Foggy Squeaky Toy",
    categoryName: "Dogs",
    type: 'toy',
    description: 'Fun play time toy',
    price: "700",
    discount: 20,
    badge:'SALE',
    image: squeakyBone,
    addedToWishList: false,
    addedToCart: false,
    cartCount: 0
  },
  {
    _id: uuid(),
    name: "Riley's Treat Dispenser",
    categoryName: "Dogs",
    type: 'toy',
    description: 'Fun play time toy',
    price: "1000",
    discount: '',
    badge:'New',
    image: treatDispenser,
    addedToWishList: false,
    addedToCart: false,
    cartCount: 0
  },
  {
    _id: uuid(),
    name: "Riley's Orange Bandana",
    categoryName: "Dogs",
    type: 'accessory',
    description: 'Pure cotton soft print',
    price: "300",
    discount: '',
    badge:'New',
    image: dogBandana,
    addedToWishList: false,
    addedToCart: false,
    cartCount: 0
  },
  {
    _id: uuid(),
    name: "Riley's Dog Collar",
    categoryName: "Dogs",
    type: 'accessory',
    description: 'Classy, light-weight, skin-friendly',
    price: "770",
    discount: 15,
    badge:'SALE',
    image: dogCollar,
    addedToWishList: false,
    addedToCart: false,
    cartCount: 0
  }
];
