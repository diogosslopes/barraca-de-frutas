import './components.css'
import { LuApple } from 'react-icons/lu'
import { IoPeople, IoNutritionOutline, IoNutrition, IoPeopleOutline, IoAdd } from 'react-icons/io5'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FloatingActionButtons from './FloatingButton'

function MenuBottom(props) {


  const [item, setItem] = useState(props.item)
  

  return (
    <>
    {
      item === "fornecedor" ?
      <>
        
          <footer className="footer">
            <Link to={'/'}>
              <button onClick={()=> setItem("fornecedor")}>
                <IoPeople />
                <p>Fornecedor</p>
              </button>
            </Link>
            <Link to={'frutas'}>
              <button onClick={()=> setItem("fruta")}>
                <IoNutritionOutline />
                <p>Frutas</p>
              </button>
            </Link>
          </footer>
      </>
        :
        <>
          <footer className="footer">
            <Link to={'/'}>
              <button onClick={()=> setItem("fornecedor")}>
                <IoPeopleOutline />
                <p>Fornecedor</p>
              </button>
            </Link>
            <Link to={'/frutas'}>
              <button onClick={()=> setItem("fruta")}>
                <IoNutrition />
                <p>Frutas</p>
              </button>
            </Link>
          </footer>
        </>
      }
      </>
  );
}

export default MenuBottom;
