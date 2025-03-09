import { theme } from "@/styles/Theme";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

export const AppInput = ({
  value,
  onChange,
  placeholder,
  as,
  error,
  setError,
}: {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  as?: string;
  error?: string;
  setError?: (value: string) => void;
}) => {
  const [inputError, setInputError] = useState("");
  return (
    <FieldWrapper>
      {(error || inputError) && (
        <ErrorMessage>{error || inputError}</ErrorMessage>
      )}
      <Field
        placeholder={placeholder}
        as={as}
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          onChange(e.currentTarget.value);
        }}
        onBlur={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          if (e.currentTarget.value === "") {
            if (setError) {
              setError?.("Fill in one of the fields to contac");
            } else {
              setInputError(`${placeholder} can not be empty`);
            }
          }
        }}
        onFocus={() => {
          setInputError("");
          setError?.("");
        }}
      ></Field>
    </FieldWrapper>
  );
};
const FieldWrapper = styled.div`
  position: relative;
  width: 100%;
  textarea {
    min-height: 155px;
    resize: none;
  }
`;
const Field = styled.input`
  width: 100%;
  padding: 7px 15px;
  box-sizing: border-box;
  border: 1px solid rgb(74, 74, 74);
  background: ${theme.colors.bgSecondary};
  color: ${theme.colors.primaryColor};
  outline: none;
  overflow-y: auto;
  word-break: break-all;
  font-family: inherit;
  &:focus-visible {
    outline: 1px solid ${theme.colors.accentedColorOpacity};
  }
  margin-top: 10px;
`;
const ErrorMessage = styled.div`
  color: ${theme.colors.errorColor};
  position: absolute;
  top: -11px;
  left: 50%;
  transform: translateX(-50%);
`;
