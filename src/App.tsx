import AddToDo from "./components/AddToDo"
import Navbar from "./components/NavBar"
import Todos from "./components/ToDos"
import "./App.css"

const App = () => {
  return (
   <main>
      <h1>TODO REACT + TYPESCRIPT </h1>
      <Navbar />
      <AddToDo />
      <Todos />
   </main>
  )
}

export default App