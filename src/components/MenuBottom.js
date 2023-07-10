import './components.css'
import { LuApple } from 'react-icons/lu'
import { IoPeople } from 'react-icons/io5'

function MenuBottom() {
    return (
      <footer className="App">
        <div>
        <IoPeople/>
        <p>Fornecedor</p>
        </div>
        <div>
        <LuApple/>
        <p>Frutas</p>
        </div>
      </footer>
    );
  }
  
  export default MenuBottom;
  