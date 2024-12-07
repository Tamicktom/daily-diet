//* Libraries imports
import { useQuery } from "@tanstack/react-query";

//* Local imports
import { api } from "@/utils/api";
import { QUERY_KEYS } from "@/utils/query-keys";

async function getResume() {
  const response = await api.resume[""].get();
  return response.data;
}

export function useResume() {
  return useQuery({
    queryKey: [QUERY_KEYS.MEALS.ALL],
    queryFn: getResume,
    refetchInterval: 1000 * 5, //every 5 seconds
  });
}
