import React from 'react';
import Image from 'next/image';
import { WorkoutType } from '@/Types/type';
import Link from 'next/link';

interface WorkoutCardProps {
    workout: WorkoutType;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout }) => {

    return (

        <section>
            <div className="bg-[#121212] border border-zinc-800/80 rounded-xl overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition duration-200 w-full">
                <div className="relative w-full h-80 bg-zinc-900 shrink-0">

                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex flex-wrap gap-1.5 mb-2.5">

                            {workout.muscleGroups?.map((group, idx) => (
                                <span
                                    key={idx}
                                    className="bg-lime-400 text-black font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider leading-none">
                                    {group}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-base font-black text-white uppercase tracking-wider">
                            {workout.name}
                        </h3>

                        <p className="text-zinc-500 text-xs mt-1 font-medium">
                            {workout.equipment}
                        </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-zinc-400 text-xs font-semibold">

                        <span className="flex items-center gap-1">
                            ⏱️ {workout.duration} min
                        </span>

                        <span className="flex items-center gap-1">
                            🔥 {workout.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1 text-zinc-300">
                            ⭐ {workout.rating}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkoutCard;