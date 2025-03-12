import { useTheme } from "@/styles/ThemeContext";
import { AppButton } from "../AppButton/AppButton";
import { Icon } from "../Icon/Icon";

export default function ThemeDarkSwitcher() {
  const { changeTheme } = useTheme();
  return (
    <AppButton onClick={changeTheme}>
      <Icon
        colorType="inverted"
        iconId="themeDark"
        width="30"
        height="30"
        viewBox="0 0 40 40"
      />
    </AppButton>
  );
}
