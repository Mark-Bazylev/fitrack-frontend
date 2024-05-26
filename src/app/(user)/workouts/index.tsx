import { Redirect } from "expo-router";
import { View, Text } from "react-native-ui-lib";
import WorkoutsList from "@/src/components/workouts/WorkoutsList";

export default function WorkoutsScreen() {
  return (
    <View flex>
      <WorkoutsList/>
    </View>
  );
}
