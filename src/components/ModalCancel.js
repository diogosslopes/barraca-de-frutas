import './components.css'
import { LuApple } from 'react-icons/lu'
import { IoPeople } from 'react-icons/io5'

function ModalCancel() {
  return (
    <>
    <div className='modal-back'>
    </div>
      <div class="modal-back-">
        <div className='modal-container'>
          <h5>Cancelar Cadastro</h5>
          <span>Tem certeza que quer cancelar o cadastro do colaborador?
            Você perderá todas as informação inseridas até aqui
          </span>
          <div className='modal-buttons'>
            <button>Não</button>
            <button>Sim, cancelar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalCancel;
