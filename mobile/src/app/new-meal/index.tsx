//* Libraries imports
import { View, Text } from "react-native";

//* Components imports
import { NewMealForm } from "./_components";

export default function NewMealPage() {
  return (
    <View className="items-center justify-center flex-1">
      <Text>New Meal</Text>
      <NewMealForm />
    </View>
  );
}