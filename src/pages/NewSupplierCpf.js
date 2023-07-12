import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { LuPhone } from 'react-icons/lu'
import { IoPersonOutline, IoSearchSharp, IoCloseSharp, IoChevronForwardOutline, IoCloseCircleOutline } from 'react-icons/io5'
import NextButton from "../components/NextButton";


function NewSupplierCpf() {

const black = {
  color: '#212324'
}

  return (

    <div className=" new-supplier container">
      <Header />
        <div className="close">
          <IoCloseSharp />
        </div>
      <div className="supllier-datas">
        <div className="cad-buttons">
          <button style={black} id="name">Nome <IoChevronForwardOutline/></button>
          <button id="cpf">CPF</button>
        </div>
        <label>Digite o CPF do colaborador</label>
        <input placeholder="Nome"></input>
      </div>
      <Link to={'/novofornecedortel'}>
        <NextButton />
      </Link>
    </div>

  );
}

export default NewSupplierCpf;
