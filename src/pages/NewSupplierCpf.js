import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { LuPhone } from 'react-icons/lu'
import { IoPersonOutline, IoSearchSharp, IoCloseSharp, IoChevronForwardOutline, IoCloseCircleOutline } from 'react-icons/io5'
import NextButton from "../components/NextButton";
import ModalCancel from "../components/ModalCancel";
import CloseButton from "../components/CloseButton";
import { Context } from "../contexts/Contexts";


function NewSupplierCpf() {

const black = {color: '#212324'}
const { newSupplierName, setNewSupplierCpf } = useContext(Context)


const [cancel, setCancel] = useState()


const handleModal = c =>{
  console.log(c)
  setCancel(c)
}

console.log(newSupplierName)

  return (

    <div className=" new-supplier container">
      <Header />
        <CloseButton cancel={handleModal} />
      <div className="supllier-datas">
        <div className="cad-buttons">
          <Link to={'/novofornecedor'}><button style={black} id="name">Nome <IoChevronForwardOutline/></button></Link>
          <button id="cpf">CPF</button>
        </div>
        <label>Digite o CPF do colaborador</label>
        <input placeholder="Nome"></input>
      </div>
      <Link to={'/novofornecedortel'}>
        <NextButton />
      </Link>
      {cancel && (<ModalCancel cancel={handleModal} type={'cancel'}/>)}
    </div>

  );
}

export default NewSupplierCpf;
