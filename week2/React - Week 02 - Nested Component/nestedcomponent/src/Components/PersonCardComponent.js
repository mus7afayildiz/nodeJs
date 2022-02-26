import foreigners from 'C:/Users/mus7a/OneDrive/Desktop/hicoders/nodeJs/week2/React - Week 02 - Nested Component/nestedcomponent/src/Data/foreigners.json'


function PersonCardComponent(pIndex) {
    return (
        <div className="card">
            <div className="card">
                <img src={foreigners[pIndex].avatar} className="card-img" alt="..."/>
                    <div className="card-body">
                        <ul>
                            <li>Firstname: {foreigners[pIndex].first_name} </li>
                            <li>Lastname: {foreigners[pIndex].last_name} </li>
                            <li>Address: {foreigners[pIndex].address} </li>
                            <li>Salary: {foreigners[pIndex].salary} </li>
                            <li>Gender: {foreigners[pIndex].gender} </li>
                            <li>Email: {foreigners[pIndex].email}</li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default PersonCardComponent;