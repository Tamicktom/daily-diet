//* Libraries imports
import { useMutation } from "@tanstack/react-query";

//* Local imports
import { api } from "@/utils/api";
import type { NewMeal } from "@server/schemas/meal";

export type { NewMeal };

async function postMeal(data: NewMeal) {
  const response = await api.meal[""].post(data);
  return response.data;
}

export function useNewMeal() {
  return useMutation({
    mutationFn: postMeal,
  });
}
