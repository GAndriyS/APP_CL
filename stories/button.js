import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

import { State, Store } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const store = new Store({
  disabled: false,
  type: '',
  text: 'Btn Text',

  menuOpen: false,
  menuAnchorEl: null
});

storiesOf('Button', module)
  .add('Flat', () => (
    <State store={store}>
      <Button disabled="disabled" color={store.get('type')}>{ store.get('text') }</Button>
    </State>
  ));