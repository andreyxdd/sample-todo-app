import React from 'react';
import { Task as TaskProps } from '../../types';
import useSessionStorage from '../../hooks/useSessionStorage';
import './styles.css';
import NewTaskController from '../NewTaskController';
import Task from '../Task';
import Button from '../Button';
import TaskFilter from '../TaskFilter';
import useDraggableList from '../../hooks/useDraggableList';

function TaskList() {
  const [tasks, setTasks, clearStorage] = useSessionStorage<Array<TaskProps>>('taks', []);

  const [searchString, setSearchString] = React.useState('');
  const [filteredTasks, setFilteredTasks] = React.useState<Array<TaskProps>>([]);
  React.useEffect(() => {
    const filterResults = tasks.filter(
      ({ title }) => title.toLowerCase().includes(searchString.toLowerCase()),
    );
    setFilteredTasks(filterResults);
  }, [searchString, setFilteredTasks, tasks]);

  const { dragStart, dragEnter, drop } = useDraggableList(tasks, setTasks);

  return (
    <>
      <div className="task-list-header">
        <NewTaskController setTasks={setTasks} />
      </div>
      <h4>Tasks</h4>
      <div className="task-list-header">
        <TaskFilter searchString={searchString} setSearchString={setSearchString} />
        <Button
          onClick={() => {
            setTasks([]);
            clearStorage();
          }}
          disabled={!filteredTasks.length}
        >
          Delete all tasks
        </Button>
      </div>
      <hr />
      {filteredTasks.length ? (
        <div className="task-list-scroll">
          {filteredTasks.map(({
            id, title, isCompleted, subTasks,
          }, index) => (
            <div
              key={`task-${title}-${id}`}
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              draggable
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
      )
        : (
          <p style={{ alignSelf: 'center', color: 'grey' }}>
            (no tasks)
          </p>
        )}
    </>
  );
}

export default TaskList;
