import React from 'react';
import { Task } from '../../types';
import Input from '../Input';
import './styles.css';

function TaskList() {
  const [tasks, setTasks] = React.useState<Array<Task>>([]);
  const [newTaskTitle, setNewTaskTitle] = React.useState('');
  return (
    <>
      <Input
        onSubmit={(e) => {
          e.preventDefault();
          setTasks((currTasks) => [
            {
              title: newTaskTitle,
              isCompleted: false,
              subTasks: [],
            }, ...currTasks]);
          setNewTaskTitle('');
        }}
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        label="Create new task"
      />
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
