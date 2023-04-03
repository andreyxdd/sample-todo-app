import React from 'react';
import { Task as TaskProps } from '../../types';
import useSessionStorage from '../../hooks/useSessionStorage';
import './styles.css';
import NewTaskController from '../NewTaskController';
import Task from '../Task';
import Button from '../Button';

function TaskList() {
  const [tasks, setTasks] = useSessionStorage<Array<TaskProps>>('taks', []);
  return (
    <>
      <div className="task-list-header">
        <NewTaskController setTasks={setTasks} />
        <Button onClick={() => setTasks([])}>
          Delete all tasks
        </Button>
      </div>
      <h4>Tasks</h4>
      <div className="task-list-scroll">
        {tasks.map(({
          id, title, isCompleted, subTasks,
        }) => (
          <Task
            key={`task-${title}-${id}`}
            id={id}
            title={title}
            isCompleted={isCompleted}
            setTasks={setTasks}
            subTasks={subTasks}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
