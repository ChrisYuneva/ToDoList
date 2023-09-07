import { Button, Card, Checkbox, FormControlLabel } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

type TaskProps = {
  task: string;
  fulfilment: boolean;
  className?: string;
  changeFulfilment: () => void;
  deleteTask: () => void;
};

function TaskCard({ task, fulfilment, className, changeFulfilment, deleteTask }: TaskProps) {
  return (
    <Card
      variant="outlined"
      sx={{ width: '80%', display: 'flex', justifyContent: 'space-between', padding: '8px' }}
    >
      <FormControlLabel
        className={className}
        control={<Checkbox checked={fulfilment} onChange={changeFulfilment} />}
        label={task}
      />
      <Button endIcon={<DeleteIcon />} onClick={deleteTask} />
    </Card>
  );
}

export default TaskCard;
