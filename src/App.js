import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
function App() {
    const [tasks, setTasks] = useState([
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
    ]);

    const onDelete = taskId => {
        tasks.filter(task => {});
    };

    return (
        <div className="App">
            <h1>Hello From React</h1>
            <Header title="Hello scp" />
            <Tasks tasks={tasks} />
        </div>
    );
}
export default App;
