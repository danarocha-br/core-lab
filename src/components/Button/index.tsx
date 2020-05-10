import React from 'react';

import { Container } from './styles';

interface Props {
  /**
   * This is a prop
   */
}

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <h1>Test</h1>
    </Container>
  );
};
