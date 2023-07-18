import './components.css'
import { LuApple } from 'react-icons/lu'
import { IoChevronForwardOutline } from 'react-icons/io5'

function NextButton(props) {

  function handleNext(){
    if(props.data === 'cpf'){
      if(props.length < 14){
        props.function(true, false)
      }else{
        props.function(false, true)
      }
    }else if(props.data === 'tel'){
      if(props.length < 14){
        props.function(true, false)
      }else{
        props.function(false, true)
      }

    }else if(props.data === 'name'){
      if(props.length < 3){
        props.function(true, false)
      }else{
        props.function(false, true)
      }
    }
  }


    return (
      
        <button onClick={handleNext} className='button-next'>
          Proximo
          <IoChevronForwardOutline/>
        </button>
      
    );
  }
  
  export default NextButton;
  