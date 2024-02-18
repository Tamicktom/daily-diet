//* Libraries imports
import { useState } from "react";
import { TextInput, Text, View, type TextInputProps, type TextInputFocusEventData, type NativeSyntheticEvent } from "react-native";
import { tv, type VariantProps } from "tailwind-variants";

const inputBase = tv({
  slots: {
    input: [
      "w-full",
      "p-4",
      "border",
      "rounded-md",
      "text-base",
      "font-nunitoSans",
    ],
  },
});

const input = tv({
  extend: inputBase,
  variants: {
    active: {
      true: {
        input: ["border-base-gray-3"],
      },
      false: {
        input: ["border-base-gray-5"],
      },
    }
  },
});

type InputVariants = VariantProps<typeof input>;

interface Props extends TextInputProps {
  //all variants, except filled and active... :3 i swear that this is for a good reason
  variant?: Omit<InputVariants, "active">;
  label?: string;
};

export function Input({ variant, label, onFocus, onBlur, ...rest }: Props) {
  const [active, setActive] = useState(false);

  function handleOnFocus(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    onFocus && onFocus(event);
    setActive(() => true);
  }

  function handleOnBlur(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    onBlur && onBlur(event);
    setActive(() => false);
  }

  const classNames = input({ active, ...variant });

  return (
    <View className="flex flex-col items-start justify-center w-full gap-1">
      {
        label &&
        <Text className="text-base font-bold font-nunitoSans">
          {label}
        </Text>
      }
      <TextInput
        className={classNames.input()}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...rest}
      />
    </View>
  );
}