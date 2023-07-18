import './components.css'
import { LuApple } from 'react-icons/lu'
import { IoChevronForwardOutline, IoCloseSharp } from 'react-icons/io5'
import { useState } from 'react';

function CloseButton(props) {

    function handleCancel (){
        props.cancel(true)
    }

    return (

        <div className="close">
            <button onClick={handleCancel}>
                <IoCloseSharp />
            </button>
        </div>

    );
}

export default CloseButton;




