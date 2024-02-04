//* Libraries imports
import { useQuery } from "@tanstack/react-query";

//* Local imports
import { api } from "@/utils/api";

async function getResume() {
  const response = await api.resume[""].get();
  return response.data;
}

export function useResume() {
  return useQuery({
    queryKey: ["meals"],
    queryFn: getResume,
    refetchInterval: 1000 * 5,
  });
}
