//* Libraries imports
import { t, type Static } from "elysia";

export const mealSchema = t.Object({
  id: t.String(),
  name: t.String({ minLength: 3, maxLength: 50 }),
  description: t.String({ minLength: 3, maxLength: 512 }),
  date: t.String(),
  hour: t.String(),
  partOfDiet: t.Boolean(),
});

export type Meal = Static<typeof mealSchema>;

export const newMealSchema = t.Omit(mealSchema, ["id"]);

export type NewMeal = Static<typeof newMealSchema>;
