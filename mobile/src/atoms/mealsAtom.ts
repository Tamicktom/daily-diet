//* Libraries imports
import { atom } from "jotai";

type Meal = {
  id: string;
  name: string;
  isOnDiet: boolean;
  kcal: number;
};

const defaultMeals: Meal[] = [
  {
    id: "1",
    name: "Pizza",
    isOnDiet: false,
    kcal: 1000,
  },
  {
    id: "2",
    name: "Salad",
    isOnDiet: true,
    kcal: 100,
  },
  {
    id: "3",
    name: "Pasta",
    isOnDiet: false,
    kcal: 800,
  },
  {
    id: "4",
    name: "Burger",
    isOnDiet: false,
    kcal: 1200,
  },
  {
    id: "5",
    name: "Fruit",
    isOnDiet: true,
    kcal: 200,
  },
  {
    id: "6",
    name: "Vegetables",
    isOnDiet: true,
    kcal: 300,
  },
];

export const mealsAtom = atom<Meal[]>(defaultMeals);
