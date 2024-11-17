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
                    <th>name</th>
                    <th>description</th>
                    <th>lastAuthorId</th>
                    <th>lastModifiedDate</th>
                    <th>version</th>
                    <th>workPriceListId</th>
                    <th>materialPriceListId</th>
                    {/*<th>estimateElementDtoList</th>*/}
                    {/*<th>estimateElementInfoDtoList</th>*/}
                </tr>
                </thead>
                <tbody>
                {
                    estimates.map((estimates) =>
                        <tr key={estimates.id}>
                            <td>{estimates.id}</td>
                            <td>{estimates.name}</td>
                            <td>{estimates.description}</td>
                            <td>{estimates.lastAuthorId}</td>
                            <td>{estimates.lastModifiedDate}</td>
                            <td>{estimates.version}</td>
                            <td>{estimates.workPriceListId}</td>
                            <td>{estimates.materialPriceListId}</td>
                            {/* Листы через map перебирать нужно: */}
                            {/*<td>{estimates.estimateElementDtoList}</td>*/}
                            {/*<td>{estimates.estimateElementInfoDtoList}</td>*/}
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default EstimateData