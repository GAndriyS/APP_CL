import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({ downPanelInRight: true });

function loadStories() {
  require('../stories/button.js');
  require('../stories/input.js');
}

configure(loadStories, module);