import './components.css'
import { LuPhone } from 'react-icons/lu'
import { IoCashOutline, IoCogOutline, IoPeopleOutline, IoPersonOutline, IoSearchSharp } from 'react-icons/io5'
import FloatingActionButtons from './FloatingButton';

function FruitsCards() {
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
                    
                </div>
            </main>
        </>
    );
}

export default FruitsCards;
