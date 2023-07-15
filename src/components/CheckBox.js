import { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { IoSquareOutline, IoSquare } from 'react-icons/io5'

 
export default function IndeterminateCheckbox(props) {
  const [checked, setChecked] = useState(false);
  const [fruits, setFruits] = useState(['Banana', 'Maçã', 'Uva'])

/*   const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
    props.fruits(event.target.value)
  }; */

  const handleChange2 = (event) => {
    setChecked(!checked);
    props.fruits(event.target.value)
  };
  
/*   const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
    props.fruits(event.target.value)
  };
  
  function handleFruits(event){
    const B1 = document.querySelector('#B1')
    console.log('teste')

  } */

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      {fruits.map((f, index)=>{
        return(
          <FormControlLabel
            label={f}
            control={<Checkbox value={f} checked={checked} onChange={handleChange2}  />}
          />

        )
      })}
{/*       <FormControlLabel
        label="Maçã"
        control={<Checkbox value='Maçã' checked={checked[1]} onChange={handleChange3} />}
      /> */}
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label="Todos"
        control={
          <Checkbox
/*             checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]} */
            /* onChange={handleChange1} */
          />
        }
      />
      {children}
    </div>
  );
}