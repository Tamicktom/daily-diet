//* Libraries imports
import { useQuery } from "@tanstack/react-query";

//* Local imports
import { api } from "@/utils/api";
import type { Meal } from "@server/schemas/meal";

export type { Meal };

async function getMeals() {
  const response = await api.meals[""].get();
  return response.data;
}

export function useMeals() {
  return useQuery({
    queryKey: ["meals"],
    queryFn: getMeals,
    refetchInterval: 1000 * 5,
  });
}
