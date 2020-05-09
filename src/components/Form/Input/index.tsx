import React, {
  InputHTMLAttributes,
  useState,
  useCallback,
  useRef,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FieldProps, FieldMetaProps } from 'formik';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * This is a prop
   */
  name: string;
  /**
   * This is a prop
   */
  label: string;
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
  icon: Icon,
  // form: { touched, errors },
  ...rest
}) => {
  /**
   * Get UI States
   */
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setFocus] = useState(false);
  const [hasValue, setValue] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setFocus(false);
    setValue(!!inputRef.current?.value);
  }, []);

  const handleDisabled = useCallback(() => {
    setDisabled(true);
  }, []);

  return (
    <Container
      isFocused={isFocused}
      hasValue={hasValue}
      isDisabled={isDisabled}
    >
      <input
        className="text-base bg-transparent absolute flex w-full float-right border-none z-50 focus:outline-none"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        // disabled={handleDisabled}
        // {...field}
        ref={inputRef}
        {...rest}
        type="text"
        id="input-28"
      />
      <label
        className="font-medium text-sm text-left flex items-center w-full h-full float-right p-0"
        htmlFor="input-28"
      >
        {Icon && <Icon size={18} />}
        <span>{label}</span>
      </label>

      {/* {touched[field.name] && errors[field.name] && (
        <div className="c-input__feedback">{errors[field.name]}</div>
      )} */}
    </Container>
  );
};
