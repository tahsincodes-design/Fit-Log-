import { WorkoutType } from '@/Types/type';
import React from 'react';


const WorkoutDetailPage = async () => {
    const getDetail = await fetch('https://api.abcz.workers.dev/api/fitlog/:id');
    const response = getDetail;
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    const detailData: WorkoutType[] = await response.json();
    console.log(detailData);

    return (
        <div>
        </div>
    );

};

export default WorkoutDetailPage;