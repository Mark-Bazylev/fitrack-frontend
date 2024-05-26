import {Tabs} from "expo-router";
import {TabBarIcon} from "@/src/components/navigation/TabBarIcon";

export default function UserLayout() {
  return (
      <Tabs>
        <Tabs.Screen
            name="workouts"
            options={{
              title: "Workouts",
              headerShown: false,

              tabBarIcon: ({ color }) => (
                  <TabBarIcon name="barbell" color={color} />
              ),
            }}
        />
        <Tabs.Screen
            name="progress"
            options={{
              title: "Progress",
              headerShown: false,
              tabBarIcon: ({ color }) => (
                  <TabBarIcon name="analytics" color={color} />
              ),
            }}
        />
        <Tabs.Screen name="index" options={{ href: null }} />
      </Tabs>
  );
}
