import './components.css'
import { LuPhone } from 'react-icons/lu'
import { IoPersonOutline, IoSearchSharp } from 'react-icons/io5'

function Cards() {
    return (
        <>
            <div className="search-field">
                <IoSearchSharp />
                <input placeholder='Pesquisar Fornecedor'></input>
            </div>
            <main className="cards-container">
                <div className="cards">
                    <div className='card' key={1}>
                        <h2>Lorem ipsum</h2>
                        <div className='cards-label'>
                            <IoPersonOutline />
                            <label>000.000.000-00</label>
                        </div>
                        <div className='cards-label'>
                            <LuPhone />
                            <label>(00)0000-0000</label>
                        </div>
                    </div>
                    <div className='card' key={2}>
                        <h2>Lorem ipsum</h2>
                        <div className='cards-label'>
                            <IoPersonOutline />
                            <label>000.000.000-00</label>
                        </div>
                        <div className='cards-label'>
                            <LuPhone />
                            <label>(00)0000-0000</label>
                        </div>
                    </div>
                    <div className='card' key={3}>
                        <h2>Lorem ipsum</h2>
                        <div className='cards-label'>
                            <IoPersonOutline />
                            <label>000.000.000-00</label>
                        </div>
                        <div className='cards-label'>
                            <LuPhone />
                            <label>(00)0000-0000</label>
                        </div>
                    </div>
                    <div className='card' key={4}>
                        <h2>Lorem ipsum</h2>
                        <div className='cards-label'>
                            <IoPersonOutline />
                            <label>000.000.000-00</label>
                        </div>
                        <div className='cards-label'>
                            <LuPhone />
                            <label>(00)0000-0000</label>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Cards;
