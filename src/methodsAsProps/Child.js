function Child(props){
{/* <button onClick={props.greetHandler}>Greet Parent</button> --w/o parameters */}
	return(
		<button onClick={()=>props.greetHandler('Child')}>Greet Parent From Child</button>
	)
}
export default Child;