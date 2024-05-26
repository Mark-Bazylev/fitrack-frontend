import { Workout } from "@/src/utils/types";
import { View, Text, ListItem } from "react-native-ui-lib";
import dayjs from "dayjs";
import { router } from "expo-router";

interface WorkoutListItemProps {
  workout: Workout;
}
export default function WorkoutListItem({ workout }: WorkoutListItemProps) {
  const workoutDay = dayjs(workout.date).format("ddd D/M");
  const workoutHour = dayjs(workout.date).format("hh:mm");

  return (
    <ListItem
      margin-5
      row
      padding-10
      backgroundColor={"white"}
      style={{
        justifyContent: "space-between",
        width: "100%",
        borderRadius: 10,
      }}
      onPress={() => router.push(`/(user)/workouts/${workout.id}`)}
    >
      <ListItem.Part left>
        <Text text50>{workout.workoutName}</Text>
      </ListItem.Part>
      <ListItem.Part
        middle
        containerStyle={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text text70>Exercises</Text>
        <Text text60>{workout.exercises.length.toString()}</Text>
      </ListItem.Part>
      <ListItem.Part
        right
        containerStyle={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text text70>{workoutDay}</Text>
        <Text text60>{workoutHour}</Text>
      </ListItem.Part>
    </ListItem>
  );
}
