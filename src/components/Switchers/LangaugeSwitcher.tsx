import { AppButton } from "../AppButton/AppButton";
import { useTranslation } from "react-i18next";
export function LangaugeSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <AppButton
      variant="theme"
      onClick={() => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
      }}
      textTransform="capitalize"
    >
      {t("lang")}
    </AppButton>
  );
}
