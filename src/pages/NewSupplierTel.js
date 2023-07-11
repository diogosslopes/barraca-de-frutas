import { useState } from "react";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { LuPhone } from 'react-icons/lu'
import { IoPersonOutline, IoSearchSharp, IoCloseSharp, IoChevronForwardOutline, IoCloseCircleOutline } from 'react-icons/io5'


function NewSupplierTel() {

const black = {
  color: '#212324'
}

  return (

    <div className="supplier-container new-supplier">
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
      <MenuBottom />
    </div>

  );
}

export default NewSupplierTel;
