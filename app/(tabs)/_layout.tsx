import CONSTANTS from "@/constants/CONSTANTS";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: CONSTANTS.COLORS.primary.primary11,
        tabBarInactiveTintColor: "#6b7280",
        tabBarActiveBackgroundColor: CONSTANTS.COLORS.primary.primary2,
        tabBarStyle: { backgroundColor: "white", borderTopColor: "#e5e7eb", borderTopWidth: 1 },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "500" },
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="PlayScreen"        // matches app/(tabs)/HomeScreen.tsx
        options={{
          title: "Play",
          tabBarIcon: ({ color, size }) => <Ionicons name="play" size={size} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"     // match filename
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="RankScreen"        // match filename
        options={{
          title: "Rank",
          tabBarIcon: ({ color, size }) => <Ionicons name="trophy-outline" size={size} color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}