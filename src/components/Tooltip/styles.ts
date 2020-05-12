import styled from 'styled-components';
import tw from 'tailwind.macro';

import colors from '../../styles/colors';

export const Container = styled.div`
  ${tw`relative`}

  span {
    ${tw`text-white text-center text-sm font-medium bg-indigo-700 rounded-md px-2 py-1 absolute w-30 z-10 opacity invisible`};
    transition: opacity 0.4s;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translate(-50%);

    &::before {
      ${tw`border-solid absolute`}
      content: '';
      border-color: ${({ theme }) => theme?.palette?.Base?.primary} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translate(-50%);
    }
  }

  &:hover span {
    ${tw`opacity-1 visible`}
  }
`;
