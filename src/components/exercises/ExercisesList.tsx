import { FlashList } from "@shopify/flash-list";

import ExerciseListItem from "@/src/components/exercises/ExerciseListItem";
import { Workout } from "@/src/utils/types";
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";
import { View, Text, Colors } from "react-native-ui-lib";
import ExerciseHiddenListItem from "@/src/components/exercises/ExerciseHiddenListItem";

interface ExercisesListProps {
  workout: Workout;
}

export default function ExercisesList({ workout }: ExercisesListProps) {
  return (
    <SwipeListView
      data={workout.exercises}
      renderItem={({ item }) => <ExerciseListItem exercise={item} />}
      contentContainerStyle={{ padding: 10, gap: 10 }}
      renderHiddenItem={(data, rowMap) => <ExerciseHiddenListItem />}
      leftActivationValue={39}
      rightActivationValue={-39}
      stopLeftSwipe={40}
      stopRightSwipe={-40}
      onLeftActionStatusChange={({ isActivated }) =>
        !isActivated && console.warn("left")
      }
      onRightActionStatusChange={({ isActivated }) =>
        !isActivated && console.warn("right")
      }
    ></SwipeListView>
  );
}
