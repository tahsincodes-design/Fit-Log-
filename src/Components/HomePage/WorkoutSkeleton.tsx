import React from 'react';
import WorkoutCard from './WorkoutCard';

export default function WorkoutSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-[#121212] border border-zinc-800 rounded-xl h-96 animate-pulse p-4">
          <div className="w-full h-48 bg-zinc-800 rounded-lg mb-4" />
          <div className="h-4 bg-zinc-800 rounded w-1/3 mb-2" />
          <div className="h-6 bg-zinc-800 rounded w-2/3 mb-4" />
          <div className="h-4 bg-zinc-800 rounded w-1/2" />
        </div>
      ))}
    </div>
  );
}