import './components.css'
import { LuPhone } from 'react-icons/lu'
import { IoCashOutline, IoCogOutline, IoPeopleOutline, IoPersonOutline, IoSearchSharp } from 'react-icons/io5'
import FloatingActionButtons from './FloatingButton';
import { useState } from 'react';
import { DrawMenu } from './DrawMenu';

function FruitsCards(props) {

    const [selectedCard, setSelectedCard] = useState(false)

    let fruitsList = JSON.parse(localStorage.getItem('fruitsList')) || []

    fruitsList = [
        {
            name: 'Banana',
            price: '5,99',
            stock: '70',
            supplier: 'Diogo Sousa'
        },
        {
            name: 'Uva',
            price: '9,00',
            stock: '50',
            supplier: 'Diogo Sousa'
        },
        {
            name: 'Melão',
            price: '5,00',
            stock: '70',
            supplier: 'Pâmela Chaves'
        },
        {
            name: 'Pera',
            price: '5,53',
            stock: '35',
            supplier: 'Pâmela Chaves'
        },
        {
            name: 'Melancia',
            price: '5,63',
            stock: '70',
            supplier: 'Diogo Sousa'
        }
    ]


    function selectCard (){

        let cardSelected = document.querySelector('#f1')
        let actionSelected = document.querySelector('.backdrop-actions-container')
        let actionSelected_ = document.querySelector('.actions-container')
        if (cardSelected.classList.contains('card-selected')){
            cardSelected.classList.remove('card-selected')
            actionSelected.classList.remove('visible')
            actionSelected_.classList.remove('actions-container-visible')
            console.log('Aqui')            
        }else{
            cardSelected.classList.add('card-selected')
            actionSelected.classList.add('visible')
            actionSelected_.classList.add('actions-container-visible')
            console.log('Aqui 2')
        }
    }


    return (
        <>
            <div className="search-field">
                <IoSearchSharp />
                <input placeholder='Pesquisar Fruta'></input>
            </div>
            <main className="cards-container">
                <div className="cards fruits-cards">
                    {fruitsList.map((f,index)=>{
                        return(
                    <div className='card fruit-card' key={index}>
                        <div>
                            <h2>{f.name}</h2>
                            <IoCogOutline />
                        </div>
                        <div className='cards-label fruit-price'>
                            
                            <p><IoCashOutline /> {`R$ ${f.price}`}</p>
                            <p>{`${f.stock} em estoque`}</p>
                        </div>
                        <div className='cards-label' >
                            <IoPeopleOutline />
                            <label>{f.supplier}</label>
                        </div>
                    </div>
                        )
                    })}
                    {/* <DrawMenu /> */}
                </div>
            </main>
        </>
    );
}

export default FruitsCards;
