import { AppButton } from "@/components/AppButton/AppButton";
import { Container } from "@/components/Container/Container";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Title } from "@/components/Title/Title";
import { CONTACTS_ID } from "@/layout/Header/Header";
import { theme } from "@/styles/Theme";
import styled from "styled-components";

export const Contacts = () => {
  return (
    <StyledContacts id={`${CONTACTS_ID}`}>
      <Container>
        <FlexWrapper
          directioin="column"
          align="center"
        >
          <Title>Contact</Title>
          <StyledForm action="#">
            <Field
              type="text"
              placeholder="Name"
            />
            <Field
              type="text"
              placeholder="Email"
            />
            <Field
              placeholder="Message"
              as={"textarea"}
              name=""
            ></Field>
            <AppButton
              type="submit"
              onClick={(e) => e.stopPropagation()}
              variant="filled"
            >
              send message
            </AppButton>
          </StyledForm>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};
const StyledContacts = styled.section``;
const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
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
  & + textarea {
    resize: none;
    min-height: 155px;
  }
  &:focus-visible {
    outline: 1px solid ${theme.colors.accentedColorOpacity};
  }
`;
