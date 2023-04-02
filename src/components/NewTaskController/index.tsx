import React from 'react';
import { Task } from '../../types';
import Input from '../Input';

type Props = {
  setTasks: (value: Array<Task> | ((val: Array<Task>) => Array<Task>)) => void;
}

function NewTaskController({ setTasks }: Props) {
  const [newTaskTitle, setNewTaskTitle] = React.useState('');

  return (
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
  );
}

export default NewTaskController;
