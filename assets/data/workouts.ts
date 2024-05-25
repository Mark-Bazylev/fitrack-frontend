import {Workout} from "@/src/utils/types";

export const workouts :Workout[] = [
  {
    id: 1,
    workoutName: "Push Day",
    date: "2024-05-20T08:00:00",
    done: false,
    exercises: [
      {
        id: 1,
        name: "Bench Press",
        sets: 4,
        reps: 10,
        restTime: 90,
        weight: 40,
      },
      {
        id: 2,

        name: "Overhead Shoulder Press",
        sets: 3,
        reps: 10,
        restTime: 60,
        weight: 20,
      },
      {
        id: 3,

        name: "Incline Dumbbell Press",
        sets: 3,
        reps: 12,
        restTime: 60,
        weight: 15,
      },
      {
        id: 4,

        name: "Tricep Dips",
        sets: 3,
        reps: 12,
        restTime: 60,
        weight: 0,
      },
    ],
  },
  {
    id: 2,

    workoutName: "Pull Day",
    date: "2024-05-21T08:00:00",
    done: false,
    exercises: [
      {
        id: 1,
        name: "Deadlift",
        sets: 3,
        reps: 8,
        restTime: 120,
        weight: 60,
      },
      {
        id: 2,

        name: "Pull-up",
        sets: 3,
        reps: 10,
        restTime: 60,
        weight: 0,
      },
      {
        id: 3,

        name: "Dumbbell Row",
        sets: 3,
        reps: 12,
        restTime: 60,
        weight: 15,
      },
      {
        id: 4,

        name: "Bicep Curl",
        sets: 3,
        reps: 15,
        restTime: 45,
        weight: 10,
      },
    ],
  },
  {
    id: 3,
    workoutName: "Legs Day",
    date: "2024-05-22T08:00:00",
    done: false,
    exercises: [
      {
        id: 1,

        name: "Squat",
        sets: 4,
        reps: 12,
        restTime: 90,
        weight: 50,
      },
      {
        id: 2,

        name: "Leg Press",
        sets: 3,
        reps: 10,
        restTime: 60,
        weight: 80,
      },
      {
        id: 3,

        name: "Lunges",
        sets: 3,
        reps: 12,
        restTime: 60,
        weight: 0,
      },
      {
        id: 4,
        name: "Calf Raises",
        sets: 3,
        reps: 15,
        restTime: 45,
        weight: 0,
      },
    ],
  },
];
