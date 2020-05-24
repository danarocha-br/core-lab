import React, { InputHTMLAttributes, useState, useCallback, useRef, FC } from 'react';
import { IconBaseProps } from 'react-icons';
import { AiFillExclamationCircle, AiFillEye } from 'react-icons/ai';
import { useField } from 'formik';

import { Container, Error } from './styles';
import { colors } from '../../../styles/designTokens';
import { Spinner } from '../../Spinner';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Adds a HTML `id` attribute to the input. This is used for linking the HTML with a
   * [Label].
   */
  id: string;
  /**
   * The HTML `name` attribute that will be pased to the input.
   *
   */
  name: string;
  /**
   * Defines the `label` for the input.
   */
  label: string;
  /**
   * Sets the `type` attribute on the input element. Default is text.
   */
  type?: 'email' | 'password' | 'text' | 'search' | 'tel' | 'number';
  /**
   * Controls the `height and padding` of the input. Default is `large`.
   */

  small?: boolean;
  /**
   * Visually and functionally `disable` the input.
   */
  disabled?: boolean;
  /**
   * Adds `readonly` HTML attribute, so users can click, but cannot modify the input.
   */
  readOnly?: boolean;
  /**
   * Visually and functionally `disable` the input.
   */
  loading?: boolean;
  /**
   * An icon component from to be added from `any library`.
   */
  icon?: React.ComponentType<IconBaseProps>;
  // ariaLabelledby?: string;
}

export const Input: FC<InputProps> = ({
  label,
  id,
  icon: Icon,
  small,
  disabled,
  readOnly,
  loading,
  type,
  ...rest
}) => {
  /**
   * Formik
   */
  const [field, meta] = useField(rest);

  /**
   * Get UI States
   */
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setFocus] = useState(false);
  const [hasValue, setValue] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputFocus = useCallback(() => {
    setFocus(true);
  }, [setFocus]);

  const handleInputBlur = useCallback(() => {
    setValue(!!inputRef.current?.value);

    setFocus(false);
  }, [setFocus, setValue]);

  return (
    <div className="flex flex-col w-full m-4">
      <Container
        isFocused={!!isFocused}
        onBlur={handleInputBlur}
        hasValue={inputRef.current?.value}
        small={small}
        disabled={disabled}
        readOnly={readOnly}
        hasError={meta.touched && meta.error}
        loading={loading}
      >
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          type={type}
          id={id}
          disabled={disabled || loading}
          readOnly={readOnly}
          {...field}
          {...rest}
        />
        <label htmlFor={id}>
          {Icon && <Icon size={20} />}
          <span>{label}</span>
          {meta.touched && meta.error ? (
            <AiFillExclamationCircle size={20} color={colors.red[900]} />
          ) : null}
          {loading ? (
            <i className="spinner">
              <Spinner small />
            </i>
          ) : null}
        </label>
      </Container>
      {meta.touched && meta.error ? (
        <Error>
          <span>{meta.error}</span>
        </Error>
      ) : null}
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  small: false,
  disabled: false,
  readOnly: false,
  loading: false,
};
