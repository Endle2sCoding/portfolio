import { AppLink } from "@/components/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const NotFounPage = () => {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledTitle>{t("Page not found")}</StyledTitle>
      <AppLink
        variant="filled"
        to="/"
      >
        {t("Home")}
      </AppLink>
    </StyledContainer>
  );
};

export default NotFounPage;

const StyledContainer = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});
  display: flex;
  gap: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledTitle = styled.h2`
  text-transform: capitalize;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.fontSize4xl36};
`;
