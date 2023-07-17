import './components.css'
import { LuApple } from 'react-icons/lu'
import { IoPeople } from 'react-icons/io5'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ModalCancel(props) {
  const [type, setType] = useState(props.type)
  const fruitsList = JSON.parse(localStorage.getItem('fruitsList')) || []
  const [page, setPage] = useState(props.page) || ''

  console.log(page)

  function handleCancel (){
    console.log('Cancelar')
    props.cancel(false)
}

function handelDelete(id,cardClass){
  fruitsList.splice(id,1)
  localStorage.setItem('fruitsList', JSON.stringify(fruitsList))
  props.cancel(false)
  console.log(id, cardClass)
  let cardSelected = document.querySelector(`.${cardClass}`)
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
  /* window.location.reload() */
}

function selectCard (id, index){

  props.action(index)
  console.log(id)
  let cardSelected = document.querySelector(`.${id}`)
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
            <Link to={`/${page}`}><button  onClick={handleCancel}>Sim, cancelar</button></Link>
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
            <Link to={'/frutas'}><button onClick={()=>{handelDelete(props.item, `ID${props.item}`)}}>Sim, Excluir</button></Link>
          </div>
        </div>

        
        }

      </div>
    </>
  );
}

export default ModalCancel;
