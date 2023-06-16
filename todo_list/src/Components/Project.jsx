import { Palette, PenFill } from "react-bootstrap-icons"
import RenameProject from "./RemaneProject"

function Project(){
    return(
        <div className="Project">
          <div className="header">
            <div className="title">
               <Palette size= '18'/>
               <p>Projects</p>
            </div>
                 <div className="btns">
                   <span className="edit" onClick={
                     <PenFill size='15' color=""></PenFill>
                   }></span>
                 </div>
          </div>
          <RenameProject>Rename</RenameProject>
        </div>
    )
}


export default Project