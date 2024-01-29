import * as S from "./search.style";
import PropTypes from 'prop-types'
import { useState } from "react";
import { getDataUser } from "../../api/api";
import { useDispatch } from "react-redux";
import { setUsers } from "../../store/slices/search";
import { useEffect } from "react";

export const Search = ({pageNumber}) => {
  const [textSearch, setTextSearch] = useState("");
  const [disableFilter, setDisableFilter] = useState(true);
  const [filter, setFilter] = useState("default");
  const dispatch = useDispatch();

  const handleGetUser = async () => {
    if (textSearch !== "") {
        const response = await getDataUser(textSearch, filter, pageNumber);
        const users = response.items;
    
        dispatch(setUsers(users));
    }
 
  };

  useEffect(() => {
    if (textSearch !== "") {
        handleGetUser()
    }
    
}, [filter, pageNumber])

  return (
    <S.SearchBox>
      <S.Search
        value={textSearch}
        onChange={(e) => setTextSearch(e.target.value)}
      ></S.Search>
      <S.Filter
        onClick={() => {
          setDisableFilter(!disableFilter);
        }}
      >
        <img width="30" height="30" src="/filter.svg"></img>
        <span>{filter==="default"?"По умолчанию":filter==="asc"?"По убыванию":"По возрастанию"}</span>
        <S.FilterList $disableFilter={disableFilter}>
        <span
            onClick={() => {
              setDisableFilter(!disableFilter);
              setFilter("default")
            }}
          >
            По умолчанию
          </span>
          <span
            onClick={() => {
              setDisableFilter(!disableFilter);
              setFilter("asc")
            }}
          >
            По убыванию
          </span>
          <span
            onClick={() => {
              setDisableFilter(!disableFilter);
              setFilter("desc")
            }}
          >
            По возрастанию
          </span>
        </S.FilterList>
      </S.Filter>
      <S.SearchButton onClick={handleGetUser}>Найти</S.SearchButton>
    </S.SearchBox>
  );
};
Search.propTypes = {
    pageNumber: PropTypes.number.isRequired,
}