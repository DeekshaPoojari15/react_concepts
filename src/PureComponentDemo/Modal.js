import './modal.css'
import ReactDOM from 'react-dom'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none"

  return ReactDOM.createPortal(
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>,
    document.getElementById("portal-root")
  )
}

export default Modal;