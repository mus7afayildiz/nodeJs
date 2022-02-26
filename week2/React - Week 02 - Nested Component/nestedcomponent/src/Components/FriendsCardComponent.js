import foreigners from 'C:/Users/mus7a/OneDrive/Desktop/hicoders/nodeJs/week2/React - Week 02 - Nested Component/nestedcomponent/src/Data/foreigners.json'


function FriendsCardComponent(pIndex) {
    const friends = foreigners[pIndex].friends.map((friend) =>
            <div className="card">
                <img src={friend.avatar} className="card-img" alt="..."/>
                    <div className="card-body">
                        <ul>
                            <li>Firstname: {friend.firstName} </li>
                            <li>Gender: {friend.gender} </li>
                            <li>Birthday: {friend.birthday} </li>
                            <li>Phone: {friend.phone}</li>
                        </ul>
                    </div>
            </div>
        )
    return (friends   
    )
}
export default FriendsCardComponent;