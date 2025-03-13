import styled from "styled-components";

import { LangaugeSwitcher } from "./LangaugeSwitcher";
import ThemeDarkSwitcher from "./ThemeSwitcher";

export function Switchers() {
  return (
    <SwitchersStyled>
      <LangaugeSwitcher />
      <ThemeDarkSwitcher />
    </SwitchersStyled>
  );
}
const SwitchersStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px 10px;
  gap: 20px;

  border-radius: 25px;
`;
