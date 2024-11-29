import React, { useEffect, useState } from 'react';
import { DataTasksType, TaskType } from './tasksData';

type TasksType = {
  data: DataTasksType;
};

export const Tasks = (props: TasksType) => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedTasks, setCheckedTasks] = useState<{ [key: number]: boolean }>(
    {}
  );

  useEffect(() => {
    const initialState: { [key: number]: boolean } = {};

    props.data.tasks.forEach((task) => {
      initialState[task.taskId] = task.isDone;
    });

    setCheckedTasks(initialState);
  }, [props.data.tasks]);

  const handlerCheckboxChange =
    (taskId: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedTasks((prev) => {
        return {
          ...prev,
          [taskId]: e.target.checked,
        };
      });
    };

  return (
    <div>
      <h2>{props.data.title}</h2>
      <ul>
        {props.data.tasks.map((task: TaskType) => {
          return (
            <li key={task.taskId}>
              <span>{task.taskId} </span>
              <span>{task.title} </span>
              <input
                type="checkbox"
                checked={checkedTasks[task.taskId] || false}
                onChange={handlerCheckboxChange(task.taskId)}
              />
            </li>
          );
        })}
      </ul>
      <ul>
        {props.data.students.map((student: string, index) => {
          return <li key={index}>{student}</li>;
        })}
      </ul>
    </div>
  );
};
