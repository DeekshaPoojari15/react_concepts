import './newstyle.css'
import styles from './newstyle.module.css'

const heading={
	fontSize:'50px',
	color:'blue'
}

function StyleSheet(){
	return(
		<div>
		<h1 className="primary">lSTYLESHEET single class</h1>
		<h1 className="primary secondary">STYLESHEET multiple class</h1>
		<h1 style={heading}>STYLESHEET inline styling</h1>
		<h1 className='error'> ERROR</h1>
		<h1 className={styles.success}> SUCCESS (module styles)</h1>
		</div>
	)
}

export default StyleSheet;