'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WorkoutType } from '@/Types/type';
import { toast } from 'react-toastify';

interface SecondaryCardProps {
    workout: WorkoutType;
    type: 'plan' | 'saved';
    onRemove: (id: string | number) => void;
}

const SecondaryCard: React.FC<SecondaryCardProps> = ({ workout, type, onRemove }) => {
    return (
        <div className="bg-[#121212] border border-zinc-800 rounded-xl p-4 flex items-center justify-between gap-4">
            {/* Image & Info */}
            <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 bg-zinc-900 rounded-lg overflow-hidden shrink-0">
                    <Image src={workout.image} alt={workout.name} fill className="object-cover" />
                </div>
                <div>
                    <h3 className="font-black text-white text-sm uppercase">{workout.name}</h3>
                    <p className="text-zinc-500 text-xs">{workout.equipment}</p>
                    <div className="flex items-center gap-3 text-xs text-zinc-400 mt-1">
                        <span>⏱️ {workout.duration} min</span>
                        <span>🔥 {workout.caloriesBurned} kcal</span>
                        <span>⭐ {workout.rating}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Link
                    href={`/Workouts/${workout.id}`}
                    className="text-xs text-zinc-400 hover:text-white font-semibold px-3 py-1.5 rounded border border-zinc-800"
                >
                    View Details
                </Link>
                {type === 'plan' ? (
                    <button
                        onClick={() => {
                            onRemove(workout.id);
                            toast.success(`Completed ${workout.name}!`);
                        }}
                        className="bg-lime-400 text-black text-xs font-black px-4 py-1.5 rounded uppercase"
                    >
                        ✓ Mark as Done
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            onRemove(workout.id);
                            toast.info(`Removed ${workout.name} from saved.`);
                        }}
                        className="text-zinc-400 hover:text-red-400 text-xs px-2 py-1.5 font-bold"
                    >
                        ✕ Remove
                    </button>
                )}
            </div>
        </div>
    );
};

export default SecondaryCard;