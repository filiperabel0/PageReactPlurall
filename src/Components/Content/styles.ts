import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .Div-container {
    display: flex;
    flex-direction: row;
    height: auto;
    border-radius: 20px;

    margin-top: 20px;

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .Icon{
    margin: 15px;

    display: grid;
  }

  .title{
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    display: grid;
  }

  #select {
    margin-right: 15px;
    padding: 5px;
    width: 350px;
    border: 1px solid #6a0dad;
    border-radius: 8px;
  }

    .button {

    margin-top: 40px;

    width: 80px;
    height: 30px;

    font-family: "Poppins", sans-serif;

    background-color: orange;
    border: none;
    border-radius: 20px;

    color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
`;

export const LogImg = styled.img`
  width: 280px;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Cards = styled.div`
  width: 40%;
  height: 50vh;
  display: flex;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 25px;
    margin: 0;
    margin-bottom: 5px;

    display: flex;
    justify-content: center;
  }

  > small {
    font-family: "Poppins", sans-serif;
    font-weight: 400;

    display: flex;
    justify-content: center;
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
`;
