import { Icon } from "@/components/Icon/Icon";
import styled from "styled-components";

export type SkillsItemType = {
  iconId: string;
  title: string;
  text?: string;
};
export const SkillsItem = ({ iconId, title, text }: SkillsItemType) => {
  return (
    <Skill>
      <Icon
        iconId={iconId}
        className="icon"
      />
      <span>{title}</span>
      <span>{text}</span>
    </Skill>
  );
};
const Skill = styled.div`
  width: calc(100% / 6);
  padding: 0 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 40px;
  .icon {
    margin-bottom: 40px;
  }
  @media (max-width: 991px) {
    width: calc(100% / 3);
  }
  @media (max-width: 575px) {
    width: calc(100% / 2);
  }
`;
