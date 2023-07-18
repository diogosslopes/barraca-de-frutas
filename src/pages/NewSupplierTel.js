import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Header from "../components/Header";
import './pages.css'
import {  IoChevronForwardOutline} from 'react-icons/io5'
import NextButton from "../components/NextButton";
import CloseButton from "../components/CloseButton";
import ModalCancel from "../components/ModalCancel";
import { Context } from "../contexts/Contexts";
import InputMasked from "../components/InputMasked";

const initialValues = {
  cpf: '',
  tel: ''
};


function NewSupplierTel() {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(false)
  const [next, setNext] = useState(false)


  const { newSupplierName, newSupplierCpf, setNewSupplierPhone } = useContext(Context)
  const black = { color: '#212324' }

  const [cancel, setCancel] = useState()


  const handleModal = c => {
    setCancel(c)
  }
  let mask = ''
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });

    setNewSupplierPhone(event.target.value)
  }
  if (values.tel.length <= 14) {
    mask = '(99) 9999-99999'
  } else {
    mask = '(99) 99999-9999'

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
          <button style={black} id="name">Nome <IoChevronForwardOutline /></button>
          <button style={black} id="name">CPF <IoChevronForwardOutline /></button>
          <button >Telefone</button>
        </div>
        <label>Digite o Telefone do colaborador</label>
        <InputMasked
          name="tel"
          value={values.tel}
          onChange={handleChange}
          mask={mask}
        />
        {error && <p className="error-message">Digite um telefone válido.</p>}
        {next && <Navigate to={'/novofornecedorfrutas'} />}
      </div>
        <NextButton data={'tel'} length={values.tel.length} function={handleNext} />
        {cancel && (<ModalCancel cancel={handleModal} type={'cancel'} page={''} />)}

    </div>

  );
}

export default NewSupplierTel;
