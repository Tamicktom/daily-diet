//* Libraries imports
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {


  return (
    <View className="flex items-center justify-center flex-1">
      <Text className="text-2xl font-nunito">Hello World</Text>
    </View>
  );
}
