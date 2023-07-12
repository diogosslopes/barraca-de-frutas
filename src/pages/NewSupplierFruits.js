import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { LuPhone } from 'react-icons/lu'
import { IoPersonOutline, IoSearchSharp, IoCloseSharp, IoChevronForwardOutline, IoCloseCircleOutline } from 'react-icons/io5'
import NextButton from "../components/NextButton";


function NewSupplierFruits() {

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
          <button style={black} id="name">Telefone <IoChevronForwardOutline/></button>
          <button >Frutas</button>
        </div>
        <label>Escolhas as Frutas do colaborador</label>
        
      </div>
      <button>Cadastrar Fornecedor</button>
    </div>

  );
}

export default NewSupplierFruits;
