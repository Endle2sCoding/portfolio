import { AppButton } from "@/components/AppButton/AppButton";
import { Container } from "@/components/Container/Container";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Title } from "@/components/Title/Title";
import { CONTACTS_ID } from "@/layout/Header/Header";
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
              id="textarea"
            ></Field>
            <AppButton
              type="submit"
              onClick={(e) => e.stopPropagation()}
              variant="filed"
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
  margin: 0 auto;
`;

const Field = styled.input`
  display: block;
  width: 100%;
  padding: 7px 15px;
  background: var(--bg-primary);

  color: rgb(73, 80, 87);
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 5%;

  box-sizing: border-box;
  border: 1px solid rgb(74, 74, 74);
  margin-bottom: 16px;
  resize: none;
  &#textarea {
    min-height: 155px;
  }
`;
