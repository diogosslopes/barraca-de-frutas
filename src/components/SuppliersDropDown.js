import * as React from 'react';




export default function MultipleSelect(props) {
  const [supplierName, setSupplierName] = React.useState(props.supplierEdit)
  let names = [];

  const suppliers = JSON.parse(localStorage.getItem('suppliers')) || []

  suppliers.map((sp) => {
    names.push(sp.name)
  })



  function handleCHange (event){
    props.supplier(event.target.value)

  }


  return (
    <div>
      
        {supplierName === undefined ?
        <select onChange={handleCHange} defaultValue={'Fornecedor'}>
          <option disabled hidden>Fornecedor</option>
          {names.map((name)=>{
            return(
              <option>{name}</option>
            )
          })}
        </select>
      :
        <select onChange={handleCHange} defaultValue={supplierName}>
          {names.map((name)=>{
            return(
              <option>{name}</option>
            )
          })}
        </select>

      }
    </div>
  );
}
