import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import withFormik from 'storybook-formik';
import { withDesign } from 'storybook-addon-designs';
import * as Yup from 'yup';
import { AiOutlineMail } from 'react-icons/ai';

import { Input } from '../../..';

import docs from './Input.docs.mdx';

export default {
  title: 'Form/Input',
  decorators: [withKnobs, withDesign],
  parameters: {
    docs: { page: docs },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yTqjwXD3GuQeGfjowZNOk1/Design-System?node-id=55%3A277',
    },
  },
};

const validationSample = Yup.object().shape({
  email: Yup.string()
    .email('Please enter your email address in the format: name@domain.com')
    .required('Please enter your email.'),
  name: Yup.string(),
  password: Yup.string().required(),
});

export const textOnly = () => (
  <div className="flex flex-col">
    <div>
      <p className="text-center">With Icon</p>
      <Input
        id="email"
        name="email"
        icon={AiOutlineMail}
        label="Email"
        aria-labelledby="Your email"
        small={boolean('Size: Small', false)}
        disabled={boolean('Disabled', false)}
        loading={boolean('Loading', false)}
        readOnly={boolean('Readonly', false)}
      />
    </div>

    <div>
      <p className="text-center">Without Icon</p>
      <Input
        id="name"
        name="name"
        label="Name"
        aria-labelledby="Your name"
        small={boolean('Size: Small', false)}
        disabled={boolean('Disabled', false)}
        loading={boolean('Loading', false)}
        readOnly={boolean('Readonly', false)}
      />
    </div>

    <div>
      <p className="text-center">Disabled</p>
      <Input
        id="personalId"
        name="personalId"
        label="Id Code"
        small={boolean('Size: Small', false)}
        disabled
        loading={boolean('Loading', false)}
        readOnly={boolean('Readonly', false)}
        aria-disabled
      />
    </div>

    <div>
      <p className="text-center">ReadOnly</p>
      <Input
        id="id"
        name="id"
        label="Id Code"
        small={boolean('Size: Small', false)}
        loading={boolean('Loading', false)}
        readOnly
        aria-readonly
      />
    </div>
  </div>
);

textOnly.story = {
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        email: '',
        name: 'Dana Rocha',
        personalId: '123456ABC',
        id: '123456ABC',
      },
      validationSchema: validationSample,
    },
  },
};
