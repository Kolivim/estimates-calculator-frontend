function OneEstimateData(props) {

    // const { persons } = props
    // if (!persons || persons.length === 0) return <p>Нет данных.</p>

    // const {estimate} = props
    const estimate  = props//.estimate

    let oneE = props['estimate']

    let oneEstimate = props.estimate

    const estimate1 = oneEstimate ;

    // console.log(estimate)

    // if (!estimate || estimate.length === 0) return <p>Нет данных.</p>

    return (
        <div>

            <table border="1">
                <caption>Рассчёт:</caption>
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
                    {/*<th>estimateElementInfoDto.estimateElementDto.id</th>*/}
                </tr>
                </thead>
                <tbody>


                        <tr key={estimate.id}>
                            <td>{estimate.id}</td>
                            <td>{estimate.name}</td>
                            <td>{estimate.description}</td>
                            <td>{estimate.lastAuthorId}</td>
                            <td>{estimate.lastModifiedDate}</td>
                            <td>{estimate.version}</td>
                            <td>{estimate.workPriceListId}</td>
                            <td>{estimate.materialPriceListId}</td>

                            {/*<td>{estimate.estimate.id}</td>*/}
                            {/*<td>{estimate.estimate.name}</td>*/}
                            {/*<td>{estimate.estimate.description}</td>*/}
                            {/*<td>{estimate.estimate.lastAuthorId}</td>*/}
                            {/*<td>{estimate.estimate.lastModifiedDate}</td>*/}
                            {/*<td>{estimate.estimate.version}</td>*/}
                            {/*<td>{estimate.estimate.workPriceListId}</td>*/}
                            {/*<td>{estimate.estimate.materialPriceListId}</td>*/}

                            {/* Листы через map перебирать нужно: */}
                            {/*<td>{estimates.estimateElementDtoList}</td>*/}
                        </tr>


                </tbody>
            </table>

        </div>
    )
}

export default OneEstimateData