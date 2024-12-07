//* Libraries imports
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import z from "zod";

//* Components imports
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

//* Hooks imports
import { useNewMeal } from "@/hooks/mutations/meals/use-new-meal";


const newMealSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  date: z.string().min(1),
  hour: z.string().min(1),
  partOfDiet: z.boolean(),
});

export function NewMealForm() {
  const router = useRouter();
  const newMeal = useNewMeal();

  const form = useForm<z.infer<typeof newMealSchema>>({
    resolver: zodResolver(newMealSchema),
    defaultValues: {
      name: "",
      description: "",
      date: "",
      hour: "",
      partOfDiet: false,
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);

    newMeal.mutate(data, {
      onSuccess: () => {
        console.log("success");
        router.replace("/");
      },
      onError: () => {
        console.log("error");
      },
    });
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
              <Text>{form.formState.errors.name?.message}</Text>
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
              <Text>{form.formState.errors.description?.message}</Text>
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
                <Text>{form.formState.errors.date?.message}</Text>
              </View>
            );
          }}
        />

        <Controller
          control={form.control}
          name="hour"
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
                <Text>{form.formState.errors.hour?.message}</Text>
              </View>
            );
          }}
        />
      </View>

      <Text>Está dentro da dieta?</Text>

      <Text>{form.formState.errors.partOfDiet?.message}</Text>

      <Button
        label="Cadastrar refeição"
        onPress={handleSubmit}
      />

      <Text>
        {
          JSON.stringify(form.formState.errors, null, 2)
        }
      </Text>
    </View>
  );
}