import { AppButton } from "@/components/AppButton/AppButton";
import { AppInput } from "@/components/AppInput/AppInput";
import { Container } from "@/components/Container/Container";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Title } from "@/components/Title/Title";
import { CONTACTS_ID } from "@/layout/Header/Header";
import { useState } from "react";
import styled from "styled-components";

export const Contacts = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  return (
    <StyledContacts id={`${CONTACTS_ID}`}>
      <Container>
        <FlexWrapper
          directioin="column"
          align="center"
        >
          <Title>Contact</Title>
          <StyledForm
            onSubmit={(e) => {
              e.preventDefault();
              const telegram_bot_token = `${
                import.meta.env.VITE_TELEGRAM_BOT_TOKEN
              }`;
              const telegram_chat_id = `${
                import.meta.env.VITE_TELEGRAM_BOT_ID
              }`;
              const telegram_message = `
                Name: ${name}\nTelegram: ${telegram}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
              if (
                name !== "" &&
                (telegram !== "" || phone !== "" || email !== "") &&
                message !== ""
              ) {
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
              }
            }}
          >
            <AppInput
              value={name}
              onChange={(value: string) => {
                setName(value);
              }}
              placeholder="Name"
            />
            <FormTitle>Fill in one of the fields to contact</FormTitle>
            <AppInput
              error={error}
              setError={(value: string) => setError(value)}
              value={telegram}
              onChange={(value: string) => {
                setTelegram(value);
              }}
              placeholder="Telegram"
            />
            <AppInput
              error={error}
              setError={(value: string) => setError(value)}
              value={phone}
              onChange={(value: string) => {
                setPhone(value);
              }}
              placeholder="Phone"
            />
            <AppInput
              error={error}
              setError={(value: string) => setError(value)}
              value={email}
              onChange={(value: string) => {
                setEmail(value);
              }}
              placeholder="Email"
            />

            <AppInput
              as={"textarea"}
              value={message}
              onChange={(value: string) => {
                setMessage(value);
              }}
              placeholder="Message"
            />

            <AppButton
              type="submit"
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
const FormTitle = styled.h4`
  margin-top: 30px;
`;
