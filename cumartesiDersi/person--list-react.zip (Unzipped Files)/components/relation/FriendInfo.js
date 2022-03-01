
function FriendHeader(props){
    return <h1>Friend ({props.amount})</h1>
}


function Friend(props){
    const friend = props.data;

    return (
        <figure>
            <img src={friend.avatar} 
                    alt={friend.firstName + " " + friend.firstName}/>
            <figurecaption>
                <div>Firstname: {friend.firstName}</div>
                <div>Lastname: {friend.lastName}</div>
            </figurecaption>
        </figure>
    );
}

function FriendList(props){
    return (
        <div className="list">
            {
                props.list.map((friend, index) => <Friend key={index} data={friend} />)
            }
        </div>
    )
}

export default function FriendInfo(props){
    return (
        <>
            <FriendHeader amount={props.list.length}/>
            <FriendList list={props.list}/>
        </>
    )
}