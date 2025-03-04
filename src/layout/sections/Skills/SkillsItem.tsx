import { Icon } from "@/components/Icon/Icon";
import { theme } from "@/styles/Theme";
import styled from "styled-components";

export type SkillsItemType = {
  iconId: string;
  title: string;
};
export const SkillsItem = ({ iconId, title }: SkillsItemType) => {
  return (
    <Skill>
      <Icon
        variant="bgSquare"
        iconId={iconId}
        className="icon"
      />
      <span>{title}</span>
    </Skill>
  );
};
const Skill = styled.div`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 80px;
  span {
    margin-top: 50px;
    font-family: ${theme.fonts.josefinsansBold};
  }
  @media (max-width: ${theme.media.laptop}) {
    width: calc(100% / 2);
  }

  @media (max-width: ${theme.media.portraitTablets}) {
    .icon {
      svg {
        width: 30px;
        height: 30px;
      }
      &:before {
        position: absolute;
        width: 50px;
        height: 50px;
      }
    }
    span {
      font-size: ${theme.fonts.fontSizeXs};
    }
  }
`;
