import ReactDOM from 'react-dom'

function PortalDemo(){
	return ReactDOM.createPortal(
		<h1>Potal Demo </h1>,
		document.getElementById("portal-root")
	)
}

export default PortalDemo;