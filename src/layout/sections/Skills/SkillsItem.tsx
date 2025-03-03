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
      <h5>{title}</h5>
      <span>{text}</span>
    </Skill>
  );
};
const Skill = styled.div`
  width: calc(100% / 6);
  padding: 0 0 40px;
  .icon {
    margin-bottom: 40px;
  }
  h3 {
    padding-bottom: 20px;
  }
  @media (max-width: 767px) {
    width: calc(100% / 3);
  }
`;
