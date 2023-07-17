import React from 'react';
import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace(/[_]/g, '');

const InputMasked = ({ value, onChange, name, mask }) => {

    console.log(name)
  
   function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: onlyNumbers(event.target.value)
      }
    });
  }

  return (
    <>    
    {name === 'cpf' ?
    <InputMask
      name={name}
      mask={mask}
      value={value}
      onChange={handleChange}
      placeholder='CPF'
    />
    :
    <InputMask
      name={name}
      mask={mask}
      value={value}
      onChange={handleChange}
      placeholder='Telefone'
    />

    }
    </>
  );
};

export default InputMasked;