import { AppButton } from "@/components/AppButton/AppButton";
import { AppInput } from "@/components/AppInput/AppInput";
import { Container } from "@/components/Container/Container";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { SuccessMessage } from "@/components/SuccessMessage/SuccessMessage";
import { Title } from "@/components/Title/Title";
import { CONTACTS_ID } from "@/layout/Header/Header";
import { theme } from "@/styles/Theme";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const Contacts = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  return (
    <StyledContacts id={`${CONTACTS_ID}`}>
      <Container>
        <FlexWrapper
          directioin="column"
          align="center"
        >
          <Title>{t(CONTACTS_ID)}</Title>
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
                setLoading(true);
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
                  })
                  .finally(() => setTimeout(() => setLoading(false), 1500));
              }
            }}
          >
            <SuccessMessage loading={loading} />
            <AppInput
              errorMessage={t("Name can not be empty")}
              error={nameError}
              disabled={loading}
              value={name}
              onChange={(value: string) => {
                setName(value);
              }}
              setError={(value: string) => setNameError(value)}
              placeholder={t("Name")}
            />
            <FormTitle $loading={loading}>
              {t("Fill in one of the fields to contact")}
            </FormTitle>
            <AppInput
              disabled={loading}
              error={error}
              errorMessage={t("Fill in one of the fields to contact")}
              setError={(value: string) => setError(value)}
              value={telegram}
              onChange={(value: string) => {
                setTelegram(value);
              }}
              placeholder={t("Telegram")}
            />
            <AppInput
              errorMessage={t("Fill in one of the fields to contact")}
              disabled={loading}
              error={error}
              setError={(value: string) => setError(value)}
              value={phone}
              onChange={(value: string) => {
                setPhone(value);
              }}
              placeholder={t("Phone")}
            />
            <AppInput
              errorMessage={t("Fill in one of the fields to contact")}
              disabled={loading}
              error={error}
              setError={(value: string) => setError(value)}
              value={email}
              onChange={(value: string) => {
                setEmail(value);
              }}
              placeholder={t("Email")}
            />

            <AppInput
              errorMessage={t("Message can not be empty")}
              error={messageError}
              setError={(value: string) => setMessageError(value)}
              disabled={loading}
              as={"textarea"}
              value={message}
              onChange={(value: string) => {
                setMessage(value);
              }}
              placeholder={t("Message")}
            />

            <AppButton
              onClick={() => {
                if (name === "") {
                  setNameError(t("Name can not be empty"));
                }
                if (message === "") {
                  setMessageError(t("Message can not be empty"));
                }
                if (phone === "" && email === "" && telegram === "") {
                  setError(t("Fill in one of the fields to contact"));
                }
              }}
              disabled={loading}
              type="submit"
              variant="filled"
            >
              {t("send message")}
            </AppButton>
          </StyledForm>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};
const StyledContacts = styled.section``;
const StyledForm = styled.form`
  position: relative;
  z-index: 0;
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const FormTitle = styled.h4<{ $loading?: boolean }>`
  margin-top: 30px;
  opacity: ${(props) =>
    props.$loading === true ? `${theme.opacity.opacityDisabled}` : `1`};
`;
