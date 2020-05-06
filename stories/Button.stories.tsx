import React from 'react';
import { storiesOf } from '@storybook/react';
// import { withA11y } from '@storybook/addon-a11y';

import { Button } from '../src';

storiesOf('Button', module).add('Default', () => <Button>Test</Button>);
