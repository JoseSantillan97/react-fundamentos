import React from 'react'
import TarjetaFruta from './Components/TarjetaFruta'

const App = () => (
  <h1>
    <TarjetaFruta fruit= "Sandia" precio={50.00}></TarjetaFruta>
    <TarjetaFruta fruit= "Manzana" precio={25.00}></TarjetaFruta>
    <TarjetaFruta fruit= "Pera" precio={20.00}></TarjetaFruta>
    {/* {getUser(user)} */}
    {/* <ComponenteFuncional fruit="naranja" precio={1.00} ></ComponenteFuncional> */}
  </h1>
)

export default App