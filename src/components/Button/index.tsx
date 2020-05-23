import React from 'react';

import { Container } from './styles';

interface Props {
  /**
   * This is a prop
   */
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <button type="submit">{children}</button>
    </Container>
  );
};
