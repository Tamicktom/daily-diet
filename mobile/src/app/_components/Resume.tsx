//* Libraries imports
import { Text, View, TouchableOpacity, } from "react-native";
import { ArrowUpRight } from "phosphor-react-native";

//* Local imports
import { theme } from "@/utils/theme";

//* Hooks imports
import { useResume } from "@/hooks/queries/useResume";

export function Resume() {
  const resume = useResume();

  const porcentage = resume.data?.porcentage ?? 0;

  return (
    <TouchableOpacity className="relative flex flex-col items-center justify-center gap-1 px-4 py-5 rounded-lg bg-base-green-light">
      <Text className="text-3xl font-bold font-nunitoSans">
        {porcentage}%
      </Text>
      <Text className="text-sm font-bold font-nunitoSans">
        das refeições dentro da dieta
      </Text>
      <View className="absolute flex items-center justify-center top-2 right-2">
        <ArrowUpRight size={24} color={theme.extend.colors.base.green.dark} />
      </View>
    </TouchableOpacity>
  );
}