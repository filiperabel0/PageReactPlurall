import React, { useState } from "react";

import {
  Container,
  LogImg,
  Header,
  MenuContainer,
  TitleContainer,
} from "./styles";

import LogoImg from "../../assets/plurall-logo.png";
import IconPerson from "../../assets/person.png";
import IconRede from "../../assets/rede.png";
import IconMapa from "../../assets/mapa.png";
import IconInstituicao from "../../assets/instituicao.png";

const Content: React.FC = () => {

  const [state, setState] = useState("");

  return (
    <Container>
      <Header>
        <LogImg src={LogoImg} alt="Logo Plurall" />
      </Header>
      <MenuContainer>
        <TitleContainer>
          <h1>Olá, Prof. Paulo</h1>
          <small>Preencha os campos para acessar a plataforma.</small>
        </TitleContainer>
      </MenuContainer>
      {/* DIV PERFIL */}
      <div className="Div-container">
        {/* div icon */}
        <div className="Icon">
          <img src={IconPerson} />
        </div>
        <div className="div-title-select">
          {/* div title */}
          <div className="title">
            <p>Perfil:</p>
          </div>
          {/* div select */}
          <div className="div-select">
            <select name="state" value={state} id="select">
              <option value="1">Diretoria Regional</option>
              <option value="2">Diretoria Estadual</option>
              <option value="3">Diretoria Distrital</option>
            </select>
          </div>
        </div>
      </div>
      {/* DIV REDE */}
      <div className="Div-container">
        {/* div icon */}
        <div className="Icon">
          <img src={IconRede} />
        </div>
        <div className="div-title-select">
          {/* div title */}
          <div className="title">
            <p>Rede:</p>
          </div>
          {/* div select */}
          <div className="div-select">
            <select name="state" value={state} id="select">
              <option value="1">Diretoria Regional</option>
              <option value="2">Diretoria Estadual</option>
              <option value="3">Diretoria Distrital</option>
            </select>
          </div>
        </div>
      </div>
      {/* DIV DRE */}
      <div className="Div-container">
        {/* div icon */}
        <div className="Icon">
          <img src={IconMapa} />
        </div>
        <div className="div-title-select">
          {/* div title */}
          <div className="title">
            <p>DRE | Diretoria Regional de Ensino:</p>
          </div>
          {/* div select */}
          <div className="div-select">
            <select name="state" value={state} id="select">
              <option value="1">Diretoria Regional</option>
              <option value="2">Diretoria Estadual</option>
              <option value="3">Diretoria Distrital</option>
            </select>
          </div>
        </div>
      </div>
      {/* DIV INSTITUIÇÃO */}
      <div className="Div-container">
        {/* div icon */}
        <div className="Icon">
          <img src={IconInstituicao} />
        </div>
        <div className="div-title-select">
          {/* div title */}
          <div className="title">
            <p>Perfil:</p>
          </div>
          <div className="div-select">
            {/* div select */}
            <select name="state" value={state} id="select">
              <option value="1">Diretoria Regional</option>
              <option value="2">Diretoria Estadual</option>
              <option value="3">Diretoria Distrital</option>
            </select>
          </div>
        </div>
      </div>

      <div className="div-button">
        <button className="button">Acessar</button>
      </div>
      
    {/* <Cards /> nao apareceu na screen pelo content */}
    </Container>
  );
};

export default Content;
