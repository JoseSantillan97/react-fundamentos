import React from "react"
import ReactDom from "react-dom"

const user = {
  name: "José Santillán",
  edad: 24,
  ciudad: "Durango",
}

// const ComponenteFuncional = (props) => (
//   <div>
//     {/* <h1>Hola {user.name} desde un componente funcional</h1> */}
//     <h2>{ props.fruit }</h2>
//     <h2>{ props.precio }</h2>
//     <hr />
//   </div>
// )

const getUser = (user) => {
 return `Hola, mi nombre es ${user.name}`
}

class ClassComponent extends React.Component {
  
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

const App = () => (
    <h1>
      <ClassComponent fruit= "sandia" precio={2.00}></ClassComponent>
      {/* {getUser(user)} */}
      {/* <ComponenteFuncional fruit="naranja" precio={1.00} ></ComponenteFuncional> */}
      {/* <ComponenteFuncional fruit="sandia" precio={2.00}></ComponenteFuncional> */}
    </h1>
  )
const root = document.getElementById("root")

ReactDom.render(<App></App>, root)


