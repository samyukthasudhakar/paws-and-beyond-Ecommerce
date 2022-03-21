import { v4 as uuid } from "uuid";
import { bird, bunny, cat, dog, fish } from '../../../src/assets/images'

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Dogs",
    icon: dog
  },
  {
    _id: uuid(),
    categoryName: "Cats",
    icon: cat
  },
  {
    _id: uuid(),
    categoryName: "Birds",
    icon: bird
  },
  {
    _id: uuid(),
    categoryName: "Fish",
    icon: fish
  },
  {
    _id: uuid(),
    categoryName: "Bunny",
    icon: bunny
  },
];
