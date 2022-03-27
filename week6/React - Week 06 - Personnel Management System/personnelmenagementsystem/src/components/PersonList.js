export default function PersonList({ list }) {
/*rendering the person list statically*/
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">About</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((person, index) =>
                        <tr key={index}>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.email}</td>
                            <td>{person.password}</td>
                            <td>{person.about}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}