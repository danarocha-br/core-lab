import React, {
  InputHTMLAttributes,
  useState,
  useCallback,
  useRef,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FieldProps, FieldMetaProps } from 'formik';

import { Container, Error } from './styles';

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
  // field?: React.ComponentType<FieldProps['field']>;
  // touched?: string;
  // error?: boolean;
  /**
   * An icon component from to be added from any library.
   */
  icon?: React.ComponentType<IconBaseProps>;
}

export const Input: React.FC<InputProps> = ({
  // field,
  label,
  id,
  error,
  icon: Icon,
  small,
  disabled,
  readOnly,
  // form: { touched, errors },
  ...rest
}) => {
  /**
   * Get UI States
   */
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setFocus] = useState(false);
  const [hasValue, setValue] = useState(false);
  const [hasError, setError] = useState(false);

  const handleInputFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setFocus(false);
    setValue(!!inputRef.current?.value);
  }, []);

  return (
    <div className="flex flex-col w-full m-4">
      <Container
        hasError={hasError}
        isFocused={isFocused}
        hasValue={hasValue}
        small={small}
        disabled={disabled}
        readOnly={readOnly}
      >
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          // disabled={handleDisabled}
          // {...field}
          ref={inputRef}
          type="text"
          id={id}
          disabled={disabled}
          readOnly={readOnly}
          {...rest}
        />
        <label htmlFor={id}>
          {Icon && <Icon size={20} />}
          <span>{label}</span>
        </label>

        {/* {touched[field.name] && errors[field.name] && (
        <div className="c-input__feedback">{errors[field.name]}</div>
      )} */}
      </Container>

      {/* {error && ( */}
      {/* <Error>
        <span>Password is required.</span>
      </Error> */}
      {/* )} */}
    </div>
  );
};
