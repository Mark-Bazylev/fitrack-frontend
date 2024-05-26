import { Text, View } from "react-native-ui-lib";
import { Stack, useLocalSearchParams } from "expo-router";
import { workouts } from "@/assets/data/workouts";
import { FlashList } from "@shopify/flash-list";
import ExerciseListItem from "@/src/components/exercises/ExerciseListItem";
import ExercisesList from "@/src/components/exercises/ExercisesList";

export default function WorkoutDetailsScreen() {
  const { id } = useLocalSearchParams();
  const workout = workouts.find((item) => item.id.toString() === id);

  if (!workout) {
    return (
      <View>
        <Text>Not found</Text>
      </View>
    );
  }

  return (
    <View flex>
      <Stack.Screen options={{ title: `${workout.workoutName} Details` }} />
      <ExercisesList workout={workout} />
    </View>
  );
}
