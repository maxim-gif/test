import * as S from "./listUsersStyle";
import { useSelector } from "react-redux";
import { useState } from "react";

export const ListUsers = () => {
  const users = useSelector((state) => state.users.users);
  const [activeUser, setActiveUser] = useState(0);

  const usersHtml = users?.map((user) => (
    <S.UserItem key={user.id} onClick={() => {setActiveUser(activeUser===user.id?0:user.id)}}>
      <S.UserName>{user.login}</S.UserName>
      <S.UserInfo $active={activeUser===user.id?true:false}>
        <S.UserPhoto src={user.avatar_url}></S.UserPhoto>
        <S.UserLink target="_blank" href={user.html_url}>Перейти</S.UserLink>
      </S.UserInfo>
    </S.UserItem>
  ));

  return <S.ListBox>{usersHtml}</S.ListBox>;
};
