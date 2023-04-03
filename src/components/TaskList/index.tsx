import React from 'react';
import { Task as TaskProps } from '../../types';
import useSessionStorage from '../../hooks/useSessionStorage';
import './styles.css';
import NewTaskController from '../NewTaskController';
import Task from '../Task';
import Button from '../Button';

function TaskList() {
  const [tasks, setTasks, clearStorage] = useSessionStorage<Array<TaskProps>>('taks', []);

  const dragItem = React.useRef<number>();
  const dragOverItem = React.useRef<number>();

  const dragStart = (e: React.DragEvent<HTMLDivElement>, dragIdx: number) => {
    dragItem.current = dragIdx;
  };

  const dragEnter = (e: React.DragEvent<HTMLDivElement>, dragIdx: number) => {
    dragOverItem.current = dragIdx;
  };
  const drop = () => {
    if (
      typeof dragItem.current === 'number'
      && typeof dragOverItem.current === 'number'
      && dragItem.current !== dragOverItem.current
    ) {
      const newTasks = tasks.filter((val, idx) => idx !== dragItem.current);
      const dragItemContent = tasks[dragItem.current];
      newTasks.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = undefined;
      dragOverItem.current = undefined;
      setTasks(newTasks);
    }
  };

  return (
    <>
      <div className="task-list-header">
        <NewTaskController setTasks={setTasks} />
        <Button onClick={() => {
          setTasks([]);
          clearStorage();
        }}
        >
          Delete all tasks
        </Button>
      </div>
      <h4>Tasks</h4>
      <div className="task-list-scroll">
        {tasks.map(({
          id, title, isCompleted, subTasks,
        }, index) => (
          <div
            key={`task-${title}-${id}`}
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
          >
            <Task
              id={id}
              title={title}
              isCompleted={isCompleted}
              setTasks={setTasks}
              subTasks={subTasks}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default TaskList;
