import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Error from './Components/Error/Error'
import CartWidget from './Components/CartWidget/CartWidget'
import Provider from './Components/Context/CartContext'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/category/:id' element={<ItemListContainer />}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='*' element={<Error />}></Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
