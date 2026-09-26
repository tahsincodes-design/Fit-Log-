'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SecondaryCard from '@/Components/Shared/SceondaryCard';
import { useWorkoutContext } from '@/Context/WorkoutContext';

export default function WorkoutDetailViewPage() {
    const [mounted, setMounted] = useState(() => typeof window !== 'undefined');

    useEffect(() => {
        document.title = "My Plan | FitLog";
    }, []);

    const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');
    const [sortBy, setSortBy] = useState<'duration' | 'calories' | 'rating'>('duration');
    const { plan, saved, removeFromPlan, removeFromSaved } = useWorkoutContext();

    const currentList = activeTab === 'plan' ? plan : saved;

    const sortedList = mounted
        ? [...currentList].sort((a, b) => {
            if (sortBy === 'duration') return (Number(b.duration) || 0) - (Number(a.duration) || 0);
            if (sortBy === 'calories') return (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0);
            if (sortBy === 'rating') return (Number(b.rating) || 0) - (Number(a.rating) || 0);
            return 0;
        })
        : [];

    const totalExercises = mounted ? currentList.length : 0;
    const totalMinutes = mounted ? currentList.reduce((sum, item) => sum + (Number(item.duration) || 0), 0) : 0;
    const totalCalories = mounted ? currentList.reduce((sum, item) => sum + (Number(item.caloriesBurned) || 0), 0) : 0;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">

            <div className="mb-6">
                <h1 className="text-3xl font-black text-white uppercase tracking-wider">MY PLAN</h1>
                <p className="text-zinc-500 text-xs sm:text-sm mt-1">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className="bg-[#18181c] border border-zinc-800/80 rounded-xl p-5 md:p-6 mb-8 grid grid-cols-3 gap-4 text-center">
                <div>
                    <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-1">Exercises</p>
                    <p className="text-2xl md:text-4xl font-black text-lime-400">{totalExercises}</p>
                </div>
                <div>
                    <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-1">Minutes</p>
                    <p className="text-2xl md:text-4xl font-black text-white">{totalMinutes}</p>
                </div>
                <div>
                    <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-1">Calories</p>
                    <p className="text-2xl md:text-4xl font-black text-white">{totalCalories}</p>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setActiveTab('plan')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition ${activeTab === 'plan' ? 'bg-zinc-800 text-lime-400 border border-zinc-700' : 'text-zinc-400 hover:text-white'
                            }`}
                    >
                        Today&apos;s Plan ({mounted ? plan.length : 0})
                    </button>
                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition ${activeTab === 'saved' ? 'bg-zinc-800 text-lime-400 border border-zinc-700' : 'text-zinc-400 hover:text-white'
                            }`}
                    >
                        Saved ({mounted ? saved.length : 0})
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Sort By</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as 'duration' | 'calories' | 'rating')}
                        className="bg-[#18181c] border border-zinc-800 text-zinc-300 text-xs font-semibold rounded-lg px-3 py-1.5 focus:outline-none focus:border-zinc-700 cursor-pointer"
                    >
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            {sortedList.length > 0 ? (
                <div className="space-y-4">
                    {sortedList.map((workout) => (
                        <SecondaryCard
                            key={workout.id}
                            workout={workout}
                            type={activeTab}
                            onRemove={activeTab === 'plan' ? removeFromPlan : removeFromSaved}
                        />
                    ))}
                </div>
            ) : (
                <div className="bg-[#121212] border border-zinc-800 rounded-2xl py-16 text-center">
                    <h2 className="text-xl font-black text-white uppercase mb-2">NOTHING HERE YET</h2>
                    <p className="text-zinc-500 text-xs mb-6">Browse the library and add a lift to get today moving.</p>
                    <Link href="/" className="bg-lime-400 text-black font-black text-xs uppercase px-6 py-3 rounded-lg inline-block hover:bg-lime-300 transition">
                        Go to workouts
                    </Link>
                </div>
            )}
        </div>
    );
}