import { AppButton } from "../AppButton/AppButton";
import { Icon } from "../Icon/Icon";

export default function ThemeSwitcher() {
  return (
    <AppButton>
      <Icon
        colorType="inverted"
        iconId="theme"
        width="40"
        height="40"
        viewBox="0 0 40 40"
      />
    </AppButton>
  );
}
