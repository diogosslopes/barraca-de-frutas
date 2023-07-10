import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { VscAdd } from 'react-icons/vsc'


function Supplier() {
    return (
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
    );
  }
  
  export default Supplier;
  