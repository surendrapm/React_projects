
import Sidebar from './Components/Sidebar'
import Main from './Components/Main'
import User from './Components/User'
import AddNewTodo from './Components/AddNewTodo'
import Calender from './Components/Calender'
import Projects from './Components/Projects'
import Todos from './Components/Todos'
import EditTodo from './Components/EditTodo'
import './App.css'



function App(){
 

  return (
    <>
    <div className="App">
    
    <Sidebar>
      <User></User>
      <AddNewTodo></AddNewTodo>
      <Calender></Calender>
      <Projects></Projects>
    </Sidebar>



    <Main>
    <Todos></Todos>
    <EditTodo></EditTodo>
    </Main>
   
    </div>
    </>
  )
}




export default App
