import React from 'react';
import { WorkoutType } from '@/Types/type';
import WorkoutCard from './WorkoutCard';

async function getWorkouts(): Promise<WorkoutType[]> {
  try {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error('Failed to fetch workouts');
    return res.json();
  } catch (error) {
    console.error('Error fetching workouts:', error);
    return [];
  }
}

const WorkoutSection = async () => {
  const workouts = await getWorkouts();

  return (
    <section className="py-8 max-w-1232 mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="mb-6">
        <h2 className="text-2xl font-black text-white uppercase tracking-wider">
          THE LIBRARY
        </h2>
        <p className="text-zinc-500 text-sm mt-0.5">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutSection;