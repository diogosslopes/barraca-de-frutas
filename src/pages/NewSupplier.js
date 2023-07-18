import { useContext, useState } from "react";
import Header from "../components/Header";
import './pages.css'
import NextButton from "../components/NextButton";
import { Link, Navigate } from "react-router-dom";
import ModalCancel from "../components/ModalCancel";
import CloseButton from "../components/CloseButton";
import { Context } from "../contexts/Contexts";


function NewSupplier() {
  const { newSupplierName, setNewSupplierName, show } = useContext(Context)
  const [supplier, setSupplier] = useState('')
  const [cancel, setCancel] = useState()
  const [error, setError] = useState(false)
  const [next, setNext] = useState(false)
  
  const handleModal = c => {
    setCancel(c)
  }
  let suppliers = []
  
  suppliers = JSON.parse(localStorage.getItem('suppliers'))

  function handleChange(e){
    setNewSupplierName(e)
    setSupplier(e)
  }

  function handleNext(error, next) {
    setError(error)
    setNext(next)
    }

  


  return (

    <div className=" new-supplier container">
      <Header />
      <CloseButton cancel={handleModal} />
      <div className="supllier-datas">
        <div className="cad-buttons">
          <button >Nome</button>
        </div>
        <label>Digite o nome do colaborador</label>
        <input autoFocus placeholder="Nome" onChange={(e)=>{handleChange(e.target.value)}}></input>
        {error && <p className="error-message">Nome é obrigatorio.</p>}
          {next && <Navigate to={'/novofornecedorcpf'}/>}
      </div>
        <NextButton data={'name'} length={supplier.length} function={handleNext} />
      
      {cancel && (<ModalCancel cancel={handleModal} type={'cancel'} page={''} />)}
    </div>

  );
}

export default NewSupplier;
