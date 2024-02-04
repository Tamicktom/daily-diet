//* Libraries imports
import { useState, useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { tv, type VariantProps } from "tailwind-variants";
import tailwindColors from "tailwindcss/colors";

const selectBase = tv({
  slots: {
    pressable: [
      "py-4",
      "px-4",
      "rounded-md",
      "flex",
      "flex-row",
      "items-center",
      "justify-center",
      "border",
      "gap-2",
    ],
    ball: ["w-4", "h-4", "rounded-full"],
    label: ["text-sm", "font-nunito-bold"],
  },
});

const select = tv({
  extend: selectBase,
  variants: {
    type: {
      positive: {
        pressable: ["border-base-green-dark", "bg-base-green-light"],
        ball: ["bg-base-green-dark"],
      },
      negative: {
        pressable: ["border-base-red-dark", "bg-base-red-light"],
        ball: ["bg-base-red-dark"],
      },
    },
    selected: {
      true: {
        pressable: [""],
      },
      false: {
        pressable: ["border-transparent"],
      },
    },
  }
})

type SelectVariants = VariantProps<typeof select>;

interface Props {
  label: string;
  //all variants, except selected
  variant: Omit<SelectVariants, "selected">;
}

export function Select(props: Props) {
  const [selected, setSelected] = useState(true);

  const variants = {
    ...props.variant,
    selected,
  }

  //@ts-expect-error - I don't know how to fix this, problably a bug in tailwind-variants tiping
  const classNames = select({ ...variants });

  return (
    <Pressable
      className={classNames.pressable()}
    >
      <View className={classNames.ball()} />
      <Text className={classNames.label()}>{props.label}</Text>
    </Pressable>
  );
}