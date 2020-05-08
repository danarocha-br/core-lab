import React, { InputHTMLAttributes, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface UiState {
  isFocused?: boolean;
}
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * This is a prop
   */
  name: string;
  /**
   * An icon component from to be added from any library.
   */
  icon?: React.ComponentType<IconBaseProps>;
}

export const Input: React.FC<InputProps & UiState> = ({
  icon: Icon,
  ...rest
}) => {
  /**
   * Get UI States
   */

  const [isFocused, setFocus] = useState(false);

  function handleInputFocus() {}

  return (
    <Container>
      <span className="theme-light border-gray-300 input">
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...rest}
          className="theme-light text-gray-900 input__field input__field--effect"
          type="text"
          id="input-28"
        />
        <label
          className="theme-light text-gray-800 bg-background-shade input__label"
          htmlFor="input-28"
        >
          {Icon && <Icon size={18} />}
          <span className="input__label-content">E-mail</span>
        </label>
      </span>
    </Container>
  );
};
