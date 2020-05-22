import styled, { keyframes } from 'styled-components';
import tw from 'tailwind.macro';

import { colors } from '../../styles/designTokens';

const dash = keyframes`
  0% {
    stroke-dasharray: 0, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 150;
    stroke-dashoffset: -24;
  }
  100% {
    stroke-dasharray: 0, 150;
    stroke-dashoffset: -124;
  }
`;

const rotate = keyframes`
   100% {
    transform: rotate(360deg);
  }
`;

const color = keyframes`
   0%, 100% {
    stroke: ${colors.indigo[900]};
  }
  35% {
    stroke: ${colors.indigo[500]};
  }
  75% {
    stroke: ${colors.green[900]};
  }
`;

export const Container = styled.svg`
  ${tw`h-12 w-12`}
  animation: ${rotate} 2.625s linear infinite;
  transform-origin: center;

  circle {
    animation: ${dash} 1.4s ease-in-out infinite,
      ${color} 2.5s ease-in-out 0.75s infinite;
    stroke: ${colors.indigo[900]};
    stroke-linecap: round;
  }
`;
