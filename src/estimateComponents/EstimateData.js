function EstimateData(props) {

    // const { persons } = props
    //
    // if (!persons || persons.length === 0) return <p>Нет данных.</p>

    const { estimates } = props

    if (!estimates || estimates.length === 0) return <p>Нет данных.</p>

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
                    estimates.map((estimates) =>
                        <tr key={estimates.id}>
                            <td>{estimates.id}</td>
                            <td>{estimates.firstName}</td>
                            <td>{estimates.lastName}</td>
                            <td>{estimates.email}</td>
                            <td>{estimates.phone}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default EstimateData