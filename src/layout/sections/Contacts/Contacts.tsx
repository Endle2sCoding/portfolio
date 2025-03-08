import { AppButton } from "@/components/AppButton/AppButton";
import { Container } from "@/components/Container/Container";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Title } from "@/components/Title/Title";
import { CONTACTS_ID } from "@/layout/Header/Header";
import { theme } from "@/styles/Theme";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

export const Contacts = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [message, setMessage] = useState("");
  return (
    <StyledContacts id={`${CONTACTS_ID}`}>
      <Container>
        <FlexWrapper
          directioin="column"
          align="center"
        >
          <Title>Contact</Title>
          <StyledForm>
            <Field
              required
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setName(e.currentTarget.value);
              }}
            />
            <h4>Choose a convenient type of communication</h4>
            <Field
              type="text"
              placeholder="Telegram"
              value={telegram}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setTelegram(e.currentTarget.value);
              }}
            />
            <Field
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPhone(e.currentTarget.value);
              }}
            />
            <Field
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.currentTarget.value);
              }}
            />
            <Field
              placeholder="Message"
              as={"textarea"}
              name=""
              value={message}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                setMessage(e.currentTarget.value);
              }}
            ></Field>
            <AppButton
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                const telegram_bot_token = `${
                  import.meta.env.VITE_TELEGRAM_BOT_TOKEN
                }`;
                const telegram_chat_id = `${
                  import.meta.env.VITE_TELEGRAM_BOT_ID
                }`;
                const telegram_message = `
                Name: ${name}\nTelegram: ${telegram}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
                fetch(
                  `https://api.telegram.org/bot${telegram_bot_token}/sendMessage`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      chat_id: telegram_chat_id,
                      parse_mode: "html",
                      text: telegram_message,
                    }),
                  }
                )
                  .then(() => {
                    setName("");
                    setTelegram("");
                    setPhone("");
                    setEmail("");
                    setMessage("");
                  })
                  .catch((error) => {
                    console.error("Error sending message:", error);
                  });
              }}
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
    margin-top: 30px;
  }
  &:focus-visible {
    outline: 1px solid ${theme.colors.accentedColorOpacity};
  }
`;
