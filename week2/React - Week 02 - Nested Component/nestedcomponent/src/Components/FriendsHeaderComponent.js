import foreigners from 'C:/Users/mus7a/OneDrive/Desktop/hicoders/nodeJs/week2/React - Week 02 - Nested Component/nestedcomponent/src/Data/foreigners.json'


function FriendsHeaderComponent(pIndex) {
    const NumberOfFriends = foreigners[pIndex].friends.length
    return ( 
        <header className="p-3 bg-danger text-white">
            <div className="container bg-danger">
              FRIENDS ({NumberOfFriends}) 
            </div>
        </header>
    )

}

export default FriendsHeaderComponent