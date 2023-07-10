import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Supplier from '../pages/Supplier';
import Fruits from '../pages/Fruits';


function AppRoutes() {
    return (
<BrowserRouter>
        <Routes>
            <Route path='/' element={<Supplier />} />
            <Route path='/frutas' element={<Fruits/>} />
        </Routes>
</BrowserRouter>
    );
  }
  
  export default AppRoutes;
  