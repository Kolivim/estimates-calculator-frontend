function UserData(props) {

    const { persons } = props

    if (!persons || persons.length === 0) return <p>Нет данных.</p>

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>email</th>
                    <th>phone</th>
                </tr>
                </thead>
                <tbody>
                {
                    persons.map((person) =>
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.email}</td>
                            <td>{person.phone}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default UserData