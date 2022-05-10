import React from 'react'

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
    return(
      <div>
        <h2>{ this.props.fruit }</h2>
        <h2>Cantidad: { this.state.cantidad }</h2>
        <button onClick={ this.agregar }> + </button>
        <button onClick={ this.quitar }> - </button>
        <button onClick={ this.limpiar }> Limpiar </button>
        <h2>{ this.props.precio }</h2>
      </div>
    )
  }
}

export default TarjetaFruta