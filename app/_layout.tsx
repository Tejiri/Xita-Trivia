import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';



export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/SetupGame" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Questions" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Results" options={{ headerShown: false }} />

    </Stack>

  );
}
