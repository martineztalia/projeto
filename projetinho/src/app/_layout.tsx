import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#2563eb"},
        headerTintColor: "#ffff",
        headerTitleStyle: { fontWeight: "700" },
      }}
    >
      <Stack.Screen name="index" options={{title: 'Home'}}/>
      <Stack.Screen name="detalhes" options={{title: 'Detalhes'}}/>
    </Stack>
  );
}
