import './components.css'
import { LuPhone } from 'react-icons/lu'
import { IoPersonOutline, IoSearchSharp } from 'react-icons/io5'
import FloatingActionButtons from './FloatingButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Cards() {

    
    
   let suppliers = JSON.parse(localStorage.getItem('suppliers')) || []
   
    
    return (
        <>
            <div className="search-field">
                <IoSearchSharp />
                <input placeholder='Pesquisar Fornecedor'></input>
            </div>
            <main className="cards-container">
                <div className="cards">
                    {suppliers.map((sp,i)=>{  

                        console.log(sp.name)
                        return(

                    <Link to={`/fornecedor/${i}`}>
                        <div className='card' key={i}>
                            <h2>{sp.name}</h2>
                            <div className='cards-label'>
                                <IoPersonOutline />
                                <label>{sp.cpf} </label>
                            </div>
                            <div className='cards-label'>
                                <LuPhone />
                                <label>{sp.phone} </label>
                            </div>
                        </div>
                    </Link>
                        )
                    })}
                </div>
            </main>
        </>
    );
}

export default Cards;
