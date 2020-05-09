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
    <Input name="email" icon={AiOutlineMail} label="Email" />
    {/* <Input name="name" icon={AiOutlineMail} /> */}
  </div>
);

// storiesOf('Input', module).add('Default', () => <Input />);
