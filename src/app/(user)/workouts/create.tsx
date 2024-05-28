import {
  Button,
  Colors,
  DateTimePicker,
  Dialog,
  PanningProvider,
  Text,
  TextField,
  View,
} from "react-native-ui-lib";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import dayjs from "dayjs";
import { FlashList } from "@shopify/flash-list";
import { Exercise } from "@/src/utils/types";
import CreateExercise from "@/src/components/exercises/CreateExercise";
import ExerciseListItem from "@/src/components/exercises/ExerciseListItem";
import ExercisesList from "@/src/components/exercises/ExercisesList";
import { MaterialIcons } from "@expo/vector-icons";

export default function createWorkoutScreen() {
  const [workoutName, setWorkoutName] = useState("");
  const [exercises, setExercises] = useState<Exercise[]>([
    { sets: 2, weight: 2, restTime: 2, reps: 2, name: "yo", id: 1 },
  ]);
  const [openDialog, setOpenDialog] = useState(false);

  const [date, setDate] = useState(new Date());

  function handleSubmit(exercise: Exercise) {
    setExercises([...exercises, exercise]);
  }

  return (
    <View flex backgroundColor={"white"}>
      <View padding-10>
        <Stack.Screen options={{ title: "Create Workout" }} />
        <TextField
          value={workoutName}
          onChangeText={setWorkoutName}
          text60
          enableErrors
          showCharCounter
          label={"Workout Name:"}
          placeholderTextColor={"grey"}
          fieldStyle={styles.input}
          labelStyle={styles.label}
          validateOnBlur
          validate={["required"]}
          underlineColorAndroid={"black"}
          validationMessage={["Workout name is required"]}
          validationMessageStyle={{ color: Colors.red30, fontSize: 16 }}

          maxLength={30}
        />
        <View width={"100%"} row style={{ display: "flex" }}>
          <View flex-1>
            <DateTimePicker
              style={{ width: "100%" }}
              value={date}
              onChange={(date) => setDate(date)}
              label={"Select date"}
              mode={"date"}
              labelStyle={styles.label}
              fieldStyle={styles.input}
            />
          </View>
          <View flex-1>
            <DateTimePicker
              style={{ width: "100%" }}
              value={date}
              onChange={(date) => setDate(date)}
              label={"Select time"}
              mode={"time"}
              labelStyle={styles.label}
              fieldStyle={styles.input}
            />
          </View>
        </View>

        <View paddingT-10 row style={{ justifyContent: "space-between" }}>
          <View>
            <Text text60>Exercises:</Text>
            <Text text70>{"<- Swipe To Edit/Remove ->"}</Text>
          </View>

          <View center paddingH-20>
            <Button
              round
              size={Button.sizes.large}
              onPress={() => setOpenDialog(true)}
            >
              <MaterialIcons name="add" size={16} color="white" />
            </Button>
          </View>
        </View>
      </View>
      <SafeAreaView style={{ height: 330 }}>
        <ExercisesList exercises={exercises} />
      </SafeAreaView>

      <Dialog
        visible={openDialog}
        onDismiss={() => setOpenDialog(false)}
        panDirection={PanningProvider.Directions.DOWN}
      >
        <CreateExercise
          closeDialog={() => setOpenDialog(false)}
          onSubmit={handleSubmit}
        />
      </Dialog>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "500",
    fontSize: 18,
    // width: 150,
  },
  input: {
    marginVertical: 10,
    borderWidth: 1,
    borderBottomColor: Colors.black,
    padding: 5,
    width: "100%",
    display: "flex",
  },
  dateTimePicker: {
    display: "flex",
  },
});
