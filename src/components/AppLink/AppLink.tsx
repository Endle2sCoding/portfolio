import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";
interface AppLinkProps extends LinkProps {
  children: ReactNode;
}

export const AppLink = ({
  children,
  to = "/",
  ...otherProps
}: AppLinkProps) => {
  return (
    <StyledLink
      to={to}
      {...otherProps}
    >
      {children}
    </StyledLink>
  );
};

export const StyledLink=styled(Link)`
`