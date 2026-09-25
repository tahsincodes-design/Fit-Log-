import React from 'react';
import Link from 'next/link';
import { WorkoutType } from '@/Types/type';
import WorkoutDetailCard from '@/Components/Shared/WorkoutDetailCard';

async function getWorkoutDetail(id: string): Promise<WorkoutType | null> {
    try {
        const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        console.error('Error fetching workout details:', error);
        return null;
    }
}

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function WorkoutDetailPage({ params }: PageProps) {
    const { id } = await params;
    const workout = await getWorkoutDetail(id);

    if (!workout) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-20 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Workout Not Found</h2>
                <Link
                    href="/"
                    className="inline-block bg-lime-400 hover:bg-lime-300 text-black font-bold px-6 py-2.5 rounded-md text-sm uppercase tracking-wider"
                >
                    ← Return to Library
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
            <WorkoutDetailCard workout={workout} />
        </div>
    );
}