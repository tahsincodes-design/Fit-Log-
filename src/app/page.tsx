import HeroBanner from "@/Components/HomePage/HeroBanner";
import WorkoutPage from "@/Components/HomePage/WorkoutSection";
import WorkoutSkeleton from "@/Components/HomePage/WorkoutSkeleton";
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
        <HeroBanner/>
        <Suspense fallback={<WorkoutSkeleton />}>
        <WorkoutPage/>
      </Suspense> 
    </div>
  );
}
