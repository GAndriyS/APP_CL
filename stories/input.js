import React from 'react';
import TextField from 'material-ui/TextField';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const label = 'Type';
    const options = ['default', 'password', 'number', 'search'];
    const defaultValue = 'default';
    const btnType = select(label, options, defaultValue);

    return (
      <TextField
        label="Name"
        margin="normal"
        onChange={action('on value change')}
        error={boolean('Error', false)}
        type={btnType}
        placeholder={text('placeholder', '')}
        helperText={text('helper text', '')}
      />
    );
  });