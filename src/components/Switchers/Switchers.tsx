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
  position: fixed;
  bottom: 10px;
  left: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px 10px;
  gap: 20px;
  background: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: 25px;
`;
