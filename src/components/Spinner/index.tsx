import * as React from 'react';

import { Container } from './styles';

export const Spinner: React.SFC = () => {
  return (
    <Container viewBox="-24 -24 48 48">
      <circle cx="0" cy="0" r="20" fill="none" strokeWidth="4" />
    </Container>
  );
};
