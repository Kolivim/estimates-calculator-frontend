function EstimateData(props) {

    // const { persons } = props
    //
    // if (!persons || persons.length === 0) return <p>Нет данных.</p>

    const { estimates } = props

    if (!estimates || estimates.length === 0) return <p>Нет данных.</p>

    return (
        <div>

            <table border="1">
                <caption>Доступные рассчёты:</caption>
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

                        </tr>
                    )

                    // estimates.estimateElementInfoDtoList.map((estimateElementInfoDto) =>
                    //     <tr key={estimateElementInfoDto.id}>
                    //         <td>{estimateElementInfoDto.id}</td>
                    //         <td>{estimateElementInfoDto.name}</td>
                    //         <td>{estimateElementInfoDto.description}</td>
                    //         <td>{estimateElementInfoDto.lastAuthorId}</td>
                    //         <td>{estimateElementInfoDto.lastModifiedDate}</td>
                    //         <td>{estimateElementInfoDto.version}</td>
                    //         <td>{estimateElementInfoDto.workPriceListId}</td>
                    //         <td>{estimateElementInfoDto.materialPriceListId}</td>
                    //         {/* Листы через map перебирать нужно: */}
                    //         {/*<td>{estimates.estimateElementDtoList}</td>*/}
                    //         <td>{estimateElementInfoDto.estimateElementDto.estimateId}</td>
                    //     </tr>
                    // )

                    // estimates.map((estimates) =>
                    //     <tr key={estimates.id}>
                    //         <td>{estimates.id}</td>
                    //         <td>{estimates.name}</td>
                    //         <td>{estimates.description}</td>
                    //         <td>{estimates.lastAuthorId}</td>
                    //         <td>{estimates.lastModifiedDate}</td>
                    //         <td>{estimates.version}</td>
                    //         <td>{estimates.workPriceListId}</td>
                    //         <td>{estimates.materialPriceListId}</td>
                    //         {/* Листы через map перебирать нужно: */}
                    //         {/*<td>{estimates.estimateElementDtoList}</td>*/}
                    //         {/*<td>{estimates.estimateElementInfoDtoList}</td>*/}
                    //     </tr>
                    // )

                }
                </tbody>
            </table>

            <table border="1">
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
                    <th>estimateElementInfoDto.estimateElementDto.id</th>
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
                            <td>{estimates.estimateElementInfoDtoList.map((estimateElementInfoDto) =>
                                    <tr key={estimateElementInfoDto.estimateElementDto.id}>
                                        <td>{estimateElementInfoDto.estimateElementDto.id}</td>
                                        {/*estimateElementInfoDto.id*/}
                                    </tr>
                                )}</td>
                        </tr>
                    )

                    // estimates.estimateElementInfoDtoList.map((estimateElementInfoDto) =>
                    //     <tr key={estimateElementInfoDto.id}>
                    //         <td>{estimateElementInfoDto.id}</td>
                    //         <td>{estimateElementInfoDto.name}</td>
                    //         <td>{estimateElementInfoDto.description}</td>
                    //         <td>{estimateElementInfoDto.lastAuthorId}</td>
                    //         <td>{estimateElementInfoDto.lastModifiedDate}</td>
                    //         <td>{estimateElementInfoDto.version}</td>
                    //         <td>{estimateElementInfoDto.workPriceListId}</td>
                    //         <td>{estimateElementInfoDto.materialPriceListId}</td>
                    //         {/* Листы через map перебирать нужно: */}
                    //         {/*<td>{estimates.estimateElementDtoList}</td>*/}
                    //         <td>{estimateElementInfoDto.estimateElementDto.estimateId}</td>
                    //     </tr>
                    // )

                    // estimates.map((estimates) =>
                    //     <tr key={estimates.id}>
                    //         <td>{estimates.id}</td>
                    //         <td>{estimates.name}</td>
                    //         <td>{estimates.description}</td>
                    //         <td>{estimates.lastAuthorId}</td>
                    //         <td>{estimates.lastModifiedDate}</td>
                    //         <td>{estimates.version}</td>
                    //         <td>{estimates.workPriceListId}</td>
                    //         <td>{estimates.materialPriceListId}</td>
                    //         {/* Листы через map перебирать нужно: */}
                    //         {/*<td>{estimates.estimateElementDtoList}</td>*/}
                    //         {/*<td>{estimates.estimateElementInfoDtoList}</td>*/}
                    //     </tr>
                    // )

                }
                </tbody>
            </table>

            <table border="1">
                <thead>
                <tr>
                    <th>1estimateElementInfoDto.estimateElementDto.id</th>
                </tr>
                </thead>
                <tbody>
                {

                    estimates.map((estimates) =>
                        <tr key={estimates.id}>
                            <td>{estimates.estimateElementInfoDtoList.map((estimateElementInfoDto) =>
                                <tr key={estimateElementInfoDto.estimateElementDto.id}>
                                    <td>{estimateElementInfoDto.estimateElementDto.id}</td>
                                </tr>
                            )}</td>
                        </tr>
                    )

                    // estimates.estimateElementInfoDtoList.map((estimateElementInfoDto) =>
                    //     <tr key={estimateElementInfoDto.id}>
                    //         <td>{estimateElementInfoDto.id}</td>
                    //         <td>{estimateElementInfoDto.name}</td>
                    //         <td>{estimateElementInfoDto.description}</td>
                    //         <td>{estimateElementInfoDto.lastAuthorId}</td>
                    //         <td>{estimateElementInfoDto.lastModifiedDate}</td>
                    //         <td>{estimateElementInfoDto.version}</td>
                    //         <td>{estimateElementInfoDto.workPriceListId}</td>
                    //         <td>{estimateElementInfoDto.materialPriceListId}</td>
                    //         {/* Листы через map перебирать нужно: */}
                    //         {/*<td>{estimates.estimateElementDtoList}</td>*/}
                    //         <td>{estimateElementInfoDto.estimateElementDto.estimateId}</td>
                    //     </tr>
                    // )

                    // estimates.map((estimates) =>
                    //     <tr key={estimates.id}>
                    //         <td>{estimates.id}</td>
                    //         <td>{estimates.name}</td>
                    //         <td>{estimates.description}</td>
                    //         <td>{estimates.lastAuthorId}</td>
                    //         <td>{estimates.lastModifiedDate}</td>
                    //         <td>{estimates.version}</td>
                    //         <td>{estimates.workPriceListId}</td>
                    //         <td>{estimates.materialPriceListId}</td>
                    //         {/* Листы через map перебирать нужно: */}
                    //         {/*<td>{estimates.estimateElementDtoList}</td>*/}
                    //         {/*<td>{estimates.estimateElementInfoDtoList}</td>*/}
                    //     </tr>
                    // )

                }
                </tbody>
            </table>

            <table border="1">
                <caption>Рассчёт:</caption>
                <thead>
                <tr>
                    <th>estimateElementDto.id</th>
                    <th>estimateElementDto.estimateId</th>
                    <th>estimateElementDto.description</th>
                </tr>
                </thead>
                <tbody>
                {

                    estimates.map((estimates) =>

                        <tr key={estimates.id}>
                            <td>{estimates.estimateElementInfoDtoList.map((estimateElementInfoDto) =>
                                <tr key={estimateElementInfoDto.estimateElementDto.id}>
                                    <td>{estimateElementInfoDto.estimateElementDto.id}</td>
                                    <td>{estimateElementInfoDto.estimateElementDto.estimateId}</td>
                                    <td>{estimateElementInfoDto.estimateElementDto.description}</td>


                                </tr>
                            )}</td>
                        </tr>
                    )

                }
                </tbody>
            </table>

        </div>
    )
}

export default EstimateData