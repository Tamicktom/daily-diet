//* Libraries imports
import { Stack } from "expo-router";
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//* Styles imports
import "../global.css";

const queryClient = new QueryClient();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </QueryClientProvider>
  );
}
