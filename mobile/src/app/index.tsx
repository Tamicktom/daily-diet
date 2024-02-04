//* Libraries imports
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Trash, PencilSimpleLine } from "phosphor-react-native";
import { useAtom } from "jotai";

//* Local imports
import { api } from "@/utils/api";
import { mealsAtom } from "@/atoms/mealsAtom";

//* Components imports
import { Button } from "@/components/Button";
import { Select } from "@/components/Select";

export default function Page() {

  return (
    <View className="flex items-center justify-center flex-1">
      <Text className="text-2xl font-nunito">Hello World</Text>

      <Button
        label="Hello"
        type="outline"
      />

      <Button
        label="Hello"
        type="default"
      />

      <Select
        label="Positive"
        variant={{
          type: "positive",
          
        }}
      />
      <Select
        label="Negative"
        variant={{
          type: "negative",
        }}
      />
    </View>
  );
}