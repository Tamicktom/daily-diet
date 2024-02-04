//* Libraries imports
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Trash, PencilSimpleLine } from "phosphor-react-native";
import { useAtom } from "jotai";

//* Local imports
import { api } from "@/utils/api";
import Logo from "@/assets/Logo.svg";

//* Components imports
import { Button } from "@/components/Button";
import { Select } from "@/components/Select";
import { Input } from "@/components/Input";

export default function Page() {

  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}