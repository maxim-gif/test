import * as S from "./main.style";
import { useState } from "react";
import { Search } from "../../components/search/search";
import { ListUsers } from "../../components/listUsers/listUsers";

export const Main = () => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <S.Container>
      <div>
      <Search pageNumber={pageNumber}/>
      <ListUsers />
      </div>
      <S.PageSwitch>
          <S.PrevButton disabled={pageNumber===1} onClick={() => {setPageNumber(pageNumber-1)}}>
            <img src="/prev.svg" alt="Previous"></img>
          </S.PrevButton>
          <S.PagesNumber>{pageNumber}</S.PagesNumber>
          <S.NextButton onClick={() => {setPageNumber(pageNumber+1)}}>
            <img src="/next.svg" alt="Next"></img>
          </S.NextButton>
      </S.PageSwitch>
    </S.Container>
  );
};
