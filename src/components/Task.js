import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task }) => {
    const dummy = id => {
        console.log(`delete clicked ${id}`);
    };
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}>
            <h3>
                {task.text} <FaTimes onClick={() => dummy(task.id)} style={{ color: 'red', cursor: 'pointer' }} />
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;
