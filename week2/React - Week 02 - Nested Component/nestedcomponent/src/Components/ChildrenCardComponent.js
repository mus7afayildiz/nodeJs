import foreigners from 'C:/Users/mus7a/OneDrive/Desktop/hicoders/nodeJs/week2/React - Week 02 - Nested Component/nestedcomponent/src/Data/foreigners.json'


function ChildrenCardComponent(pIndex) {
    const childrens = foreigners[pIndex].children.map((child) =>
        
            <div className="card">
                <img src={child.avatar} className="card-img" alt="..." />
                <div className="card-body text-left">
                    <ul>
                        <li>Firstname: {child.firstName}</li>
                        <li>Gender: {child.gender}</li>
                        <li>Birthday: {child.birthday}</li>
                    </ul>
                </div>
            </div>    
        )
    return (childrens
    )
}
export default ChildrenCardComponent;