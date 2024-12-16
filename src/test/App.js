import axios from "axios";
import React from "react";

// const baseURL = "http://localhost:8081/api/v1/estimate/all";
// const baseURL = "http://localhost:8081/api/v1/estimate/de71a5e2-7e56-44f7-bb29-b86c249dc35e";
const baseURL = "http://localhost:8081/api/v1/estimate/2505b0ea-6aa9-4758-995b-0b201866d8d4";

export default function App() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        fetch(baseURL)
            .then((response) => response.json())
            .then((apiData) => {
                setPost(apiData);
            });
    }, []);

    // axios.get(baseURL).then((response) => {}
    //     );

    // React.useEffect(() => {

        // const ttt = await axios.get(baseURL, );

        // axios.get(baseURL).then((response) => {
        //     setPost(response.data);
        // });
    // }, []);

    if (!post) return null;

    return (
        <div>
            <h1>{post.name}</h1>
            <p>{post.id}</p>
            <p>{post.isDeleted}</p>

            <table border="1">
                <caption>Рассчёт:</caption>
                <thead>
                <tr>
                    <th>post.id</th>
                    <th>post.isDeleted</th>
                    <th>post.name</th>
                    <th>post.workPriceListId</th>
                    <th>post.materialPriceListId</th>
                    <th>post.description</th>
                    <th>post.lastAuthorId</th>
                    {/*<th>post.estimateElementInfoDtoList</th>*/}

                </tr>
                </thead>
                <tbody>
                {

                        <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.isDeleted}</td>
                                    <td>{post.name}</td>
                                    <td>{post.workPriceListId}</td>
                                    <td>{post.materialPriceListId}</td>
                                    <td>{post.description}</td>
                                    <td>{post.lastAuthorId}</td>
                                    {/*<td>{post.estimateElementInfoDtoList}</td>*/}
                        </tr>

                }
                </tbody>
            </table>

            <h1>Следующие элементы:</h1>

            <table border="1">
                <caption>Элементы:</caption>
                <thead>
                <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>elementDto.id</th>
                    <th>workName</th>
                    <th>workPrice</th>
                    <th>quantity</th>
                    <th>totalPrice</th>
                    <th>materialElementInfoDtoList</th>

                </tr>
                </thead>
                <tbody>
                {

                    post.estimateElementInfoDtoList.map((estimateElementInfoDto) =>
                        <tr key={estimateElementInfoDto.id}>
                            <td>{estimateElementInfoDto.id}</td>
                            <td>{estimateElementInfoDto.elementInfoDto.id}</td>
                            <td>{estimateElementInfoDto.elementInfoDto.elementDto.id}</td>
                            <td>{estimateElementInfoDto.elementInfoDto.workName}</td>
                            <td>{estimateElementInfoDto.elementInfoDto.workPrice}</td>
                            <td>{estimateElementInfoDto.elementInfoDto.quantity}</td>
                            <td>{estimateElementInfoDto.elementInfoDto.totalPrice}</td>

                            <td>{estimateElementInfoDto.elementInfoDto.materialElementInfoDtoList.map((materialElementInfoDto) =>
                                <tr key={materialElementInfoDto.id}>
                                    <td>{materialElementInfoDto.id}</td>
                                    <td>{materialElementInfoDto.materialName}</td>
                                    <td>{materialElementInfoDto.materialPrice}</td>
                                    <td>{materialElementInfoDto.totalQuantityForWork}</td>
                                    <td>{materialElementInfoDto.totalPriceForWork}</td>
                                </tr>
                            )}</td>

                        </tr>
                    )

                }
                </tbody>
            </table>

        </div>
    );
}