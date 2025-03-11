import { AppButton } from "../AppButton/AppButton";
import { useTranslation } from "react-i18next";
export function LangaugeSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <AppButton
      style={{ letterSpacing: "1.5px" }}
      colorType={"inverted"}
      onClick={() => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
      }}
      textTransform="capitalize"
    >
      {t("lang")}
    </AppButton>
  );
}
