import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Search = styled.input`
  width: 200px;
  height: 50px;
  border: 2px solid grey;
  border-radius: 6px;
  padding-left: 10px;
`;
export const SearchButton = styled.button`
  width: 100px;
  height: 50px;
  border: 2px solid grey;
  border-radius: 16px;
`;
export const Filter = styled.div`
  position: relative;
  display: flex;
  border-radius: 16px;
  gap: 5px;
  align-items: center;
  width: 165px;
  height: 50px;
  border: 2px solid grey;
  font-size: 15px;
  padding-left: 5px;
  & {
    line-height: 50px;
  }
`;
export const FilterList = styled.div`
  display: ${({ $disableFilter }) => ($disableFilter ? "none" : "flex")};
  flex-direction: column;
  top: 50px;
  position: absolute;
  width: 165px;
  height: 150px;
  border: 2px solid grey;
  border-radius: 16px;
  font-size: 15px;
  align-items: center;
`;
