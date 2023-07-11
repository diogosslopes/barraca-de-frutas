import { useState } from "react";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { VscAdd } from 'react-icons/vsc'
import Cards from "../components/Cards";
import { Link } from "react-router-dom";


function Suppliers() {

  const [isEmpty, setIsEmpty] = useState([])

  return (
    <>
      {isEmpty.length === 0 ?
        <div className="suppliers-container">
          <Header />
          <div className="suppliers-div">
            <span>Cadastre seu primeiro fornecedor</span>
            <Link to={"novofornecedor"}>
              <button><VscAdd /> Cadastrar Fornecedor</button>

            </Link>
          </div>
          <MenuBottom />
        </div>
        :
        <div>
          <div className="suppliers-container">
            <Header />
            <Cards />
            <MenuBottom />
          </div>
        </div>
      }

    </>
  );
}

export default Suppliers;
