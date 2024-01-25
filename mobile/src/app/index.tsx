//* Libraries imports
import { Link } from "expo-router";
import React from "react";
import { Text, View, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* Local imports
import { api } from "@/utils/api";

export default function Page() {
  const teste = async () => {
    console.log("teste");
    const { data } = await api.api.melancia.get();
    console.log(data);
  }

  return (
    <View className="flex items-center justify-center flex-1">
      <Text className="text-2xl font-nunito">Hello World</Text>

      <Button title="Teste" onPress={teste} />
    </View>
  );
}
