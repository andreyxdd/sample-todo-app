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
        if (newTaskTitle) {
          setTasks((currTasks) => [
            {
              id: uuid(),
              title: newTaskTitle.charAt(0).toUpperCase() + newTaskTitle.slice(1),
              isCompleted: false,
              subTasks: [],
            }, ...currTasks]);
          setNewTaskTitle('');
        }
      }}
      value={newTaskTitle}
      onChange={(e) => {
        const inputValue = e.target.value;
        setNewTaskTitle(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
      }}
      label="New task"
      btnLabel="Add a task"
    />
  );
}

export default NewTaskController;
