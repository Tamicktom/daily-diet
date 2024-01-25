//* Libraries imports
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Trash, PencilSimpleLine } from "phosphor-react-native";

//* Local imports
import { api } from "@/utils/api";

//* Components imports
import { Button } from "@/components/Button";

export default function Page() {
  const teste = async () => {
    console.log("teste");
    const { data } = await api.api.melancia.get();
    console.log(data);
  }

  return (
    <View className="flex items-center justify-center flex-1">
      <Text className="text-2xl font-nunito">Hello World</Text>

      <Button
        label="Teste"
        onPress={teste}
        icon={Trash}
      />

      <Button
        label="Teste"
        onPress={teste}
        icon={PencilSimpleLine}
        type="outline"
      />
    </View>
  );
}