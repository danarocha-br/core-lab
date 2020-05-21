import React from 'react';
import { storiesOf } from '@storybook/react';
import { AiOutlineMail } from 'react-icons/ai';

import { Input } from '../src';

export default {
  title: 'Form/Input',
  // component: Input,
};

export const textOnly = () => (
  <div className="flex vertical">
    <Input id="email" name="email" icon={AiOutlineMail} label="Email" />
    <Input id="name" name="name" icon={AiOutlineMail} label="Email" small />
  </div>
);

// storiesOf('Input', module).add('Default', () => <Input />);
