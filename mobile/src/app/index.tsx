//* Libraries imports
import React from "react";
import { Text, View, Image, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ArrowUpRight, Plus } from "phosphor-react-native";

//* Local imports
import { theme } from "@/utils/theme";
import { api } from "@/utils/api";
import Logo from "@/assets/Logo.svg";

//* Components imports
import { MealList } from "./_components/SectionList";

const githubPhoto = "https://github.com/tamicktom.png";

type Meal = {
  id: string;
  name: string;
  date: string;
  partOfDiet: boolean;
}

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
        <MealList />
      </View>
    </SafeAreaView>
  );
}