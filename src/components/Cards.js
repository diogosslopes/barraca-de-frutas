import './components.css'
import { LuPhone } from 'react-icons/lu'
import { IoPersonOutline, IoSearchSharp } from 'react-icons/io5'
import FloatingActionButtons from './FloatingButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Cards() {

    
    const [suppliers, setSuppliers] = useState([
        {
            name: 'Diogo',
            cpf: '129.919.627-63',
            phone: '24993027173',
            fruits: ['Mamão', 'Uva', 'Maçã']
        },
        {
            name: 'Pâmela',
            cpf: '133.288.817-86',
            phone: '2499983008',
            fruits: ['Morango', 'Melancia', 'Pera']
        },
        {
            name: 'Antonio',
            cpf: '222.312.111-63',
            phone: '24993027173',
            fruits: ['Banana', 'Morango', 'Abacate', 'Uva', 'Mamão']
        }
    ])
    
    localStorage.setItem('suppliers', JSON.stringify(suppliers))
    
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
