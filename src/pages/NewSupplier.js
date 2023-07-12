import { useState } from "react";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { LuPhone } from 'react-icons/lu'
import { IoPersonOutline, IoSearchSharp, IoCloseSharp, IoChevronForwardOutline, IoCloseCircleOutline } from 'react-icons/io5'
import NextButton from "../components/NextButton";
import { Link } from "react-router-dom";


function NewSupplier() {

  const red = {
    color: '#da0d1e'
  }

  return (

    <div className=" new-supplier container">
      <Header />
        <div className="close">
          <IoCloseSharp />
        </div>
      <div className="supllier-datas">
        <div className="cad-buttons">
          <button >Nome</button>
        </div>
        <label>Digite o nome do colaborador</label>
        <input placeholder="Nome"></input>
      </div>
      <Link to={'/novofornecedorcpf'}>
        <NextButton />
      </Link>
    </div>

  );
}

export default NewSupplier;
