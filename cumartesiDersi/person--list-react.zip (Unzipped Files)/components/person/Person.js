import PersonInfo from './PersonInfo'
import PersonRelation from './PersonRelation'

export default function Person(props){

    return (
        <section>
            <PersonInfo data={props.data}/>
            <PersonRelation friends={props.data.friends} children={props.data.children}/>
        </section>
    )
}