import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';

interface UiStates {
  isFocused: boolean;
  hasValue: boolean;
  hasError: boolean;
  isDisabled: boolean;
}

const handleSize = (size: string): string => {
  switch (size) {
    case 'xs':
      return '1em 1em';
    case 'md':
      return '2em 1em';
    default:
      return '2em 1em';
  }
};

// Global Classes for UI State Animations

const inputBorder = `
  border: 10px solid;
  border-top-width: 2.2em;`;

const animateLabel = `
  transform: translate3d(-0.8em, -1.5em, 0) scale3d(0.9, 0.9, 1);
  translateZ(1px);`;

const animateIcon = `
  margin-right: 6px;
  transform: translate3d(-0.3em, -1.5em, 0) scale3d(0.85, 0.85, 1);
  translateZ(1px);`;

export const Container = styled.span.attrs({
  className:
    'relative flex items-center w-full align-top overflow-hidden border rounded-sm',
})<UiStates>`
  border-color: ${({ theme }) => theme?.palette?.Form?.borderColor};
  z-index: 1;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${({ theme }) => theme?.palette?.Base?.primary};
    `}
    ${(props) =>
      props.hasError &&
      css`
        border-color: ${({ theme }) => theme?.palette?.Form?.error};
      `}

  & {
    input {
      ${tw`text-lg bg-transparent absolute flex float-right border-none z-50 focus:outline-none`}
    color: ${({ theme }) => theme?.palette?.Form?.fontColor};
    padding: 1.24em 1.4em 0;
    -webkit-appearance: none;

    ${(props) =>
      props.isFocused &&
      css`
        + label:before {
          ${inputBorder}
          border-color: ${({ theme }) => theme?.palette?.Form?.effectColor};
        }

        + label > span {
          ${animateLabel}
        }

        + label > svg {
          ${animateIcon}
          color: ${({ theme }) => theme?.palette?.Base?.primary};
        }
      `}

    ${(props) =>
      props.hasValue &&
      css`
        + label:before {
          ${inputBorder}
          border-color: ${({ theme }) => theme?.palette?.Form?.effectColor};
        }

        + label > span {
          ${animateLabel}
        }

        + label > svg {
          ${animateIcon}
          color: ${({ theme }) => theme?.palette?.Base?.primary};
        }
      `}

    &:focus + label:before {
      ${inputBorder}
      border-color: ${({ theme }) => theme?.palette?.Form?.effectColor};
    }

    &:focus + label > span {
      ${animateLabel}
    }

    &:focus + label > svg {
      ${animateIcon}
      color: ${({ theme }) => theme?.palette?.Base?.primary};
    }
  }}

  & label {
    ${tw`font-medium text-base text-left flex items-center w-full h-full float-right p-0`};
    color: ${({ theme }) => theme?.palette?.Form?.placeholderColor};
    background-color: ${({ theme }) => theme?.palette?.Form?.backgroundColor};
    padding: 0 1em;
    -webkit-touch-callout: none;
    user-select: none;

    &::before {
      content: '';
      border: solid transparent;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: border-width 0.3s, border-color 0.3s;
    }

    & span {
      padding:  ${({ size }) => handleSize(size)};
      position: relative;
      display: flex;
      width: 100%;
      transition: transform;
      transition-duration: 0.3s;
      transform-origin: 0% 50%;
      text-rendering: geometricPrecision;
    }

    svg {
      transition: transform;
      transition-duration: 0.3s;
    }
  }
`;

export const Error = styled.span`
  ${tw`text-base pt-2`}
  color: ${({ theme }) => theme?.palette?.Form?.error};

`;
