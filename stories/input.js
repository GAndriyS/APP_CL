import React from 'react';
import TextField from 'material-ui/TextField';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Input', module)
  .add('Default', () => (
    <TextField
      label="Name"
      margin="normal"
    />
  ));