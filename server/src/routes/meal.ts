//* Libraries imports
import { Elysia, t } from "elysia";

//* Schemas imports
import { mealSchema, type Meal, newMealSchema } from "../schemas/meal";

const tmpData: Meal[] = [];

function verifyDate(date: string) {
  const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
  if (!dateRegex.test(date)) {
    return {
      message: "Invalid date format. Use DD-MM-YYYY format. Ex. 25-08-2021",
    };
  }

  //because the date is in DD-MM-YYYY format
  //we need to parse it to YYYY-MM-DD before creating a new Date object
  const [day, month, year] = date.split("-");
  date = `${year}-${month}-${day}`;
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return {
      message: "Invalid date",
    };
  }

  if (parsedDate.getTime() > new Date().getTime()) {
    return {
      message:
        "Date cannot be in the future. The server time is: " +
        new Date().toLocaleDateString("en-US"),
    };
  }

  return true;
}

export const meal = new Elysia().group("/meal", (app) => {
  return app
    .get(
      "/:id",
      (req) => {
        const { id } = req.params;
        const meal = tmpData.find((meal) => meal.id === id);
        if (!meal) {
          req.set.status = 404;
          return {
            message: "Meal not found",
          };
        }
        return {
          ...meal,
        };
      },
      {
        params: t.Object({
          id: t.String(),
        }),
      }
    )
    .post(
      "/",
      (req) => {
        //verify if date is DD-MM-YYYY format
        let date = req.body.date;
        const dateVerification = verifyDate(date);

        if (dateVerification !== true) {
          req.set.status = 400;
          return dateVerification;
        }

        const newMeal = {
          ...req.body,
          id: crypto.randomUUID(),
        };

        //to use new Date, we need to parse the date to MM-DD-YYYY format
        const [day, month, year] = date.split("-");
        date = `${month}-${day}-${year}`;
        newMeal.date = new Date(date).toLocaleDateString("en-US");

        tmpData.push(newMeal);
        return {
          ...newMeal,
        };
      },
      {
        body: newMealSchema,
      }
    )
    .put(
      "/:id",
      (req) => {
        const { id } = req.params;
        const mealIndex = tmpData.findIndex((meal) => meal.id === id);
        if (mealIndex === -1) {
          req.set.status = 404;
          return {
            message: "Meal not found",
          };
        }

        const date = req.body.date;
        const dateVerification = verifyDate(date);

        if (dateVerification !== true) {
          req.set.status = 400;
          return dateVerification;
        }

        const updatedMeal = {
          ...req.body,
          id,
        };

        updatedMeal.date = new Date(updatedMeal.date).toLocaleDateString(
          "en-US"
        );

        tmpData[mealIndex] = updatedMeal;

        return {
          ...updatedMeal,
        };
      },
      {
        body: newMealSchema,
        params: t.Object({
          id: t.String(),
        }),
      }
    )
    .delete(
      "/:id",
      (req) => {
        const { id } = req.params;
        const mealIndex = tmpData.findIndex((meal) => meal.id === id);
        if (mealIndex === -1) {
          req.set.status = 404;
          return {
            message: "Meal not found",
          };
        }
        const deletedMeal = tmpData[mealIndex];
        tmpData.splice(mealIndex, 1);
        return {
          ...deletedMeal,
        };
      },
      {
        params: t.Object({
          id: t.String(),
        }),
      }
    );
});

export const meals = new Elysia().group("/meals", (app) => {
  return app.get("/", () => {
    return {
      meals: tmpData,
    };
  });
});

export const resume = new Elysia().group("/resume", (app) => {
  return app.get("/", () => {
    //compute the porcentage of meals that are part of diet
    const dietMeals = tmpData.filter((meal) => meal.partOfDiet);
    const totalMeals = tmpData.length;
    const porcentage = (dietMeals.length / totalMeals) * 100;

    console.log(dietMeals.length, totalMeals, porcentage);

    if (totalMeals === 0) {
      return {
        totalMeals: 0,
        dietMeals: 0,
        porcentage: 0,
      };
    }

    return {
      totalMeals,
      dietMeals: dietMeals.length,
      porcentage: porcentage.toFixed(2),
    };
  });
});
