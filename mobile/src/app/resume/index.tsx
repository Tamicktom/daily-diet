//* Libraries imports
import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

//* Local imports
import Logo from "@/assets/Logo.svg";

//* Components imports


const githubPhoto = "https://github.com/tamicktom.png";

export default function Page() {
  return (
    <SafeAreaView className="flex-1 p-6">
      <StatusBar style="dark" animated translucent />
      <View>
      </View>
    </SafeAreaView>
  );
}