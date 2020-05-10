import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Container = styled.div.attrs({
  className: '',
})`
  & {
    h1 {
      ${tw`text-red-400`}
    }
  }
`;
