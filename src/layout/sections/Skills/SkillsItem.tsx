import { Icon } from "@/components/Icon/Icon";

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
  margin-bottom: 40px;
  span {
    margin-top: 30px;
    /* font-family: ${({ theme }) => theme.fonts.josefinsansBold}; */
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
  }
  @media ${({ theme }) => theme.media.laptop} {
    width: calc(100% / 2);
  }

  @media ${({ theme }) => theme.media.portraitTablets} {
    .icon {
      &:before {
        position: absolute;
        width: 55px;
        height: 55px;
      }
      svg {
        width: 35px;
        height: 35px;
      }
    }
    span {
      font-size: ${({ theme }) => theme.fonts.fontSizeXs12};
    }
  }
`;
