import React, { useState } from 'react';
import { Task } from './types/types';
import TaskCard from './components/task/task';
import TaskWrapper from './components/taskWrapper/taskWrapper';

import './App.css';
import { Button, Grid, TextField, Typography } from '@mui/material';

function App() {
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [task, setTask] = useState('');

  function addTask() {
    if (task) {
      setAllTasks([...allTasks, { id: allTasks.length, task: task, fulfilment: false }]);
      setTask('');
    }
  }

  function changeFulfilment(id: number) {
    setAllTasks(
      allTasks.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            fulfilment: !el.fulfilment
          };
        }

        return el;
      })
    );
  }

  function deleteTask(id: number) {
    setAllTasks(allTasks.filter((el) => el.id !== id));
  }

  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h2" sx={{ textAlign: 'center' }} gutterBottom>
        ToDoList
      </Typography>
      <TextField
        label="Enter a task"
        value={task}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTask(event.target.value);
        }}
        variant="outlined"
        test-id="input"
      />
      <Button onClick={addTask} sx={{ marginTop: '8px' }}>
        Add task
      </Button>
      <Grid container columnSpacing={2}>
        <TaskWrapper name="Unfulfilled">
          {allTasks
            .filter((el) => !el.fulfilment)
            .map((el) => (
              <TaskCard
                key={el.id}
                task={el.task}
                fulfilment={el.fulfilment}
                changeFulfilment={() => changeFulfilment(el.id)}
                deleteTask={() => deleteTask(el.id)}
              />
            ))}
        </TaskWrapper>
        <TaskWrapper name="Fulfilled">
          {allTasks
            .filter((el) => el.fulfilment)
            .map((el) => (
              <TaskCard
                key={el.id}
                task={el.task}
                fulfilment={el.fulfilment}
                className="unfulfilled"
                changeFulfilment={() => changeFulfilment(el.id)}
                deleteTask={() => deleteTask(el.id)}
              />
            ))}
        </TaskWrapper>
      </Grid>
    </Grid>
  );
}

export default App;
