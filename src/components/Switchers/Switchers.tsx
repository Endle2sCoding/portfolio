import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";
import { LangaugeSwitcher } from "./LangaugeSwitcher";
import { theme } from "@/styles/Theme";

export function Switchers() {
  return (
    <SwitchersStyled>
      <LangaugeSwitcher />
      {/* <ThemeSwitcher /> */}
    </SwitchersStyled>
  );
}
const SwitchersStyled = styled.div`
  position: fixed;
  bottom: 25px;
  left: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px 10px;
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.bgPrimary};
  border-radius: 25px;
`;
