import './components.css'
import { LuPhone } from 'react-icons/lu'
import { IoCashOutline, IoCogOutline, IoPeopleOutline, IoPersonOutline, IoSearchSharp } from 'react-icons/io5'
import FloatingActionButtons from './FloatingButton';
import { useState } from 'react';
import { DrawMenu } from './DrawMenu';

function FruitsCards(props) {

    const [selectedCard, setSelectedCard] = useState(false)

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
                    <div className='card fruit-card' key={1}>
                        <div>
                            <h2>Maçã</h2>
                            <IoCogOutline />
                        </div>
                        <div className='cards-label fruit-price'>
                            
                            <p><IoCashOutline /> R$ 1,80</p>
                            <p>75 em estoque</p>
                        </div>
                        <div className='cards-label' >
                            <IoPeopleOutline />
                            <label>Lorem ipsum dolor sit consectetur </label>
                        </div>
                    </div>

                    <div id='f1' className='card fruit-card' key={1}>
                        <div>
                            <h2>Maçã</h2>
                            <IoCogOutline onClick={selectCard} />
                        </div>
                        <div className='cards-label fruit-price'>
                            
                            <p><IoCashOutline /> R$ 1,80</p>
                            <p>75 em estoque</p>
                        </div>
                        <div className='cards-label' >
                            <IoPeopleOutline />
                            <label>Lorem ipsum dolor sit consectetur </label>
                        </div>
                    </div>

                    <div id='f2' className='card fruit-card' key={1}>
                        <div>
                            <h2>Maçã</h2>
                            <IoCogOutline />
                        </div>
                        <div className='cards-label fruit-price'>
                            
                            <p><IoCashOutline /> R$ 1,80</p>
                            <p>75 em estoque</p>
                        </div>
                        <div className='cards-label' >
                            <IoPeopleOutline />
                            <label>Lorem ipsum dolor sit consectetur </label>
                        </div>
                    </div>

                    <div id='f3' className='card fruit-card' key={1}>
                        <div>
                            <h2>Maçã</h2>
                            <IoCogOutline />
                        </div>
                        <div className='cards-label fruit-price'>
                            
                            <p><IoCashOutline /> R$ 1,80</p>
                            <p>75 em estoque</p>
                        </div>
                        <div className='cards-label' >
                            <IoPeopleOutline />
                            <label>Lorem ipsum dolor sit consectetur </label>
                        </div>
                    </div>

                    <div id='f4' className='card fruit-card' key={1}>
                        <div>
                            <h2>Maçã</h2>
                            <IoCogOutline />
                        </div>
                        <div className='cards-label fruit-price'>
                            
                            <p><IoCashOutline /> R$ 1,80</p>
                            <p>75 em estoque</p>
                        </div>
                        <div className='cards-label' >
                            <IoPeopleOutline />
                            <label>Lorem ipsum dolor sit consectetur </label>
                        </div>
                    </div>
                    {/* <DrawMenu /> */}
                </div>
            </main>
        </>
    );
}

export default FruitsCards;
