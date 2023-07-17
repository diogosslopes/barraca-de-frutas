import { useState } from "react";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { VscAdd } from 'react-icons/vsc'
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import FloatingActionButtons from "../components/FloatingButton";
import FruitsCards from "../components/FruitsCards";
import {DrawMenu} from "../components/DrawMenu";
import SwipeableEdgeDrawer from "../components/SwipeDrawer";
import { IoPencil, IoTrashOutline } from "react-icons/io5";



function Fruits() {

  const fruitsList = JSON.parse(localStorage.getItem('fruitsList')) || []
  const [action, setAction] = useState()
  const handleAction = c => {
    console.log(c)
    setAction(c)
  }
  
  function handelDelete(id){
    fruitsList.splice(id,1)
    localStorage.setItem('fruitsList', JSON.stringify(fruitsList))
    setAction(!action)
  }

  return (
    <>
      {fruitsList.length === 0 ?
        <div className="suppliers-container container">
          <Header />
          <div className="suppliers-div">
            <span>Cadastre sua primeira fruta</span>
            <Link to={"/novafruta"}>
              <button><VscAdd /> Cadastrar Fruta</button>

            </Link>
          </div>
          <MenuBottom item="fruta"/>
        </div>
        :
        <div>
          <div className="suppliers-container container">
            <Header />
            <FruitsCards action={handleAction} />
            <Link to={'/novafruta'}>
              <FloatingActionButtons />
            </Link>
            <div className="backdrop-actions-container">
            </div>
              <div className="actions-container-">
                <div className="actions-container">
                  <Link to={`/editarfruta/${action}`}>
                    <button>
                      <IoPencil />
                      Editar Fruta
                    </button>
                  </Link>
                  <button onClick={()=>{handelDelete(action)}}>
                    <IoTrashOutline></IoTrashOutline>
                    Excluir Fruta
                  </button>
                </div>
              </div>
            <MenuBottom item="fruta" />
          </div>
        </div>
      }

    </>
  );
}

export default Fruits;
