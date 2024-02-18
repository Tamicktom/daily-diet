//* Libraries imports
import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

//* Local imports
import Logo from "@/assets/Logo.svg";

//* Components imports
import { MealList } from "./_components/SectionList";
import { ResumeData } from "@/components/ResumeData";

const githubPhoto = "https://github.com/tamicktom.png";

export default function Page() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="dark" animated translucent />
      {/* Header */}
      <View className="flex flex-row items-center justify-between w-full px-6 py-8">
        <Logo />
        <View>
          <Image
            source={{ uri: githubPhoto }}
            className="w-10 h-10 border-2 rounded-full border-base-gray-2"
          />
        </View>
      </View>

      {/* Resume */}
      <View className="w-full px-6">
        <ResumeData />
      </View>

      <View className="w-full">
        <MealList />
      </View>
    </SafeAreaView>
  );
}