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
      <h3>{title.toUpperCase()}</h3>
      <span>{text}</span>
    </Skill>
  );
};
const Skill = styled.div`
  width: calc(100% / 3);
  padding: 30px 20px 40px;
  .icon {
    margin-bottom: 40px;
  }
  h3 {
    padding-bottom: 20px;
  }
`;
