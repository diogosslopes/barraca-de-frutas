import { useState } from "react";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { LuPhone } from 'react-icons/lu'
import { IoPersonOutline, IoSearchSharp, IoCloseSharp, IoChevronForwardOutline, IoCloseCircleOutline } from 'react-icons/io5'
import NextButton from "../components/NextButton";
import { Link } from "react-router-dom";
import ModalCancel from "../components/ModalCancel";
import CloseButton from "../components/CloseButton";


function NewSupplier() {
  const red = {
    color: '#da0d1e'
  }
  const [cancel, setCancel] = useState()
  const handleModal = c =>{
    console.log(c)
    setCancel(c)
  }
  

  console.log(cancel)

  return (

    <div className=" new-supplier container">
      <Header />
      <CloseButton cancel={handleModal} />
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
      {cancel && (<ModalCancel cancel={handleModal} type={'cancel'}/>)}
    </div>

  );
}

export default NewSupplier;
