//* Libraries imports
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

//* Components imports
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

//* Hooks imports




const newMealSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  partOfDiet: z.boolean(),
});

export function NewMealForm() {
  const form = useForm({
    resolver: zodResolver(newMealSchema),
    defaultValues: {
      name: "",
      description: "",
      date: "",
      time: "",
      partOfDiet: false,
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <View className="items-center justify-center flex-1 w-full gap-6 px-6">
      <Controller
        control={form.control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <View className="flex flex-col w-full gap-1">
              <Input
                label="Nome"
                placeholder="Nome da refeição"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          );
        }}
      />

      <Controller
        control={form.control}
        name="description"
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <View className="flex flex-col w-full gap-1">
              <Input
                label="Descrição"
                placeholder="Descrição da refeição"
                multiline
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          );
        }}
      />

      <View className="flex flex-row w-full gap-5">
        <Controller
          control={form.control}
          name="date"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <View className="flex flex-col flex-1 gap-1">
                <Input
                  label="Data"
                  placeholder="Data da refeição"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                />
              </View>
            );
          }}
        />

        <Controller
          control={form.control}
          name="time"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <View className="flex flex-col flex-1 gap-1">
                <Input
                  label="Hora"
                  placeholder="Hora da refeição"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                />
              </View>
            );
          }}
        />
      </View>

      <Text>Está dentro da dieta?</Text>

      <Button
        label="Cadastrar refeição"
        onPress={handleSubmit}
      />
    </View>
  );
}