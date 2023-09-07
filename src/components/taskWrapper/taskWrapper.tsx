import { Grid, FormGroup, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

type TaskWrapperProps = {
  name: string;
  children: ReactNode;
};

function TaskWrapper({ name, children }: TaskWrapperProps) {
  return (
    <Grid item xs={6}>
      <FormGroup
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #C7CBCE',
          padding: '16px',
          gap: '8px',
          borderRadius: '4px',
          marginTop: '16px'
        }}
      >
        <Typography variant="h5">{name}</Typography>
        <div data-testid="children-wrapper">{children}</div>
      </FormGroup>
    </Grid>
  );
}

export default TaskWrapper;
