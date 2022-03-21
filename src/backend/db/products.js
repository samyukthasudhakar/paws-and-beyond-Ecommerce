import { v4 as uuid } from "uuid";

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
    price: "500",
    discount: 10,
    badge: ''
  },
  {
    _id: uuid(),
    name: "Riley's Pumpkin Munchies",
    categoryName: "Dogs",
    type: 'treat',
    price: "300",
    discount: '',
    badge: ''
  },
  {
    _id: uuid(),
    name: "Foggy Squeaky Toy",
    categoryName: "Dogs",
    type: 'toy',
    price: "700",
    discount: 20,
    badge:'SALE'
  },
  {
    _id: uuid(),
    name: "Riley's Treat Dispenser",
    categoryName: "Dogs",
    type: 'toy',
    price: "1000",
    discount: '',
    badge:'New'
  },
  {
    _id: uuid(),
    name: "Riley's Orange Bandana",
    categoryName: "Dogs",
    type: 'accessory',
    price: "300",
    discount: '',
    badge:'New'
  },
  {
    _id: uuid(),
    name: "Riley's Dog Collar",
    categoryName: "Dogs",
    type: 'accessory',
    price: "770",
    discount: 15,
    badge:'SALE'
  }
];
