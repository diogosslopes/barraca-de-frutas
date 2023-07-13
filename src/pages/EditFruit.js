import { useState } from "react";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { LuPhone } from 'react-icons/lu'
import { IoCloseSharp, IoNutritionOutline, IoCashOutline, IoServerOutline, IoPeopleOutline } from 'react-icons/io5'
import MultipleSelect from "../components/SuppliersDropDown";
import celpng from '../images/Celular.png'
import ModalCancel from "../components/ModalCancel";
import CloseButton from "../components/CloseButton";
import { Link } from "react-router-dom";


function EditFruit() {

  const [endForm, setEndForm] = useState(false)

  const [cancel, setCancel] = useState()
  const handleModal = c => {
    console.log(c)
    setCancel(c)
  }



  return (
    <>
      <div className="container">
        <Header />
        {endForm === false ?
          <>
            <div class="supplier-tittle">
              <h5>Editar Fruta</h5>
              <CloseButton cancel={handleModal} />
            </div>
            <div className="fruit-data">
              <div className="fruit-values">
                <IoNutritionOutline />
                <input placeholder="Nome da fruta"></input>
              </div>
              <div className="fruit-values">
                <IoCashOutline />
                <input placeholder="Preço do Kilo"></input>
              </div>
              <div className="fruit-values">
                <IoServerOutline />
                <input placeholder="Quantidade no estoque"></input>
              </div>
              <div className="fruit-values">
                <IoPeopleOutline />
                <MultipleSelect />
              </div>
            </div>
            {cancel && (<ModalCancel cancel={handleModal} type={'cancelar'} item={'Fruta'} />)}

            <MenuBottom />
          </>
          :
          <div>
            <div class="supplier-tittle">
              <button>
                <IoCloseSharp />
              </button>
            </div>
            <div className="end-form">
              <img src={celpng} id="endimg"></img>
              <h6>Fruta cadastrada</h6>
              <label>Você cadastrou a fruta Lorem Ipsum dolor com sucesso!!</label>
            </div>
            <Link to={'/frutas'}><button id="btn-end-supplier">Voltar ao inicio</button></Link>
          </div>
        }
      </div>
    </>



  );
}

export default EditFruit;
