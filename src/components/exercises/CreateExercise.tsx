import { Button, Colors, Text, TextField, View } from "react-native-ui-lib";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { Exercise } from "@/src/utils/types";

interface CreateExerciseProps {
  onSubmit: (exercise: Exercise) => void;
  closeDialog: () => void;
}
export default function CreateExercise({
  onSubmit,
  closeDialog,
}: CreateExerciseProps) {
  const [exerciseName, setExerciseName] = useState("");
  const [validExerciseName, setValidExerciseName] = useState(false);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [restTime, setRestTime] = useState(0);

  function handlePress() {
    onSubmit({
      name: exerciseName,
      sets,
      reps,
      weight,
      restTime,
      id: Math.random() * 1000,
    });
    closeDialog();
  }
  return (
    <View
      padding-10
      center
      gap-10
      backgroundColor={"white"}
      style={{ borderRadius: 10 }}
    >
      <Text text50>New Exercise</Text>
      <View center width={"80%"}>
        <TextField
          value={exerciseName}
          onChangeText={setExerciseName}
          text60
          enableErrors
          showCharCounter
          placeholder={"Exercise Name"}
          floatingPlaceholder
          floatOnFocus
          placeholderTextColor={"grey"}
          fieldStyle={{ borderBottomWidth: 1 }}
          labelStyle={styles.label}
          containerStyle={styles.inputContainer}
          validateOnBlur
          validate={["required"]}
          underlineColorAndroid={"black"}
          validationMessage={["Workout name is required"]}
          validationMessageStyle={{ color: Colors.red30, fontSize: 16 }}
          onChangeValidity={(isValid) => setValidExerciseName(isValid)}
          maxLength={30}
        />
      </View>

      <View row spread>
        <View flex-1>
          <TextField
            centered
            value={sets.toString()}
            onChangeText={(text) => setSets(Number(text))}
            text60
            keyboardType={"numeric"}
            label={"Sets:"}
            placeholderTextColor={"grey"}
            fieldStyle={styles.input}
            labelStyle={styles.label}
            containerStyle={styles.inputContainer}
            maxLength={2}
          />
        </View>
        <View flex-1>
          <TextField
            centered
            value={reps.toString()}
            onChangeText={(text) => setReps(Number(text))}
            text60
            keyboardType={"numeric"}
            label={"Reps:"}
            placeholderTextColor={"grey"}
            fieldStyle={styles.input}
            labelStyle={styles.label}
            containerStyle={styles.inputContainer}
            maxLength={2}
          />
        </View>
      </View>
      <View row spread>
        <View flex-1>
          <TextField
            centered
            value={weight.toString()}
            onChangeText={(text) => setWeight(Number(text))}
            text60
            keyboardType={"numeric"}
            label={"Weight (kg):"}
            placeholderTextColor={"grey"}
            fieldStyle={styles.input}
            labelStyle={styles.label}
            containerStyle={styles.inputContainer}
            maxLength={3}
          />
        </View>
        <View flex-1>
          <TextField
            centered
            value={restTime.toString()}
            onChangeText={(text) => setRestTime(Number(text))}
            text60
            keyboardType={"numeric"}
            label={"Rest (sec):"}
            placeholderTextColor={"grey"}
            fieldStyle={styles.input}
            labelStyle={styles.label}
            containerStyle={styles.inputContainer}
            maxLength={3}
          />
        </View>
      </View>
      <Button
        disabled={!validExerciseName}
        style={{ width: "100%" }}
        label={"Add"}
        onPress={() => handlePress()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: Colors.blue50,
    borderRadius: 20,
    width: 50,
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  label: {
    fontSize: 18,
  },
});
