import { ChangeEvent } from "react";
import styled, { css } from "styled-components";

export const AppInput = ({
  value,
  onChange,
  placeholder,
  as,
  error,
  errorMessage,
  setError,
  disabled,
}: {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  as?: string;
  error: string;
  setError: (value: string) => void;
  disabled?: boolean;
  errorMessage: string;
}) => {
  return (
    <FieldWrapper>
      <ErrorMessage $error={error}>{error}</ErrorMessage>
      <Field
        $disabled={disabled}
        placeholder={placeholder}
        as={as}
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          onChange(e.currentTarget.value);
        }}
        onBlur={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          if (e.currentTarget.value === "") {
            setError(error || errorMessage);
          }
        }}
        onFocus={() => {
          setError("");
        }}
      ></Field>
    </FieldWrapper>
  );
};
const FieldWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  textarea {
    min-height: 155px;
    resize: none;
  }
`;
const Field = styled.input<{ $disabled?: boolean }>`
  width: 100%;
  padding: 7px 15px;
  box-sizing: border-box;
  border: 1px solid rgb(74, 74, 74);
  background: ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.primaryColor};
  outline: none;
  overflow-y: auto;
  word-break: break-all;
  font-family: inherit;
  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.accentedColorOpacity};
  }
  margin-top: 10px;
  opacity: ${(props) =>
    props.$disabled === true
      ? `${({ theme }) => theme.opacity.opacityDisabled}`
      : `1`};
`;
const ErrorMessage = styled.div<{ $error: string }>`
  color: ${({ theme }) => theme.colors.errorColor};
  position: absolute;
  top: -11px;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity linear ${({ theme }) => theme.delay.transitionDelay};
  ${(props) =>
    props.$error === ""
      ? css`
          transition: opacity linear
            ${({ theme }) => theme.delay.transitionDelay};
          opacity: 0;
        `
      : css`
          transition: opacity linear
            ${({ theme }) => theme.delay.transitionDelay};
          z-index: 1;
          opacity: 1;
        `}
`;
