//* Libraries imports
import React from "react";
import { Text, View, TouchableOpacity, SectionList, type SectionListData } from "react-native";
import { Plus } from "phosphor-react-native";
import { tv, type VariantProps } from "tailwind-variants";

//* Components imports
import { Button } from "@/components/Button";

type Meal = {
  id: string;
  name: string;
  date: string;
  partOfDiet: boolean;
}

const tmpData: SectionListData<Meal>[] = [
  {
    title: "system",
    data: [
      {
        id: "0",
        name: "",
        date: "",
        partOfDiet: false,
      }
    ]
  },
  {
    title: "Hoje",
    data: [{
      id: "1",
      name: "Café da manhã",
      date: "08:00",
      partOfDiet: true,
    }, {
      id: "2",
      name: "Almoço",
      date: "12:00",
      partOfDiet: true,
    }, {
      id: "3",
      name: "Jantar",
      date: "19:00",
      partOfDiet: false,
    }]
  },
  {
    title: "Ontem",
    data: [{
      id: "4",
      name: "Café da manhã",
      date: "08:00",
      partOfDiet: true,
    }, {
      id: "5",
      name: "Almoço",
      date: "12:00",
      partOfDiet: true,
    }, {
      id: "6",
      name: "Jantar",
      date: "19:00",
      partOfDiet: false,
    }]
  },
  {
    title: "Anteontem",
    data: [{
      id: "7",
      name: "Café da manhã",
      date: "08:00",
      partOfDiet: true,
    }, {
      id: "8",
      name: "Almoço",
      date: "12:00",
      partOfDiet: true,
    }, {
      id: "9",
      name: "Jantar",
      date: "19:00",
      partOfDiet: false,
    }]
  }
];

export function MealList() {
  return (
    <SectionList
      className="flex-1"
      sections={tmpData}
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