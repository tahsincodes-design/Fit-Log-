export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface WorkoutType {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: DifficultyLevel;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}