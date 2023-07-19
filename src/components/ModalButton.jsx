import { useState } from "react"
import { createPortal } from "react-dom"
import Modal from "./Modal"

const ModalButton = () => {
    const[showModal,setShowModal] = useState(false)
  return (
    <>
          <button className="block mx-auto bg-slate-200 text-slate-900 p-2 rounded"
           onClick={()=>setShowModal(true)}
           >open the ModalButton
           </button>
         {showModal && createPortal(<Modal closeModal={()=>setShowModal(false)}/>,
          document.body)}
    </>
  )
}
export default ModalButton