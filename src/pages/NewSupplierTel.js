import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { LuPhone } from 'react-icons/lu'
import { IoPersonOutline, IoSearchSharp, IoCloseSharp, IoChevronForwardOutline, IoCloseCircleOutline } from 'react-icons/io5'
import NextButton from "../components/NextButton";
import CloseButton from "../components/CloseButton";
import ModalCancel from "../components/ModalCancel";


function NewSupplierTel() {

const black = {
  color: '#212324'
}

const [cancel, setCancel] = useState()


const handleModal = c =>{
  console.log(c)
  setCancel(c)
}

  return (

    <div className=" new-supplier container">
      <Header />
      <CloseButton cancel={handleModal} />
      <div className="supllier-datas">
        <div className="cad-buttons">
          <button style={black} id="name">Nome <IoChevronForwardOutline/></button>
          <button style={black} id="name">CPF <IoChevronForwardOutline/></button>
          <button >Telefone</button>
        </div>
        <label>Digite o Telefone do colaborador</label>
        <input placeholder="Telefone"></input>
      </div>
      <Link to={'/novofornecedorfrutas'}>
        <NextButton />
      </Link>
      {cancel && (<ModalCancel cancel={handleModal} type={'cancel'} />)}
      
    </div>

  );
}

export default NewSupplierTel;
