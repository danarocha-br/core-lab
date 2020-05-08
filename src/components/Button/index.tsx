import React from 'react';

interface Props {
  /**
   * This is a prop
   */
}

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <button type="button" className="theme-primary bg-background-primary">
      {children}
    </button>
  );
};
