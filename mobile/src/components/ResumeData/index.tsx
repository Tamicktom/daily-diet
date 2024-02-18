//* Libraries imports
import { Text, View, TouchableOpacity, } from "react-native";
import { ArrowUpRight } from "phosphor-react-native";
import { Link } from "expo-router";
import { tv, type VariantProps } from "tailwind-variants";

//* Local imports
import { theme } from "@/utils/theme";
import { dietPorcentage } from "@/utils/variables";

//* Hooks imports
import { useResume } from "@/hooks/queries/useResume";

const resumeClasses = tv({
  slots: {
    base: "relative flex flex-col items-center justify-center gap-1 px-4 py-5 rounded-lg bg-base-green-light",
    icon: "",
  },
  variants: {
    aboveDiet: {
      true: {
        base: "bg-base-green-light",
        icon: theme.extend.colors.base.green.dark,
      },
      false: {
        base: "bg-base-red-light",
        icon: theme.extend.colors.base.red.dark,
      },
    }
  },
  defaultVariants: {
    aboveDiet: true,
  }
});



export function ResumeData() {
  const resume = useResume();

  const porcentage = resume.data?.porcentage ?? 0;
  const isPorcentageAboveDiet = porcentage >= dietPorcentage;

  const { base, icon } = resumeClasses({ aboveDiet: isPorcentageAboveDiet });

  return (
    <Link href="/resume/" asChild>
      <TouchableOpacity
        className={base()}
      >
        <Text className="text-3xl font-bold font-nunitoSans">
          {porcentage}%
        </Text>
        <Text className="text-sm font-bold font-nunitoSans">
          das refeições dentro da dieta
        </Text>
        <View className="absolute flex items-center justify-center top-2 right-2">
          <ArrowUpRight size={24} color={icon()} />
        </View>
      </TouchableOpacity>
    </Link>
  );
}