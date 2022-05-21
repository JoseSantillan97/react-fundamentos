import React from 'react'
import './TarjetaFruta.css'

// const ComponenteFuncional = (props) => (
//   <div>
//     {/* <h1>Hola {user.name} desde un componente funcional</h1> */}
//     <h2>{ props.fruit }</h2>
//     <h2>{ props.precio }</h2>
//     <hr />
//   </div>
// )

class TarjetaFruta extends React.Component {
  
  state = {
    cantidad: 0
  }
  
  agregar = () => {
    this.setState({ cantidad: this.state.cantidad+1 })
  }
  quitar = () => {
    this.setState({ cantidad: this.state.cantidad-1 })
  }
  limpiar = () => {
    this.setState({ cantidad: 0 })
  }
  
  render(){
    const hasItems = this.state.cantidad > 0;
    const classes = `TarjetaFruta ${hasItems ? 'TarjetaFruta-activa' : ''}`

    return(
      <div className={classes}>
        <h2>{ this.props.fruit }</h2>
        <h2>Cantidad: { this.state.cantidad }</h2>
        <button onClick={ this.agregar }> + </button>
        <button onClick={ this.quitar }> - </button>
        <button onClick={ this.limpiar }> Limpiar </button>
        <h2>Total ${ this.props.precio * this.state.cantidad }</h2>
      </div>
    )
  }
}

export default TarjetaFruta