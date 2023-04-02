import React from 'react';
import { Task } from '../../types';
import useSessionStorage from '../../hooks/useSessionStorage';
import './styles.css';
import NewTaskController from '../NewTaskController';

function TaskList() {
  const [tasks, setTasks] = useSessionStorage<Array<Task>>('taks', []);
  return (
    <>
      <NewTaskController setTasks={setTasks} />
      <h4>Tasks</h4>
      {tasks.map(({ title }, idx) => (
        <p key={`${title}-${idx * 10}`}>
          {title}
        </p>
      ))}
    </>
  );
}

export default TaskList;
