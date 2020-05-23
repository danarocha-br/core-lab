import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import withFormik from 'storybook-formik';
import * as Yup from 'yup';
import { AiOutlineMail } from 'react-icons/ai';

import { Input } from '../src';
import docs from '../src/components/Form/Input/Input.docs.mdx';

export default {
  title: 'Form/Input',
  decorators: [withKnobs],
  parameters: {
    docs: { page: docs },
    componentSubtitle:
      'Displays an image that represents a user or organization',
  },
};

const validationSample = Yup.object().shape({
  email: Yup.string()
    .email('Please enter your email address in the format: name@domain.com')
    .required('Please enter your email.'),
  name: Yup.string(),
});

export const textOnly = () => (
  <div className="flex vertical">
    <Input
      id="email"
      name="email"
      icon={AiOutlineMail}
      label="Email"
      small={boolean('Size: Small', false)}
      disabled={boolean('Disabled', false)}
      loading={boolean('Loading', false)}
      readOnly={boolean('Readonly', false)}
    />
  </div>
);

textOnly.story = {
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        email: '',
        name: '',
      },
      validationSchema: validationSample,
      // onSubmit: (v) => console.log('I want to log these... ', v),
    },
  },
};
