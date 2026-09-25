import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WorkoutType } from '@/Types/type';

interface WorkoutDetailCardProps {
    workout: WorkoutType;
}

const WorkoutDetailCard: React.FC<WorkoutDetailCardProps> = ({ workout }) => {


    return (
        <div className="bg-[#121212] border border-zinc-800/80 rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            <div className="relative w-full aspect-square bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800/80">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>

            <div className="flex flex-col gap-6 text-left">

                <div>
                    <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wider mb-2">
                        {workout.name}
                    </h1>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                        {workout.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups.map((group, idx) => (
                            <span
                                key={idx}
                                className="bg-lime-400 text-black font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider"
                            >
                                {group}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="bg-[#18181c] border border-zinc-800/80 rounded-xl p-5 space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between items-center">
                        <span className="font-bold uppercase text-[11px] tracking-wider text-zinc-500">
                            Equipment
                        </span>
                        <span className="text-white font-semibold">{workout.equipment}</span>
                    </div>

                    <div className="flex justify-between items-center border-t border-zinc-800/60 pt-2.5">
                        <span className="font-bold uppercase text-[11px] tracking-wider text-zinc-500">
                            Difficulty
                        </span>
                        <span className="text-white font-semibold">
                            {workout.difficulty}
                        </span>
                    </div>

                    <div className="flex justify-between items-center border-t border-zinc-800/60 pt-2.5">
                        <span className="font-bold uppercase text-[11px] tracking-wider text-zinc-500">
                            Sets
                        </span>
                        <span className="text-white font-semibold">{workout.sets}</span>
                    </div>

                    <div className="flex justify-between items-center border-t border-zinc-800/60 pt-2.5">
                        <span className="font-bold uppercase text-[11px] tracking-wider text-zinc-500">
                            Reps
                        </span>
                        <span className="text-white font-semibold">{workout.reps}</span>
                    </div>

                    <div className="flex justify-between items-center border-t border-zinc-800/60 pt-2.5">
                        <span className="font-bold uppercase text-[11px] tracking-wider text-zinc-500">
                            Duration
                        </span>
                        <span className="text-white font-semibold">{workout.duration} min</span>
                    </div>

                    <div className="flex justify-between items-center border-t border-zinc-800/60 pt-2.5">
                        <span className="font-bold uppercase text-[11px] tracking-wider text-zinc-500">
                            Calories
                        </span>
                        <span className="text-white font-semibold">
                            {workout.caloriesBurned} kcal
                        </span>
                    </div>

                    <div className="flex justify-between items-center border-t border-zinc-800/60 pt-2.5">
                        <span className="font-bold uppercase text-[11px] tracking-wider text-zinc-500">
                            Rating
                        </span>
                        <span className="text-white font-semibold">⭐ {workout.rating}</span>
                    </div>
                </div>

                <div>
                    <h2 className="text-xs font-black text-white uppercase tracking-widest mb-3">
                        Instructions
                    </h2>
                    <ol className="space-y-2 text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        {workout.instructions?.map((step, idx) => (
                            <li key={idx} className="flex gap-2">
                                <span className="font-bold text-zinc-300">{idx + 1}.</span>
                                <span>{step}</span>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Link
                        href="/workouts?tab=plan"
                        className="flex-1 bg-lime-400 hover:bg-lime-300 text-black font-black uppercase text-center py-3 px-5 rounded-lg text-xs sm:text-sm tracking-wider transition flex items-center justify-center"
                    >
                         Add to today&apos;s plan
                    </Link>
                    <Link
                        href="/workouts?tab=saved"
                        className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white font-bold uppercase text-center py-3 px-5 rounded-lg text-xs sm:text-sm tracking-wider border border-zinc-700/80 transition flex items-center justify-center gap-1.5"
                    >
                         Save for later
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default WorkoutDetailCard;