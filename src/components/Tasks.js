import React from 'react';
import Task from './Task';
import { useState } from 'react';

const Tasks = ({ tasks }) => {
    console.log(tasks);
    return (
        <div>
            <ul>
                {tasks.map(task => {
                    return <Task key={task.id} task={task} />;
                })}
            </ul>
        </div>
    );
};

export default Tasks;
