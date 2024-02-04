//* Libraries imports
import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, SectionList } from "react-native";
import { Plus } from "phosphor-react-native";
import { tv } from "tailwind-variants";

//* Components imports
import { Button } from "@/components/Button";

//* Hooks imports
import { useMeals, type Meal } from "@/hooks/queries/useMeals";

type MealListData = {
  title: string;
  data: Meal[];
}

//dates in format "dd/MM/yyyy"
const today = new Date().toLocaleDateString("pt-BR");
const yesterday = new Date(Date.now() - 864e5).toLocaleDateString("pt-BR");
const beforeYesterday = new Date(Date.now() - 1728e5).toLocaleDateString("pt-BR");

export function MealList() {
  const [parsedMeals, setParsedMeals] = useState<MealListData[]>([]);
  const meals = useMeals();

  useEffect(() => {
    if (meals.data) {
      const newParsedMeals: MealListData[] = [];
      //first, add the system meal
      newParsedMeals.push({
        title: "system",
        data: [
          {
            id: "0",
            name: "",
            date: "",
            partOfDiet: false,
          }
        ]
      });

      newParsedMeals.push({
        title: "Hoje",
        data: [],
      });

      newParsedMeals.push({
        title: "Ontem",
        data: [],
      });

      newParsedMeals.push({
        title: "Anteontem",
        data: [],
      });

      const unorderedMeals = meals.data.meals;

      //for each meal, fix they date
      for (const meal of unorderedMeals) {
        //fix the date format adding a 0 to the day and month if they are less than 10
        let tmpDate = meal.date.split("/").map((d, i) => i < 2 && d.length < 2 ? `0${d}` : d).join("/");
        //fix format, from mm/dd/yyyy to dd/mm/yyyy
        meal.date = `${tmpDate.split("/")[1]}/${tmpDate.split("/")[0]}/${tmpDate.split("/")[2]}`
      }

      function addMealToSection(meal: Meal, date: string) {
        if (meal.date === today) {
          newParsedMeals.find((section) => section.title === "Hoje")?.data?.push(meal);
        } else if (meal.date === yesterday) {
          newParsedMeals.find((section) => section.title === "Ontem")?.data?.push(meal);
        } else if (meal.date === beforeYesterday) {
          newParsedMeals.find((section) => section.title === "Anteontem")?.data?.push(meal);
        } else {
          //search for the section with the date of the meal
          let section = newParsedMeals.find((section) => section.title === meal.date);
          if (!section) {
            //if not found, create a new section
            section = {
              title: meal.date,
              data: [
                meal,
              ],
            };
            newParsedMeals.push(section);
          } else {
            section.data.push(meal);
          }
        }
      }

      for (const meal of unorderedMeals) {
        addMealToSection(meal, meal.date);
      }

      setParsedMeals(newParsedMeals);
    }
  }, [meals.data]);

  return (
    <SectionList
      className="flex-1"
      sections={parsedMeals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (<MealCard meal={item} />)}
      renderSectionHeader={({ section }) => (<MealTitle title={section.title} />)}
      ItemSeparatorComponent={() => (
        <View className="h-2" />
      )}
      contentContainerStyle={{ paddingBottom: 100, paddingTop: 40 }}
      showsVerticalScrollIndicator={false}
    />
  );
}

function MealTitle(props: { title: string }) {
  if (props.title === "system") return (<></>);

  return (
    <View className="pt-8 pb-2">
      <Text className="text-lg font-bold text-base-gray-1 font-nunitoSans">
        {props.title}
      </Text>
    </View>
  );
}

const mealCard = tv({
  base: "w-4 h-4 rounded-full",
  variants: {
    partOfDiet: {
      true: "bg-base-green-mid",
      false: "bg-base-red-mid",
    }
  },
  defaultVariants: {
    partOfDiet: false,
  }
});

type MealCardProps = {
  meal: Meal;
}

function MealCard(props: MealCardProps) {
  const { meal } = props;
  if (meal.id === "0") return (<NewMeal />);

  return (
    <TouchableOpacity className="flex flex-row items-center justify-center w-full gap-3 py-4 pl-3 pr-4 border rounded-md border-base-gray-5">
      <Text className="text-xs font-bold font-nunitoSans text-base-gray-1">{meal.date}</Text>
      <View className="w-0.5 h-full bg-base-gray-4" />
      <Text className="flex-1 text-base text-base-gray-2 font-nunitoSans">{meal.name}</Text>
      <View className={mealCard({ partOfDiet: meal.partOfDiet })} />
    </TouchableOpacity>
  );
}

function NewMeal() {
  return (
    <View className="w-full gap-2 pb-8">
      <Text className="text-base font-nunitoSans">
        Refeições
      </Text>
      <Button
        label="Nova refeição"
        icon={Plus}
        iconWeight="regular"
      />
    </View>
  );
}