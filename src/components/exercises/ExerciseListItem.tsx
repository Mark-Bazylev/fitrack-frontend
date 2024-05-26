import { Exercise, Workout } from "@/src/utils/types";
import { View, Text, ListItem, Colors } from "react-native-ui-lib";
import dayjs from "dayjs";
import { router } from "expo-router";
import { StyleSheet, TouchableHighlight } from "react-native";

interface WorkoutListItemProps {
  exercise: Exercise;
}

export default function ExerciseListItem({ exercise }: WorkoutListItemProps) {
  return (
      <View row backgroundColor={"white"} style={styles.container}>
        <Text text60>{exercise.name}</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.detailContainer}>
            <Text>Sets</Text>
            <View style={styles.numberContainer}>
              <Text color="white">{exercise.sets}</Text>
            </View>
          </View>

          <View style={styles.detailContainer}>
            <Text>Reps</Text>
            <View style={styles.numberContainer}>
              <Text color="white">{exercise.reps}</Text>
            </View>
          </View>

          <View style={styles.detailContainer}>
            <Text>Weight (kg)</Text>
            <View style={styles.numberContainer}>
              <Text color="white">{exercise.weight}</Text>
            </View>
          </View>

          <View style={styles.detailContainer}>
            <Text>Rest (sec)</Text>
            <View style={styles.numberContainer}>
              <Text color="white">{exercise.restTime}</Text>
            </View>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  numberContainer: {
    backgroundColor: Colors.blue50,
    width: 30,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
