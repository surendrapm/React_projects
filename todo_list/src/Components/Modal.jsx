import { useRef } from "react"

function Modal({children,showModel,setShowModal}){
    
      const modalRef = useRef()
  
      function closeModel(e){
        if(e.target === modalRef.current){
            setShowModal(false)
        }
      }
    return(
        showModel &&
        <div className="Modal" ref={modalRef} onClick={closeModel}>
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Modal