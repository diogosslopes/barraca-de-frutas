import { useState } from "react";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { VscAdd } from 'react-icons/vsc'
import Cards from "../components/Cards";
import { Link } from "react-router-dom";


function Fruits() {

  const [isEmpty, setIsEmpty] = useState([1])

  return (
    <>
      {isEmpty.length === 0 ?
        <div className="suppliers-container container">
          <Header />
          <div className="suppliers-div">
            <span>Cadastre sua primeira fruta</span>
            <Link to={"novofornecedor"}>
              <button><VscAdd /> Cadastrar Fruta</button>

            </Link>
          </div>
          <MenuBottom item="fruta"/>
        </div>
        :
        <div>
          <div className="suppliers-container container">
            <Header />
            <Cards />
            <MenuBottom item="fruta" />
          </div>
        </div>
      }

    </>
  );
}

export default Fruits;
