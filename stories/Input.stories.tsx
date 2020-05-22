import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import withFormik from 'storybook-formik';
import * as Yup from 'yup';

import { Input } from '../src';

export default {
  title: 'Form/Input',
};

const validationSample = Yup.object().shape({
  email: Yup.string()
    .email('Please enter your email address in the format: name@domain.com')
    .required('Please enter your email.'),
  name: Yup.string()
    .email('Please enter your email address in the format: name@domain.com')
    .required('Please enter your email.'),
});

export const textOnly = () => (
  <div className="flex vertical">
    <Input id="email" name="email" icon={AiOutlineMail} label="Email" />
    <Input id="name" name="name" icon={AiOutlineMail} label="Email" small />
  </div>
);

// storiesOf('Input', module).add('Default', () => <Input />);
textOnly.story = {
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        email: '',
      },
      validationSchema: validationSample,
      // onSubmit: (v) => console.log('I want to log these... ', v),
    },
  },
};
