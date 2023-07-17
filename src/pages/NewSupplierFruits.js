import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import './pages.css'
import { LuPhone } from 'react-icons/lu'
import { IoPersonOutline, IoSearchSharp, IoCloseSharp, IoChevronForwardOutline, IoCloseCircleOutline } from 'react-icons/io5'
import NextButton from "../components/NextButton";
import celpng from '../images/Celular.png'
import CloseButton from "../components/CloseButton";
import ModalCancel from "../components/ModalCancel";
import { Context } from "../contexts/Contexts";
import FruitsList from "../components/FruitsList";


function NewSupplierFruits() {

  const { newSupplierName, newSupplierCpf, newSupplierPhone, setNewSupplierFruits } = useContext(Context)
  const [endForm, setEndForm] = useState(false)
  const black = { color: '#212324' }
  let fruitList = []
  let newSupplier = []


  let suppliers = JSON.parse(localStorage.getItem('suppliers')) || []
  const fruitsList = JSON.parse(localStorage.getItem('fruitsList')) || []


  console.log(suppliers)


  const [cancel, setCancel] = useState()


  const handleModal = c => {
    console.log(c)
    setCancel(c)
  }



  function handleFruits(f) {
    fruitList.push(f)

  }

  function handleNewSupplier() {
    newSupplier = {
      name: newSupplierName,
      cpf: newSupplierCpf,
      phone: newSupplierPhone,
      fruits: fruitList
    }

    console.log(newSupplier)
    save()
    setEndForm(true)
  }

  function save() {
    suppliers.push(newSupplier)
    localStorage.setItem('suppliers', JSON.stringify(suppliers))
  }

  return (

    <div className=" new-supplier container">
      <Header />
      <Link to={'/'}>
        <CloseButton cancel={handleModal} />
      </Link>

      {endForm === false ?

        <>
          <div className="supllier-datas">
            <div className="cad-buttons">
              <button style={black} id="name">Nome <IoChevronForwardOutline /></button>
              <button style={black} id="name">CPF <IoChevronForwardOutline /></button>
              <button style={black} id="name">Telefone <IoChevronForwardOutline /></button>
              <button >Frutas</button>
            </div>
            <label>Escolhas as Frutas do colaborador</label>
            <div className="fruits-list">
              <FruitsList fruits={handleFruits} />
            </div>
          </div>
<button id="btn-end-supplier" onClick={handleNewSupplier}>Cadastrar Fornecedor</button>
          {cancel && (<ModalCancel cancel={handleModal} type={'cancel'} page={''} />)}
        </>
        :
        <div>
          <div className="end-form">
            <img src={celpng} id="endimg"></img>
            <h6>Fornecedor cadastrado</h6>
            <label>Você cadastrou o fornecedor Lorem Ipsum dolor com sucesso!!</label>
          </div>
          <Link to={'/'}><button id="btn-end-supplier">Voltar ao inicio</button></Link>
        </div>

      }
    </div>

  );
}

export default NewSupplierFruits;
