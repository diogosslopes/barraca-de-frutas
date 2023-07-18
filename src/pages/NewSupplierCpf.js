import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Header from "../components/Header";
import './pages.css'
import {  IoChevronForwardOutline } from 'react-icons/io5'
import NextButton from "../components/NextButton";
import ModalCancel from "../components/ModalCancel";
import CloseButton from "../components/CloseButton";
import { Context } from "../contexts/Contexts";
import InputMasked from "../components/InputMasked";

const initialValues = {
  cpf: '',
  tel: ''
};


function NewSupplierCpf() {
  const [values, setValues] = useState(initialValues);
  const black = { color: '#212324' }
  const { newSupplierName, setNewSupplierCpf } = useContext(Context)
  const [error, setError] = useState(false)
  const [next, setNext] = useState(false)


  const [cancel, setCancel] = useState()


  const handleModal = c => {
    setCancel(c)
  }

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    setNewSupplierCpf(event.target.value)
    
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
          <Link to={'/novofornecedor'}><button style={black} id="name">Nome <IoChevronForwardOutline /></button></Link>
          <button id="cpf">CPF</button>
        </div>
        <label>Digite o CPF do colaborador</label>
        <InputMasked
          name="cpf"
          mask="999.999.999-99"
          value={values.cpf}
          onChange={handleChange}
          
          />
          {error && <p className="error-message">Digite um CPF válido.</p>}
          {next && <Navigate to={'/novofornecedortel'}/>}
      </div>
        <NextButton data={'cpf'} length={values.cpf.length} function={handleNext} />
      {cancel && (<ModalCancel cancel={handleModal} type={'cancel'} page={''} />)}
    </div>

  );
}

export default NewSupplierCpf;
