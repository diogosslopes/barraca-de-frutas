import { useContext, useState } from "react";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { VscAdd } from 'react-icons/vsc'
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import FloatingActionButtons from "../components/FloatingButton";
import { Context } from "../contexts/Contexts";


function Suppliers() {
  const { newSupplierName, newSupplierCpf, newSupplierPhone, setNewSupplierFruits } = useContext(Context)

  const [isEmpty, setIsEmpty] = useState([1])

  console.log(newSupplierName)
  console.log(newSupplierCpf)
  console.log(newSupplierPhone)

  return (
    <>
      {isEmpty.length === 0 ?
        <div className="suppliers-container container">
          <Header />
          <div className="suppliers-div">
            <span>Cadastre seu primeiro fornecedor</span>
            <Link to={"novofornecedor"}>
              <button><VscAdd /> Cadastrar Fornecedor</button>

            </Link>
          </div>
          <MenuBottom item="fornecedor" />
        </div>
        :
        <div>
          <div className="suppliers-container container">
            <Header />
            <Cards />
            <Link to={'/novofornecedor'}><FloatingActionButtons/></Link>
            <MenuBottom item="fornecedor"/>
          </div>
        </div>
      }

    </>
  );
}

export default Suppliers;
