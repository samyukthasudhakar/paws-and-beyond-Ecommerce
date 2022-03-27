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
    category: "Dogs",
    type: 'Treat',
    description: 'Healthy snacks for dogs',
    price: "500",
    discount: 10,
    badge: '',
    image: dogFoodApple,
    rating: 1.5,
    addedToWishList: false,
    addedToCart: false,
    cartCount: 0
  },
  {
    _id: uuid(),
    name: "Riley's Pumpkin Munchies",
    category: "Dogs",
    type: 'Treat',
    description: 'Healthy snacks for dogs',
    price: "300",
    discount: '',
    badge: '',
    image: dogFoodPumpkin,
    rating: 4.5,
    addedToWishList: false,
    addedToCart: false,
    cartCount: 0
  },
  {
    _id: uuid(),
    name: "Foggy Squeaky Toy",
    category: "Dogs",
    type: 'Toy',
    description: 'Fun play time Toy',
    price: "700",
    discount: 20,
    badge:'SALE',
    image: squeakyBone,
    rating: 3.5,
    addedToWishList: false,
    addedToCart: false,
    cartCount: 0
  },
  {
    _id: uuid(),
    name: "Riley's Treat Dispenser",
    category: "Dogs",
    type: 'Toy',
    description: 'Fun play time Toy',
    price: "1000",
    discount: '',
    badge:'New',
    image: treatDispenser,
    rating: 4.8,
    addedToWishList: false,
    addedToCart: false,
    cartCount: 0
  },
  {
    _id: uuid(),
    name: "Riley's Orange Bandana",
    category: "Dogs",
    type: 'Accessory',
    description: 'Pure cotton soft print',
    price: "300",
    discount: '',
    badge:'New',
    image: dogBandana,
    rating: 4.5,
    addedToWishList: false,
    addedToCart: false,
    cartCount: 0
  },
  {
    _id: uuid(),
    name: "Riley's Dog Collar",
    category: "Dogs",
    type: 'Accessory',
    description: 'Classy, light-weight, skin-friendly',
    price: "770",
    discount: 15,
    badge:'SALE',
    image: dogCollar,
    rating: 4.5,
    addedToWishList: false,
    addedToCart: false,
    cartCount: 0
  }
];
