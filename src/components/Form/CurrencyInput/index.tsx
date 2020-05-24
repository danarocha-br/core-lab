import React, { useState } from 'react';

import NumberFormat from 'react-number-format';
import { useField, setF } from 'formik';

import { Input } from '../../..';

export const CurrencyInput: React.SFC = (setFieldValue,{ ...props }) => {
  /**
   * Formik
   */
  const [field, meta, helpers] = useField(props);

  return <Input onValueChange={(val) => setFieldValue('numbers', val.floatValue)} />;
  />;
