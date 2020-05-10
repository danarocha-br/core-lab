import React from 'react';
import { storiesOf } from '@storybook/react';
import { AiOutlineMail } from 'react-icons/ai';

import { Button } from '../src';

export default {
  title: 'Button',
  // component: Button,
};

export const textOnly = () => (
  <div className="flex vertical">
    <Button />
  </div>
);
