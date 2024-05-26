import { FlashList } from "@shopify/flash-list";
import { workouts } from "@/assets/data/workouts";
import WorkoutListItem from "@/src/components/workouts/WorkoutListItem";

export default function WorkoutsList() {
  return (
    <FlashList
      data={workouts}
      renderItem={({ item }) => <WorkoutListItem workout={item} />}
      estimatedItemSize={200}
      contentContainerStyle={{padding:10}}

    />
  );
}
