import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Fruits from '../pages/Fruits';
import Suppliers from '../pages/Suppliers';


function AppRoutes() {
    return (
<BrowserRouter>
        <Routes>
            <Route path='/' element={<Suppliers />} />
            <Route path='/frutas' element={<Fruits/>} />
        </Routes>
</BrowserRouter>
    );
  }
  
  export default AppRoutes;
  