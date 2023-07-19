const Modal = ({closeModal}) => {
  return (
    <div className="fixed inset-0 bg-slate-800/75 flex items-center justify-center" onClick={closeModal}>Modal
      <div className="bg-slate-300 text-slate-900 p-10 rounded relative mb-[10vh" onClick={e => e.stopPropagation()}>
        <button onClick={closeModal} className="absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100 rounded flex justify-center items-center">x</button>
        here is the content
      </div>
    </div>
  )
}
export default Modal