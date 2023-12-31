import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import UserAvatar from "./../features/authentication/UserAvatar";
import DarkModeButton from "./DarkModeButton";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 3.2rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: end;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <DarkModeButton />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
