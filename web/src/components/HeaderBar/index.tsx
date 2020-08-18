import React, { useState } from "react";

import logoutIcon from "../../assets/images/icons/logout.svg";
import {
  HeaderWrapper,
  HeaderSection,
  Profile,
  Avatar,
  AvatarPlaceholder,
  ProfileUsername,
  ProfilePlaceholder,
  LogoutButton,
} from "./styles";

interface User {
  id: number;
  name: string;
  avatar: string;
}

const HeaderBar: React.FC = () => {
  const [user] = useState<User>({
    id: 1,
    name: "Felipe Decome",
    avatar: "https://github.com/felipedecome.png",
  });
  const [isUserAvatarLoaded, setIsUserAvatarLoaded] = useState<boolean>(false);
  const isUserNameSet = user.name ? true : false;

  return (
    <HeaderWrapper>
      <HeaderSection>
        <Profile to="/profile">
          <Avatar
            src={user.avatar}
            onLoad={() => setIsUserAvatarLoaded(!isUserAvatarLoaded)}
            alt="foto do usuário"
          />
          {!isUserAvatarLoaded && <AvatarPlaceholder />}

          {isUserNameSet ? (
            <ProfileUsername id="nome-usuario">{user.name}</ProfileUsername>
          ) : (
            <ProfilePlaceholder />
          )}
        </Profile>

        <LogoutButton id="logout">
          <img src={logoutIcon} alt="Sair" />
        </LogoutButton>
      </HeaderSection>
    </HeaderWrapper>
  );
};

export default HeaderBar;
