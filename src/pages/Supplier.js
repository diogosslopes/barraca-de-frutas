import { useState } from "react";
import Header from "../components/Header";
import MenuBottom from "../components/MenuBottom";
import './pages.css'
import { LuPhone } from 'react-icons/lu'
import { IoPersonOutline, IoSearchSharp, IoCloseSharp } from 'react-icons/io5'
import { Link, useParams } from "react-router-dom";


function Supplier() {

const {id} = useParams()
const suppliers = JSON.parse(localStorage.getItem('suppliers'))

console.log(suppliers[id])

  return (

    <div className="supplier-container container">
      <Header />
      <div class="supplier-tittle">
        <h5>Fornecedor</h5>
        <Link to={'/'}>
          <button>
            <IoCloseSharp />
          </button>
        </Link>
      </div>
      <div className="supplier-card">
        <h5>{suppliers[id].name}</h5>
        <div className='cards-label'>
          <IoPersonOutline />
          <label>{suppliers[id].cpf}</label>
        </div>
        <div className='cards-label'>
          <LuPhone />
          <label>{suppliers[id].phone}</label>
        </div>
      </div>
      <div className="supplier-fruits">
        <span>Frutas</span>
        <ul>
          {suppliers[id].fruits.map((f)=>{
            return(
              <li>{f}</li>
            )
          })}
                    
        </ul>
      </div>
      <MenuBottom />
    </div>

  );
}

export default Supplier;
