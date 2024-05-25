export interface Workout {
  id:number
  workoutName: string;
  date: string;
  done: boolean;
  exercises: Exercise[];
}

export interface Exercise {
  id:number;
  name: string;
  sets: number;
  reps: number;
  restTime: number;
  weight: number;
}

