//* Libraries imports
import { Text, View, TouchableOpacity, } from "react-native";
import { ArrowUpRight } from "phosphor-react-native";

//* Local imports
import { theme } from "@/utils/theme";
import { dietPorcentage } from "@/utils/variables";

//* Hooks imports
import { useResume } from "@/hooks/queries/useResume";

export function Resume() {
  const resume = useResume();

  const porcentage = resume.data?.porcentage ?? 0;
  const isPorcentageAboveDiet = porcentage >= dietPorcentage;

  const colors = {
    icon: isPorcentageAboveDiet ? theme.extend.colors.base.green.dark : theme.extend.colors.base.red.dark,
    background: isPorcentageAboveDiet ? theme.extend.colors.base.green.light : theme.extend.colors.base.red.light,
  }

  return (
    <TouchableOpacity
      className="relative flex flex-col items-center justify-center gap-1 px-4 py-5 rounded-lg"
      style={{ backgroundColor: colors.background }}
    >
      <Text className="text-3xl font-bold font-nunitoSans">
        {porcentage}%
      </Text>
      <Text className="text-sm font-bold font-nunitoSans">
        das refeições dentro da dieta
      </Text>
      <View className="absolute flex items-center justify-center top-2 right-2">
        <ArrowUpRight size={24} color={colors.icon} />
      </View>
    </TouchableOpacity>
  );
}