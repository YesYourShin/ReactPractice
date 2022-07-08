import React from 'react';

const tasks = [
    {
        id: 1,
        text: 'Lunch',
        day: 'Feb 5th at 12:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Dinner',
        day: 'Feb 5th at 6:30pm',
        reminder: true,
    },
];

const Tasks = () => {
    return (
        <div>
            <ul>
                {tasks.map(task => {
                    return <li>{task.text}</li>;
                })}
            </ul>
        </div>
    );
};

export default Tasks;
