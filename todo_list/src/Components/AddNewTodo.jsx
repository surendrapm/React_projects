import { useState } from "react"
import Modal from "./Modal"
import { Bell, CalendarDay, Clock, Palette, X } from "react-bootstrap-icons"
import { DatePicker, MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"





function AddNewTodo(){
    const [showModal , setShowModal] = useState(false)
    const [text,setText] = useState('')
    const [day,setDay] = useState(new Date())
    const [time,setTime] = useState(new Date())
      return(
               
          <div className="AddNewTodo">
            <div className="btn">
                <button onClick={()=>{
                     setShowModal(true)
                }}>
                    +New Todo
                </button>
            </div>
               
            <Modal showModel={showModal} setShowModal={setShowModal}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <form action="">
                <div className="text">
                    <h3>Add new to do</h3>
                    <input type="text"
                     value={text}
                     onChange={(e)=>setText(e.target.value)}
                     placeholder="To do ..."
                     autoFocus
                    />
                </div>
                <div className="remind">
                   
                    <Bell></Bell>
                    <p>Remind Me!</p>
                </div>
                <div className="pick-day">
                     <div className="title">
                        <CalendarDay></CalendarDay>
                        <p>Choose a Day</p>
                     </div>
                       <DatePicker 
                       value={day}
                       onChange={day => setDay(day)}
                       ></DatePicker>
                  </div>

                  <div className="pick-time">
                     <div className="title">
                        <Clock></Clock>
                        <p>Choose a Time</p>
                     </div>
                        <TimePicker
                         value={time}
                         onChange={time=>setTime(time)}
                        ></TimePicker>
                     </div>
                    
                     <div className="pick-project">
                     <div className="title">
                        <Palette></Palette>
                        <p>Choose a Project</p>
                     </div>
                     
                     <div className="projects">
                         <div className="project active">
                            personal
                         </div>
                         <div className="project">
                            work
                         </div>
                     </div>
                     </div>
                     <div className="cancel" onClick={()=>{
                        setShowModal(false)
                     }}>
                        <X size={'40'}></X>
                     </div>
                     <div className="confirm">
                          <button>+ Add to do</button>
                     </div>
               </form>
              </MuiPickersUtilsProvider>
            
             </Modal>
            
                </div>
                   
       
    )
}


export default AddNewTodo