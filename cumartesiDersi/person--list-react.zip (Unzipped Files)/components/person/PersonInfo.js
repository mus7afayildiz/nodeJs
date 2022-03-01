
function PersonHeader(){
    return <h1>PERSON</h1>
}


export default function PersonInfo(props){
    const person = props.data;

    return (
        <>
            <PersonHeader/>
            <figure>
                <img src={person.avatar} 
                     alt={person.first_name + " " + person.first_name}/>
                <figurecaption>
                    <div>Firstname: {person.first_name}</div>
                    <div>Lastname: {person.last_name}</div>
                    <div>Firstname: {person.first_name}</div>
                </figurecaption>
            </figure>
        </>
    );
}