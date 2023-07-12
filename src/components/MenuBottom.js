import './components.css'
import { LuApple } from 'react-icons/lu'
import { IoPeople, IoNutritionOutline } from 'react-icons/io5'

function MenuBottom() {
    return (
      <footer className="footer">
        <button>
        <IoPeople/>
        <p>Fornecedor</p>
        </button>
        <button>
        <IoNutritionOutline/>
        <p>Frutas</p>
        </button>
      </footer>
    );
  }
  
  export default MenuBottom;
  