import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

/* const ITEM_HEIGHT = 20;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};




function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}*/

let suplliersNames = [] 

export default function MultipleSelect(props) {
  const [supplierName, setSupplierName] = React.useState(props.supplierEdit)
  console.log(supplierName)
  let names = [];

  const suppliers = JSON.parse(localStorage.getItem('suppliers')) || []

  suppliers.map((sp) => {
    names.push(sp.name)
  })

  if(supplierName === undefined){
    console.log('Contem')
    console.log(suppliers)
  }else{
    console.log('Não contem')
    console.log(supplierName)
  }

  function handleCHange (event){
    props.supplier(event.target.value)

  }

/*   const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  }; */

  return (
    <div>
{/*       <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Fornecedor</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Fornecedor" />}
          MenuProps={MenuProps}

        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}
      
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
