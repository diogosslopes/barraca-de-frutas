import { useState } from "react";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { LuPhone } from 'react-icons/lu'
import { IoPersonOutline, IoSearchSharp, IoCloseSharp } from 'react-icons/io5'


function Supplier() {



  return (

    <div className="supplier-container">
      <Header />
      <div class="supplier-tittle">
        <h5>Fornecedor</h5>
        <button>
          <IoCloseSharp />
        </button>
      </div>
      <div className="supplier-card">
        <h5>Lorem ipsum</h5>
        <div className='cards-label'>
          <IoPersonOutline />
          <label>000.000.000-00</label>
        </div>
        <div className='cards-label'>
          <LuPhone />
          <label>(00)0000-0000</label>
        </div>
      </div>
      <div className="supplier-fruits">
        <span>Frutas</span>
        <ul>
          <li>Maça</li>
          <li>Morango</li>
          <li>Banana</li>
          <li>Pera</li>
          <li>Uva</li>
          <li>Maracuja</li>
          
        </ul>
      </div>
      <MenuBottom />
    </div>

  );
}

export default Supplier;
