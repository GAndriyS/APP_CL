import React from 'react';
import TextField from 'material-ui/TextField';
import { storiesOf } from '@storybook/react';

storiesOf('Input', module)
  .add('Default', () => (
    <TextField
      label="Name"
      margin="normal"
    />
  ));