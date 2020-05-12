import * as React from 'react';

import { Container } from './styles';

export interface TooltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.SFC<TooltipProps> = ({ title, children, className }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
