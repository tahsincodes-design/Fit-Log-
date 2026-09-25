'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { WorkoutType } from '@/Types/type';

interface WorkoutContextType {
    plan: WorkoutType[];
    saved: WorkoutType[];
    addToPlan: (workout: WorkoutType) => void;
    removeFromPlan: (id: string | number) => void;
    addToSaved: (workout: WorkoutType) => void;
    removeFromSaved: (id: string | number) => void;
    isInPlan: (id: string | number) => boolean;
    isInSaved: (id: string | number) => boolean;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [plan, setPlan] = useState<WorkoutType[]>(() => {
        if (typeof window === 'undefined') return [];
        const localPlan = window.localStorage.getItem('fitlog_plan');
        return localPlan ? JSON.parse(localPlan) : [];
    });
    const [saved, setSaved] = useState<WorkoutType[]>(() => {
        if (typeof window === 'undefined') return [];
        const localSaved = window.localStorage.getItem('fitlog_saved');
        return localSaved ? JSON.parse(localSaved) : [];
    });

    useEffect(() => {
        localStorage.setItem('fitlog_plan', JSON.stringify(plan));
    }, [plan]);

    useEffect(() => {
        localStorage.setItem('fitlog_saved', JSON.stringify(saved));
    }, [saved]);

    const addToPlan = (workout: WorkoutType) => {
        if (!plan.some((item) => String(item.id) === String(workout.id))) {
            setPlan((preview) => [...preview, workout]);
        }
    };

    const removeFromPlan = (id: string | number) => {
        setPlan((preview) => preview.filter((item) => String(item.id) !== String(id)));
    };

    const addToSaved = (workout: WorkoutType) => {
        if (!saved.some((item) => String(item.id) === String(workout.id))) {
            setSaved((preview) => [...preview, workout]);
        }
    };

    const removeFromSaved = (id: string | number) => {
        setSaved((preview) => preview.filter((item) => String(item.id) !== String(id)));
    };

    const isInPlan = (id: string | number) => plan.some((item) => String(item.id) === String(id));
    const isInSaved = (id: string | number) => saved.some((item) => String(item.id) === String(id));

    return (
        <WorkoutContext.Provider
            value={{ plan, saved, addToPlan, removeFromPlan, addToSaved, removeFromSaved, isInPlan, isInSaved }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};

export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext);
    if (!context) throw new Error('useWorkoutContext must be used within WorkoutProvider');
    return context;
};