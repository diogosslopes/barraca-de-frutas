import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Fruits from '../pages/Fruits';
import Suppliers from '../pages/Suppliers';
import Supplier from '../pages/Supplier';
import NewSupplier from '../pages/NewSupplier';
import NewSupplierCpf from '../pages/NewSupplierCpf';
import NewSupplierTel from '../pages/NewSupplierTel';
import NewSupplierFruits from '../pages/NewSupplierFruits';
import NewFruit from '../pages/NewFruit';
import EditFruit from '../pages/EditFruit';
import { ContextProvider } from '../contexts/Contexts';



function AppRoutes() {
    return (
            <ContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Suppliers />} />
                    <Route path='/frutas' element={<Fruits />} />
                    <Route path='/fornecedor/:id' element={<Supplier />} />
                    <Route path='/novofornecedor' element={<NewSupplier />} />
                    <Route path='/novofornecedorcpf' element={<NewSupplierCpf />} />
                    <Route path='/novofornecedortel' element={<NewSupplierTel />} />
                    <Route path='/novofornecedorfrutas' element={<NewSupplierFruits />} />
                    <Route path='/novafruta' element={<NewFruit />} />
                    <Route path='/editarfruta' element={<EditFruit />} />
                </Routes>
            </BrowserRouter>
            </ContextProvider>

    );
}

export default AppRoutes;
