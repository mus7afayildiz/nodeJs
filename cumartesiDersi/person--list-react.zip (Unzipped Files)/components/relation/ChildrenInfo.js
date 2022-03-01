
function ChildrenHeader(props){
    return <h1>CHILDREN ({props.amount})</h1>
}


function Child(props){
    const child = props.data;

    return (
        <figure>
            <img src={child.avatar} 
                    alt={child.firstName + " " + child.firstName}/>
            <figurecaption>
                <div>Firstname: {child.firstName}</div>
                <div>Lastname: {child.lastName}</div>
            </figurecaption>
        </figure>
    );
}


function ChildrenList(props){
    return (
        <div className="list">
            {
                props.list.map((child, index) => 
                    <Child key={index} data={child} />)
            }
        </div>
    )
}


export default function ChildrenInfo(props){
    return (
        <>
            <ChildrenHeader amount={props.list.length}/>
            <ChildrenList list={props.list}/>
        </>
    )
}