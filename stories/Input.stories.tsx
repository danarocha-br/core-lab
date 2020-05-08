import React from 'react';
import { storiesOf } from '@storybook/react';
import { AiOutlineMail } from 'react-icons/ai';

import { Input } from '../src';

export default {
  title: 'Form/Input',
};

export const textOnly = () => <Input name="name" icon={AiOutlineMail} />;

// storiesOf('Input', module).add('Default', () => <Input />);
