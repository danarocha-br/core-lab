import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';
import { IconBaseProps } from 'react-icons';

import { tokens } from '../../../styles/designTokens';

interface UiProps {
  small?: boolean;
}
interface UiStates {
  isFocused: boolean;
  hasValue: boolean | string | undefined;
  disabled?: boolean;
  readOnly?: boolean;
  hasError?: string | boolean;
  loading?: number;
}

/**
 * Global Classes for UI State Animations
 */

const inputBorder = `
  border: 8px solid;
  border-top-width: 2.2em;
  `;

const animateIcon = `
  translateZ(1px);`;

/**
 * Styling
 */
export const Container = styled.span.attrs({
  className: 'relative flex items-center w-full align-top overflow-hidden border rounded-sm',
})<UiStates & UiProps>`
  border-color: ${({ theme }) => theme?.tokens?.form?.border};
  z-index: 1;
  opacity: ${(props) => (props.disabled || props.loading ? '0.5' : '1')};


  &:hover:not([disabled])
   {
    border-color: ${({ theme }) => theme?.tokens?.primary};
    transition: border-color 0.5s;
  }

  &:read-only:hover
   {
    border-color: ${({ theme }) => theme?.tokens?.inputBorder};
    transition: border-color 0.5s;
  }


  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${({ theme }) => theme?.tokens?.primary};
      transition: border-color 0.5s;
    `}

  ${(props) =>
    props.hasError &&
    css`
      border-color: ${({ theme }) => theme?.tokens?.form?.error};
      transition: border-color 0.5s;
    `}

  & {
    input {
      ${tw`text-lg bg-transparent w-11/12 absolute flex float-right border-none z-40 focus:outline-none`}
    color: ${({ theme }) => theme?.tokens?.form?.text};
    font-size: ${(props) =>
      props.small ? tokens.form.sizeSmall.inputTextSize : tokens.form.sizeDefault.inputTextSize};
        padding: ${(props) => (props.small ? '0.7em 1.4em 0' : '1.24em 1.4em 0')};
        -webkit-appearance: none;
        opacity: ${(props) => (props.disabled || props.loading ? '0.5' : '1')};

    ${(props) =>
      props.isFocused &&
      css`
        + label:before {
          ${inputBorder}
          border-top-width: ${props.small ? '1.28em' : '1.8em'};
          border-color: ${({ theme }) => theme?.tokens?.form?.shade};
        }

        + label > span {
          transform: ${
            props.small
              ? 'translate3d(-0.8em, -1.15em, 0) scale3d(0.75, 0.75, 1)'
              : 'translate3d(-0.8em, -1.5em, 0) scale3d(0.8, 0.8, 1)'
          };
        }

        + label > svg {
          ${animateIcon}
          transform: ${
            props.small
              ? 'translate3d(-0.3em, -1.2em, 0) scale3d(0.6, 0.6, 1)'
              : 'translate3d(-0.3em, -1.5em, 0) scale3d(0.85, 0.85, 1)'
          };

        }
      `}

    ${(props) =>
      props.hasValue &&
      css`
        + label:before {
          ${inputBorder}
          border-top-width: ${props.small ? '1.28em' : '1.8em'};
          border-color: ${({ theme }) => theme?.tokens?.form?.shade};
        }

        + label > span {
          transform: ${
            props.small
              ? 'translate3d(-0.8em, -1.15em, 0) scale3d(0.75, 0.75, 1)'
              : 'translate3d(-0.8em, -1.5em, 0) scale3d(0.8, 0.8, 1)'
          };
        }

        + label > svg {
          ${animateIcon}
          transform: ${
            props.small
              ? 'translate3d(-0.3em, -1.2em, 0) scale3d(0.6, 0.6, 1)'
              : 'translate3d(-0.3em, -1.5em, 0) scale3d(0.85, 0.85, 1)'
          };
          color: ${({ theme }) => theme?.tokens?.primary};
        }
      `}

      ${(props) =>
        props.hasError &&
        css`
        + label:before {
          ${inputBorder}
          border-top-width: ${props.small ? '1.28em' : '1.8em'};
          border-color: ${({ theme }) => theme?.tokens?.form?.shade};
        }

        + label > span {
          transform: ${
            props.small
              ? 'translate3d(-0.8em, -1.15em, 0) scale3d(0.75, 0.75, 1)'
              : 'translate3d(-0.8em, -1.5em, 0) scale3d(0.8, 0.8, 1)'
          };
        }

        + label > svg {
          ${animateIcon}
          transform: ${
            props.small
              ? 'translate3d(-0.3em, -1.2em, 0) scale3d(0.6, 0.6, 1)'
              : 'translate3d(-0.3em, -1.5em, 0) scale3d(0.85, 0.85, 1)'
          };

        }
      `}

    &[readonly] + label:before {
      ${inputBorder}
      border-top-width: ${(props) => (props.small ? '1.28em' : '1.8em')};
      border-color: ${({ theme }) => theme?.tokens?.form?.shade};
    }

    &:disabled + label > span,
    &[readonly] + label > span {
      transform: ${(props) =>
        props.small
          ? 'translate3d(-0.4em, -1.15em, 0) scale3d(0.75, 0.75, 1)'
          : 'translate3d(-0.4em, -1.5em, 0) scale3d(0.8, 0.8, 1)'};
    }

    &:focus + label > svg:first-child,
    &:disabled + label > svg:first-child,
    &[readonly] + label > svg:first-child {
      ${animateIcon}
      transform: ${(props) =>
        props.small
          ? 'translate3d(-0.3em, -1.2em, 0) scale3d(0.6, 0.6, 1)'
          : 'translate3d(-0.3em, -1.5em, 0) scale3d(0.85, 0.85, 1)'};
      color: ${({ theme }) => theme?.tokens?.primary};
    }

    &:disabled {
      cursor: not-allowed;
    }

    &[readonly] + label:before {
      background-color: ${({ theme }) => theme?.tokens?.form?.shade};
    }

  }}

  & label {
    ${tw`font-medium text-left flex items-center w-full h-full float-right p-0`};
    font-size:  ${(props) =>
      props.small ? tokens.form.sizeSmall.inputTextSize : tokens.form.sizeDefault.inputTextSize};
    color: ${({ theme }) => theme?.tokens?.form?.placeholder};
    background-color: ${({ theme }) => theme?.tokens?.form?.background};
    padding: 0 1em;
    -webkit-touch-callout: none;
    user-select: none;

    &::before {
      ${tw`border-solid border-transparent absolute top-0 left-0 w-full h-full`};
      content: '';
      transition: border-width 0.3s, border-color 0.3s;
    }

    & span {
      ${tw`flex w-full relative`};
      padding: ${(props) => (props.small ? '1.1em 1em' : '1.65em 1em')};
      transition: transform;
      transition-duration: 0.3s;
      transform-origin: 0% 50%;
      text-rendering: geometricPrecision;
    }

    svg:first-child {
      transition: transform;
      transition-duration: 0.3s;
    }

    svg:last-child {
      ${tw`absolute`};
      right: 0px;
    }
  }
  .spinner {
    ${tw`absolute`};
    right: 8px;
    top: 5px;
  }

  input:disabled + label:before {
    border-color: ${({ theme }) => theme?.tokens?.form?.background};
  }

  .input__addon {
    ${tw`flex items-center text-sm font-medium absolute right-0 h-full px-3`};
    color: ${({ theme }) => theme?.tokens?.form?.textAddon};
    background-color: ${({ theme }) => theme?.tokens?.form?.background};
    border-left: 7px solid;
    border-left-color: ${({ theme }) => theme?.tokens?.form?.shade} !important;
  }

`;

export const Error = styled.span`
  ${tw`text-xs pt-1`}
  color: ${({ theme }) => theme?.tokens?.form?.error};
`;
