import React from 'react';
import Button from 'material-ui/Button';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Flat', () => {
    const label = 'Type';
    const options = ['default', 'primary', 'accent'];
    const defaultValue = 'default';
    const btnType = select(label, options, defaultValue);

    return (<Button disabled={boolean('Disabled', false)} color={btnType}>{text('Label', 'Sample Text')}</Button>);
  });