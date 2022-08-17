import React from "react";

import { Container } from "./styles";

import LogoImg from "../../assets/plurall-logo.png";
import IconPerson from "../../assets/person.png";

const Cards: React.FC = () => {
  return (
    <Container>
      <div className="Div-container">
        <div className="Icon-Person">
          <img src={IconPerson} />
        </div>
        <div className="div-title-select">
          <div className="title">
            <p>Perfil:</p>
          </div>
          <div className="div-select">
            <select name="estado" id="select">
              <option value="1">Diretoria Regional</option>
              <option value="2">Diretoria Estadual</option>
              <option value="3">Diretoria Distrital</option>
            </select>
          </div>
        </div>
      </div>
    </Container>
  );
};

// <Cards /> nao apareceu na screen pelo content

export default Container;