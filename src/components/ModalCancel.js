import './components.css'
import { LuApple } from 'react-icons/lu'
import { IoPeople } from 'react-icons/io5'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ModalCancel(props) {
  const [type, setType] = useState(props.type)

  function handleCancel (){
    console.log('Cancelar')
    props.cancel(false)
}

  return (
    <>
    <div className='modal-back'>
    </div>
      <div class="modal-back-">
        {type === 'cancel' ?
        <div className='modal-container'>
          <h5>Cancelar Cadastro</h5>
          <span>Tem certeza que quer cancelar o cadastro ?
            Você perderá todas as informação inseridas até aqui.
          </span>
          <div className='modal-buttons'>
            <button id='cancel' onClick={handleCancel}>Não</button>
            <Link to={'/'}><button  onClick={handleCancel}>Sim, cancelar</button></Link>
          </div>
        </div>

        :

        <div className='modal-container'>
          <h5>Excluir Fruta</h5>
          <span>Tem certeza que quer excluir essa fruta?
            Você perderá todas as informação cadastradas sobre ela.
          </span>
          <div className='modal-buttons'>
            <button id='cancel' onClick={handleCancel}>Não</button>
            <Link to={'/frutas'}><button onClick={handleCancel}>Sim, Excluir</button></Link>
          </div>
        </div>

        
        }

      </div>
    </>
  );
}

export default ModalCancel;
