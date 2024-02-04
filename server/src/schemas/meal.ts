//* Libraries imports
import { t, type Static } from "elysia";

export const mealSchema = t.Object({
  id: t.String(),
  name: t.String({ minLength: 3, maxLength: 50 }),
  date: t.String(),
  partOfDiet: t.Boolean(),
});

export type Meal = Static<typeof mealSchema>;

export const newMealSchema = t.Omit(mealSchema, ["id"]);

export type NewMeal = Static<typeof newMealSchema>;
