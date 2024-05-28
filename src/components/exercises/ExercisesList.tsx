import { FlashList } from "@shopify/flash-list";

import ExerciseListItem from "@/src/components/exercises/ExerciseListItem";
import { Exercise, Workout } from "@/src/utils/types";
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";
import ExerciseHiddenListItem from "@/src/components/exercises/ExerciseHiddenListItem";
import {
  Button,
  Colors,
  Dialog,
  PanningProvider,
  Text,
  View,
} from "react-native-ui-lib";
import CreateExercise from "@/src/components/exercises/CreateExercise";
import { useEffect, useState } from "react";

interface ExercisesListProps {
  exercises: Exercise[];
}

export default function ExercisesList({ exercises }: ExercisesListProps) {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedKey, setSelectedKey] = useState("");
  function handleDeleteSwipe(key: string) {
    console.warn(key);
    setSelectedKey(key);
    setOpenDeleteDialog(true);
  }

  function handleSubmit() {}

  return (
    <>
      <SwipeListView
        data={exercises}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ExerciseListItem exercise={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
        renderHiddenItem={(data, rowMap) => <ExerciseHiddenListItem />}
        leftActivationValue={39}
        rightActivationValue={-39}
        stopLeftSwipe={40}
        stopRightSwipe={-40}
        onLeftActionStatusChange={({ key, isActivated }) =>
          !isActivated && console.warn("left")
        }
        onRightActionStatusChange={({ key, isActivated }) =>
          !isActivated && handleDeleteSwipe(key)
        }
      />
      <Dialog
        visible={openEditDialog}
        onDismiss={() => setOpenEditDialog(false)}
        panDirection={PanningProvider.Directions.DOWN}
      >
        <CreateExercise
          closeDialog={() => setOpenEditDialog(false)}
          onSubmit={handleSubmit}
        />
      </Dialog>
      <Dialog
        visible={openDeleteDialog}
        onDismiss={() => setOpenDeleteDialog(false)}
        panDirection={PanningProvider.Directions.DOWN}
      >
        <View
          padding-10
          gap-10
          backgroundColor="white"
          style={{ borderRadius: 20 }}
        >
          <Text text60>Are you sure you want to delete?</Text>

          <View row spread>
            <Button
              label={"Delete"}
              backgroundColor={Colors.red30}
              onPress={() => {
                console.warn(`${selectedKey} is deleted`);
                setOpenDeleteDialog(false);
              }}
            />
            <Button
              label={"Cancel"}
              onPress={() => setOpenDeleteDialog(false)}
            />
          </View>
        </View>
      </Dialog>
    </>
  );
}
