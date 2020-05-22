import React, {
  InputHTMLAttributes,
  useState,
  useCallback,
  useRef,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { AiFillExclamationCircle, AiFillShopping } from 'react-icons/ai';
import { useField } from 'formik';

import { Container, Error } from './styles';
import { colors } from '../../../styles/designTokens';
import { Spinner } from '../../Spinner';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * This is a prop
   */
  name: string;
  /**
   * This is a prop
   */
  label: string;
  id: string;
  small?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;

  /**
   * An icon component from to be added from any library.
   */
  icon?: React.ComponentType<IconBaseProps>;
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  icon: Icon,
  small,
  disabled,
  readOnly,
  loading,
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

  const handleInputFocus = useCallback(() => {
    setFocus(true);
  }, [setFocus]);

  const handleInputBlur = useCallback(() => {
    setFocus(false);
    setValue(!!inputRef.current?.value);
  }, [setFocus, setValue]);

  return (
    <div className="flex flex-col w-full m-4">
      <Container
        isFocused={isFocused}
        hasValue={hasValue}
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
          type="text"
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
            <div className="spinner">
              <Spinner small />
            </div>
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
