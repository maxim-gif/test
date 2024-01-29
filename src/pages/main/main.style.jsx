import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
  height: 100vh;
  width: 600px;
  justify-content: space-between;
  border: 2px solid grey;  
  align-items: center; 
  border-radius: 30px;
  margin-left: calc(50% - 300px);
`;

export const PageSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom:20px;
`;

export const PagesNumber = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
border: 2px solid grey;
border-radius: 50%;
`;

export const PrevButton = styled.button`
width: 30px;
height: 30px;
border: none;
border-radius: 50%;
background: #B0E0E6;    
& > img {
    width: 30px;
    height: 30px;
}
&: disabled {
    background: #C0C0C0;
}
`;

export const NextButton = styled(PrevButton)`

`;