import React from 'react';
import { v4 as uuid } from 'uuid';
import { setTaskProps } from '../../types';
import Input from '../Input';

type Props = {
  setTasks: (v: setTaskProps) => void;
}

function NewTaskController({ setTasks }: Props) {
  const [newTaskTitle, setNewTaskTitle] = React.useState('');

  return (
    <Input
      onSubmit={(e) => {
        e.preventDefault();
        setTasks((currTasks) => [
          {
            id: uuid(),
            title: newTaskTitle,
            isCompleted: false,
            subTasks: [],
          }, ...currTasks]);
        setNewTaskTitle('');
      }}
      value={newTaskTitle}
      onChange={(e) => setNewTaskTitle(e.target.value)}
      label="Add a task"
    />
  );
}

export default NewTaskController;
