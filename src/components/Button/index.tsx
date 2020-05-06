import * as React from 'react';

interface Props {
  /**
   * This is a prop
   */
}

export const Button: React.FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};