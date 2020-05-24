import React from 'react';
import { Button } from '../..';
import docs from './Button.docs.mdx';

export default {
  title: 'Components/Button',
  parameters: {
    docs: { page: docs },
  },
};

export const primary = () => <Button>hello</Button>;
