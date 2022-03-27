export default function PersonList({ list }) {

    const deletePerson = async (pPerson) => {
        await fetch('http://localhost:3000/people/${pPerson.id}', {
            method:'DELETE',
          });
      }

      const editPerson = async (pPerson) => {
        await fetch('http://localhost:3000/people', {
            method:'PATCH',
            body: JSON.stringify(pPerson),
            headers: { 'Content-Type':'application/json' },
          });
      }


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
                            <button onClick= {editPerson} className="editButton"><img src="https://img.icons8.com/office/32/000000/edit.png"/></button>
                            
                            <button onClick= {deletePerson(person.id)} className="deleteButton"> <img src="https://img.icons8.com/small/32/000000/filled-trash.png"/></button>
                            
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}