import React from 'react';

interface InputProps {
  /**
   * This is a prop
   */
}

export const Input: React.FC<InputProps> = () => {
  return (
    <span className="theme-light border-gray-300 input">
      <input
        className="theme-light text-gray-900 input__field input__field--effect"
        type="text"
        id="input-28"
      />
      <label
        className="theme-light text-gray-800 bg-background-shade input__label"
        htmlFor="input-28"
      >
        <span className="input__label-content">First Name</span>
      </label>
    </span>
  );
};
