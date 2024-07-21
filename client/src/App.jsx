import { Routes, Route } from 'react-router-dom'

import CarList from './components/car-list/CarList'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import CreateOffer from './components/create - offer/CreateOffer'

function App() {

  return (
    <>
    <Header />
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/create-offer' element={<CreateOffer />} />
      <Route path='/catalogue' element={<CarList />} />
     
    </Routes>
    </>
  )
}

export default App
