import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { StoreProvider } from '@/stores/StoreProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (

    <StoreProvider>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaProvider>
    </StoreProvider>


  );
}
