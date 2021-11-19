import React from 'react'

function MemoComp({name}){
	console.log("Functional Memo Component")
	return(
		<div>
		{name}
		</div>
	)
}

export default React.memo(MemoComp);