import { v4 as uuid } from "uuid";
import { bird, bunny, cat, dog, fish } from '../../../src/assets/images'

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    category: "Dogs",
    icon: dog
  },
  {
    _id: uuid(),
    category: "Cats",
    icon: cat
  },
  {
    _id: uuid(),
    category: "Birds",
    icon: bird
  },
  {
    _id: uuid(),
    category: "Fish",
    icon: fish
  },
  {
    _id: uuid(),
    category: "Bunny",
    icon: bunny
  },
];
