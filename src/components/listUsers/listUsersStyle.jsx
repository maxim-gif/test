import styled from "styled-components";

export const UserItem = styled.div`

`;

export const UserName = styled.div`

`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

`;
export const ItemList = styled.div`
  display: flex;
  gap: 20px;
`;

export const UserInfo = styled.div`
  display: ${({ $active }) => ($active ? "flex" : "none")};
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  background: #B0E0E6;
 
`;
export const UserPhoto = styled.img`
width: 50px;
height: 50px;
`;
export const UserLink = styled.a`


`;