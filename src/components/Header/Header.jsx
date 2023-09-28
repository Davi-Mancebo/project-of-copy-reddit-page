import React from "react";
import headerStyles from "./HeaderStyled";
import mainIcon from "../../assets/reddit-logo.png";
import { AiOutlineSearch } from "react-icons/ai"; // Importe o ícone AiOutlineSearch
import { IoMdCloseCircle } from "react-icons/io";
import { BsQrCodeScan } from "react-icons/bs";
import userIcon from "../../assets/communityIcon.png";
import styled from "styled-components";

export default function Header() {
  return (
    <headerStyles.HeaderPageContainer>
      <img src={mainIcon} alt="Reddit Logo" />
      <headerStyles.SearchBarContainer>
        <StyledSearchIcon />
        <div className="redditUser">
          <img src={userIcon} />
          <h1>r/pokemon</h1>
          <StyledCloseButton />
        </div>
        <input type="text" placeholder="Search Community" />
      </headerStyles.SearchBarContainer>
      <headerStyles.LoginContainer>
        <div className="downloadApp">
          <BsQrCodeScan></BsQrCodeScan>
          Baixar app
        </div>
        <div className="orangeBox">Entrar</div>
        <div className="points">...</div>
      </headerStyles.LoginContainer>
    </headerStyles.HeaderPageContainer>
  );
}

const StyledSearchIcon = styled(AiOutlineSearch)`
  color: #ffffff;
`;
const StyledCloseButton = styled(IoMdCloseCircle)`
  color: #ffffff;
  border-radius: 50%;
  width: 25px;

  &:hover {
    background-color: #253941; /* Altera a cor de fundo no hover */
    cursor: pointer;
  }
`;
