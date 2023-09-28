import styled from "styled-components";

const HeaderPageContainer = styled.header`
  font-family: Arial, Helvetica, sans-serif;
  width: auto;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid #242c2e;

  h1 {
    font-family: "Passion One";
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 54px;
    letter-spacing: 0.05em;
    color: white;
    padding-left: 10px;
  }
  img {
    width: 100px;
  }
`;

const SearchBarContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 0px 15px;
  gap: 10px;
  background-color: #19262b;
  height: 40px;
  width: 50%;
  border-radius: 25px;
  display: flex;
  transition: background-color 0.3s; /* Adiciona uma transição suave na mudança de cor de fundo */
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  input{
    font-family: Arial, Helvetica, sans-serif;
    ::placeholder{
      font-family: Arial, Helvetica, sans-serif;
    }
  }
  .redditUser {
    display: flex;
    align-items: center;
    width: 25%;
    height: 30px;
    background-color: #304248;
    border-radius: 25px;
    padding: 0px 5px;
    h1 {
      font-family: Arial, Helvetica, sans-serif;
      color: #f2f2f2;
      font-size: 12px;
      margin-left: -3px;
    }
    img {
      width: 20px;
      border-radius: 50%;
    }
  }
  &:hover {
    background-color: #253941; /* Altera a cor de fundo no hover */
    font-style: inherit;
    font-weight: 100;
  }


  input {
    border: none;
    outline: none; /* Remove a borda e o destaque padrão no foco */
    background: transparent;
    color: #fff;
    padding: 0.5rem;
    width: 60%;

    border-radius: 25px;
  }
`;
const LoginContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 20%;
  color: #ffffff;
  font-size: 13px;
  .orangeBox {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d93a00;
    height: 40px;
    width: 64px;
    border-radius: 25px;
    transition: background-color 0.3s; /* Adiciona uma transição suave na mudança de cor de fundo */

    &:hover {
      background-color: #962900; /* Altera a cor de fundo no hover */
    }
  }
  .downloadApp {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #19262b;
    height: 40px;
    width: 121px;
    border-radius: 25px;
    gap: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #253941; /* Altera a cor de fundo no hover */
    }
  }
  .points {
    font-size: 20px;
    color: #ffffff;
    width: 20px;
  }
`;

const headerStyles = {
  HeaderPageContainer,
  SearchBarContainer,
  LoginContainer,
};
export default headerStyles;
