import { useState } from "react";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { LuPhone } from 'react-icons/lu'
import { IoCloseSharp, IoNutritionOutline, IoCashOutline, IoServerOutline, IoPeopleOutline } from 'react-icons/io5'
import MultipleSelect from "../components/SuppliersDropDown";
import { Link } from "react-router-dom";
import celpng from '../images/Celular.png'
import ModalCancel from "../components/ModalCancel";
import CloseButton from "../components/CloseButton";


function NewFruit() {

  const [endForm, setEndForm] = useState(false)
  const [cancel, setCancel] = useState()
  const [NewFruit, setNewFruit] = useState({})
  const [fruitName, setFruitName] = useState()
  const [fruitPrice, setFruitPrice] = useState()
  const [fruitStock, setFruitStock] = useState()
  const [fruitSupplier, setFruitSupplier] = useState()

  let fruitsList = JSON.parse(localStorage.getItem('fruitsList')) || []
  const handleModal = c => {
    console.log(c)
    setCancel(c)
  }

  function storage() {
    fruitsList.push(NewFruit)
    localStorage.setItem('fruitsList', JSON.stringify(fruitsList))
    console.log(fruitsList)
    /* setEndForm(true) */
  }

  function saveFruit(){
    setNewFruit({
      name: fruitName,
      price: fruitPrice,
      stock: fruitStock,
      supplier: fruitSupplier
    })
    storage()
  }

  function handleSupplier(sp){
    setFruitSupplier(sp)
    console.log(fruitSupplier)
  }
  



  return (
    <>
      <div className="container">
        <Header />
        {endForm === false ?
          <>
            <div class="supplier-tittle">
              <h5>Cadastra Fruta</h5>
              <CloseButton cancel={handleModal} />
            </div>
            <div className="fruit-data">
              <div className="fruit-values">
                <IoNutritionOutline />
                <input placeholder="Nome da fruta" value={fruitName} onChange={(e)=> setFruitName(e.target.value)}></input>
              </div>
              <div className="fruit-values">
                <IoCashOutline />
                <input placeholder="Preço do Kilo" value={fruitPrice} onChange={(e)=> setFruitPrice(e.target.value)}></input>
              </div>
              <div className="fruit-values">
                <IoServerOutline />
                <input placeholder="Quantidade no estoque" value={fruitStock} onChange={(e)=> setFruitStock(e.target.value)} ></input>
              </div>
              <div className="fruit-values">
                <IoPeopleOutline  />
                <MultipleSelect supplier={handleSupplier} />
              </div>
            </div>
            {cancel && (<ModalCancel cancel={handleModal} type={'cancel'} />)}
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

export default NewFruit;
