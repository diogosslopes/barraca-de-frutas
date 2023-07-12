import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { LuPhone } from 'react-icons/lu'
import { IoPersonOutline, IoSearchSharp, IoCloseSharp, IoChevronForwardOutline, IoCloseCircleOutline } from 'react-icons/io5'
import NextButton from "../components/NextButton";


function NewSupplierTel() {

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
          <button style={black} id="name">CPF <IoChevronForwardOutline/></button>
          <button >Telefone</button>
        </div>
        <label>Digite o Telefone do colaborador</label>
        <input placeholder="Telefone"></input>
      </div>
      <NextButton />
    </div>

  );
}

export default NewSupplierTel;