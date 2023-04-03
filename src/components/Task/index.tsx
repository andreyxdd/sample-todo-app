import React from 'react';
import { v4 as uuid } from 'uuid';
import useSessionStorage from '../../hooks/useSessionStorage';
import { setTaskProps, Task as TaskProps } from '../../types';
import Input from '../Input';
import './styles.css';

type Props = TaskProps & {
  setTasks: (v: setTaskProps) => void;
}

function Task({
  title, isCompleted, id, setTasks, subTasks: initSubTasks,
}: Props) {
  const [newTaskTitle, setNewTaskTitle] = React.useState('');
  const [subTasks, setSubTasks] = useSessionStorage(`subtasks-${id}`, initSubTasks);

  const backgroundColor = isCompleted ? '#BDE7BD' : '#FFD5D4';

  return (
    <div className="task-container-col">
      <div
        className="task-container-row"
        style={{ backgroundColor }}
      >
        <div>
          <label htmlFor={`task-${title}-${id}-check`} className="check-container">
            <span className="checkmark" />
            <input
              type="checkbox"
              checked={isCompleted}
              id={`task-${title}-${id}-check`}
              onChange={() => {
                setTasks((currTasks) => {
                  const updatedTasks = currTasks.map((t) => {
                    if (t.id === id) {
                      return { ...t, isCompleted: !t.isCompleted };
                    }
                    return t;
                  });
                  return updatedTasks;
                });
              }}
            />
            {title}
          </label>
        </div>
        <div>
          <Input
            onSubmit={(e) => {
              e.preventDefault();
              setSubTasks((currSubTasks) => currSubTasks.concat([{
                id: uuid(),
                title: newTaskTitle,
                isCompleted: false,
                subTasks: [],
              }]));
              setNewTaskTitle('');
            }}
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            label="Add a sub-task"
            inputStyle={{ backgroundColor }}
          />
        </div>
      </div>
      {subTasks && subTasks.length > 0
        && (
        <div className="subtasks-container">
          {subTasks.map((st: TaskProps) => (
            <Task
              key={`task-${st.title}-${st.id}`}
              id={st.id}
              title={st.title}
              isCompleted={st.isCompleted}
              subTasks={st.subTasks}
              setTasks={setSubTasks}
            />
          ))}
        </div>
        )}
    </div>
  );
}

export default Task;
