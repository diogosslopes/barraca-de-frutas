import './components.css'
import { LuPhone } from 'react-icons/lu'
import { IoPersonOutline, IoSearchSharp } from 'react-icons/io5'
import FloatingActionButtons from './FloatingButton';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Cards() {


    useEffect(()=>{
        const suppliersList = JSON.parse(localStorage.getItem('suppliers')) || []
        setSuppliers(suppliersList)
    },[])
    const [suppliers, setSuppliers] = useState([])
    
/*     let cpf1 = '12991962763'
    const cpfFormated = cpf1.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4") */
    
    
    /* console.log(cpfFormated) */
    
    return (
        <>
            <div className="search-field">
                <IoSearchSharp />
                <input placeholder='Pesquisar Fornecedor'></input>
            </div>
            <main className="cards-container">
                <div className="cards">
                    {suppliers.map((sp,index)=>{  
                        return(
                    <Link to={`/fornecedor/${index}`}>
                        <div className='card' key={index}>
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
