import { useState } from "react";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { VscAdd } from 'react-icons/vsc'
import Cards from "../components/Cards";


function Suppliers() {

  const [ isEmpty, setIsEmpty] = useState([1])

    return (
      <>
      {isEmpty.length === 0 ?
      <div className="main-container">
        <div className="supplier-container">
          <Header />
          <div className="supplier-div">
            <span>Cadastre seu primeiro fornecedor</span>
            <button><VscAdd/> Cadastrar Fornecedor</button>
          </div>
          <MenuBottom/>
        </div>
      </div>
      :
      <div>

      <div className="main-container">
        <div className="supplier-container">
          <Header />
          <Cards/>
          <MenuBottom/>
        </div>
      </div>
        

      </div>
      
    }
      
      </>
    );
  }
  
  export default Suppliers;
  