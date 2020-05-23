import React from 'react';
import { Button } from '../src';
import docs from '../src/components/Button/Button.docs.mdx';

export default {
  title: 'Components/Button',
  parameters: {
    docs: { page: docs },
    componentSubtitle:
      'Displays an image that represents a user or organization',
  },
};

export const primary = () => <Button>hello</Button>;
