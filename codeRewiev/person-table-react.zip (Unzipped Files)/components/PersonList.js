

export default function PersonList( {list} ){

    return (
        <table className="table">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>About</th>
            </tr>

            {
                list.map( (person, index) => 
                    <tr key={index}>
                        <td>{person.firstName}</td>
                        <td>{person.lastName}</td>
                        <td>{person.email}</td>
                        <td>{person.password}</td>
                        <td>{person.about}</td>
                    </tr>
                )
            }

        </table>
    )
}