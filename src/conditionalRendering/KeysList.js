function KeysList(){
	const persons=[
					{
						id:1,
						name:'Alice',
						age:29,
						skills:'React'
					},
					{
						id:2,
						name:'Clark',
						age:25,
						skills:'Node'
					},
					{
						id:3,
						name:'Diana',
						age:34,
						skills:'Angular'
					}
				]
	const personList=persons.map(person => <h2 key={person.id}>I am {person.name} of age {person.age} with skills {person.skills}</h2>)
	return(
		<div>{personList}</div>
	)
}
export default KeysList;