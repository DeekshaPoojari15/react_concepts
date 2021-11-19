function NameList(){
	const names=['Clark', 'Mark','Diana']
	const nameList=names.map(name => <h2>{name}</h2> )
	return(
			<div>
			{names.map(name => <h2>{name}</h2> )}
			<div>{nameList}</div>
			</div>
		)
}
export default NameList;