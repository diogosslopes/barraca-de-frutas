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
import { Link, useParams } from "react-router-dom";


function EditFruit() {

  const [endForm, setEndForm] = useState(false)
  const {id} = useParams()
  const fruitsList = JSON.parse(localStorage.getItem('fruitsList')) || []
  const [fruitName, setFruitName] = useState(fruitsList[id].name)
  const [fruitPrice, setFruitPrice] = useState(fruitsList[id].price)
  const [fruitStock, setFruitStock] = useState(fruitsList[id].stock)
  const [fruitSupplier, setFruitSupplier] = useState(fruitsList[id].name)



  const [cancel, setCancel] = useState()
  const handleModal = c => {
    console.log(c)
    setCancel(c)
  }

  function handleSupplier(sp){
    setFruitSupplier(sp)
    console.log(fruitSupplier)
  }
  
  function saveFruit(){

    fruitsList.push({
      name: fruitName,
      price: fruitPrice,
      stock: fruitStock,
      supplier: fruitSupplier
    })

    localStorage.setItem('fruitsList', JSON.stringify(fruitsList))
    setEndForm(true)
  
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
                <input value={fruitsList[id].name} onChange={(e) =>{setFruitName(e.target.value)}} placeholder="Nome da fruta"></input>
              </div>
              <div className="fruit-values">
                <IoCashOutline />
                <input value={fruitsList[id].price} onChange={(e) =>{setFruitPrice(e.target.value)}} placeholder="Preço do Kilo"></input>
              </div>
              <div className="fruit-values">
                <IoServerOutline />
                <input value={fruitsList[id].stock} onChange={(e) =>{setFruitStock(e.target.value)}} placeholder="Quantidade no estoque"></input>
              </div>
              <div className="fruit-values">
                <IoPeopleOutline />
                <MultipleSelect supplier={handleSupplier} supplierEdit={fruitsList[id].supplier} />
              </div>
            </div>
            {cancel && (<ModalCancel cancel={handleModal} type={'cancel'} item={'Fruta'} />)}
            <button id="btn-end-supplier" onClick={saveFruit}>Cadastrar Fruta</button>
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
