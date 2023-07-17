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
import InputMasked from "../components/InputMasked";

const initialValues = {
  cpf: '',
  tel: ''
};


function NewSupplierCpf() {
  const [values, setValues] = useState(initialValues);
  const black = { color: '#212324' }
  const { newSupplierName, setNewSupplierCpf } = useContext(Context)


  const [cancel, setCancel] = useState()


  const handleModal = c => {
    console.log(c)
    setCancel(c)
  }

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    setNewSupplierCpf(event.target.value)
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
        {/* <input id="cpf" placeholder="CPF" onChange={(e) => { setNewSupplierCpf(e.target.value) }}></input> */}
        <InputMasked
          name="cpf"
          mask="999.999.999-99"
          value={values.cpf}
          onChange={handleChange}
          autoFocus
          />
      </div>
      <Link to={'/novofornecedortel'}>
        <NextButton />
      </Link>
      {cancel && (<ModalCancel cancel={handleModal} type={'cancel'} page={''} />)}
    </div>

  );
}

export default NewSupplierCpf;
