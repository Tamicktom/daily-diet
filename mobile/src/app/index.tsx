//* Libraries imports
import { Link } from "expo-router";
import React from "react";
import { Text, View, Image, TouchableOpacity, SectionList, type SectionListData } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ArrowUpRight, Plus } from "phosphor-react-native";

//* Local imports
import { theme } from "@/utils/theme";
import { api } from "@/utils/api";
import Logo from "@/assets/Logo.svg";

//* Components imports
import { Button } from "@/components/Button";
import { Select } from "@/components/Select";
import { Input } from "@/components/Input";

const githubPhoto = "https://github.com/tamicktom.png";

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

export default function Page() {

  return (
    <SafeAreaView className="flex-1 p-6">
      <StatusBar style="dark" animated translucent />
      {/* Header */}
      <View className="flex flex-row justify-between w-full pb-8">
        <Logo />
        <View>
          <Image
            source={{ uri: githubPhoto }}
            className="w-10 h-10 border-2 rounded-full border-base-gray-2"
          />
        </View>
      </View>

      {/* Resume */}
      <View className="w-full">
        <TouchableOpacity className="relative flex flex-col items-center justify-center gap-1 px-4 py-5 rounded-lg bg-base-green-light">
          <Text className="text-3xl font-bold font-nunitoSans">
            90,86%
          </Text>
          <Text className="text-sm font-bold font-nunitoSans">
            das refeições dentro da dieta
          </Text>
          <View className="absolute flex items-center justify-center top-2 right-2">
            <ArrowUpRight size={24} color={theme.extend.colors.base.green.dark} />
          </View>
        </TouchableOpacity>
      </View>

      <View className="flex-1 w-full">
        <SectionList
          className="flex-1"
          sections={tmpData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            if (item.id === "0") return (
              <View className="w-full pb-8">
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

            return (
              <TouchableOpacity className="flex flex-row items-center justify-center w-full gap-1 py-4 pl-3 pr-4 border rounded-md border-base-gray-5">
                <Text className="text-xs font-bold font-nunitoSans text-base-gray-1">20:00</Text>
                <View className="w-0.5 h-full bg-base-gray-4" />
                <Text className="flex-1 text-base text-base-gray-2 font-nunitoSans">X-tudo</Text>
                <View
                  className="w-4 h-4 rounded-full bg-base-green-mid"
                />
              </TouchableOpacity>
            );
          }}
          renderSectionHeader={({ section }) => {
            if (section.title === "system") return (<></>);

            return (
              <View className="pt-8 pb-2">
                <Text className="text-lg font-bold text-base-gray-1 font-nunitoSans">
                  {section.title}
                </Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => (
            <View className="h-2" />
          )}
          contentContainerStyle={{ paddingBottom: 100, paddingTop: 40 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}