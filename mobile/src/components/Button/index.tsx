//* Libraires imports
import { useState } from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { tv, type VariantProps } from "tailwind-variants";
import type { Icon } from "phosphor-react-native";
import tailwindColors from "tailwindcss/colors";

//* Theme import
import { theme } from "@/utils/theme";

const button = tv({
  base: "py-4 px-6 rounded-md flex flex-row items-center justify-center gap-3 border",
  variants: {
    type: {
      default: {
        label: "text-white font-nunitoSans",
        base: "bg-base-gray-2 border-transparent",
      },
      outline: {
        label: "text-black font-nunitoSans",
        base: "border-black",
      },
    }
  },
  defaultVariants: {
    type: "default",
  },
  slots: {
    label: "text-base font-nunitoSans font-bold",
  }
});

type ButtonVariants = VariantProps<typeof button>;

interface Props extends TouchableOpacityProps, ButtonVariants {
  label: string;
  icon?: Icon;
}

export function Button({ label, icon: Icon, type, ...rest }: Props) {
  const [isPressed, setIsPressed] = useState(false);

  const classNames = button({ type });

  const isOutline = type === "outline";

  const colors = {
    backgroundColor:
      isOutline
        ? isPressed
          ? theme.extend.colors.base.gray[5]
          : "transparent"
        : isPressed
          ? theme.extend.colors.base.gray[1]
          : theme.extend.colors.base.gray[2],
    color: isOutline ? theme.extend.colors.base.gray[1] : tailwindColors.white,
  }

  const handlePress = (pressed: boolean) => {
    if (pressed)
      setIsPressed(() => true);
    else
      setIsPressed(() => false);
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      className={classNames.base()}
      style={{
        backgroundColor: colors.backgroundColor,
      }}
      onPressIn={() => handlePress(true)}
      onPressOut={() => handlePress(false)}
      {...rest}
    >
      {Icon && <Icon size={18} color={colors.color} weight="fill" />}
      <Text className={classNames.label()}>{label}</Text>
    </TouchableOpacity>
  );
}