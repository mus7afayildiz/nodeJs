import Person from './Person'


export default function PersonList(props){
    return (
        <main>
            {
                props.list
                    .map((person) => <Person key={person.id} data={person} />)
            }
        </main>
    )
}