import axios from "axios";
import React from "react";
import {useLocation} from "react-router-dom";

// const baseURL = "http://localhost:8081/api/v1/estimate/all";
// const baseURL = "http://localhost:8081/api/v1/estimate/de71a5e2-7e56-44f7-bb29-b86c249dc35e";
const baseURL = "http://localhost:8081/api/v1/estimate/2505b0ea-6aa9-4758-995b-0b201866d8d4";
const baseEstimateURL = "http://localhost:8081/api/v1/estimate";

export default function App() {


    const emp = useLocation()

    console.log(emp)

    let text = emp.pathname

    let text1 = text.slice(1, text.length);

    console.log('text = ' + text)
    console.log('text1 = ' + text1)



    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        fetch(/*baseURL*/ baseEstimateURL + text)
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

    for (var key in post) {
        console.log('key = ' + key + ': value = ' + post[key]);

        if(key == 'estimateElementInfoDtoList') {
            console.log('key estimateElementInfoDtoList ' + ': value = ' + post[key]);

            let rrr = post[key];

            console.log('rrr ' + ': value = ' + rrr);

            for (var key2 in rrr) {
                console.log('key2 = ' + key2 + ': value2 = ' + rrr[key2]);

                let rrr2 = rrr[key2];

                for (var key3 in rrr2) {
                    console.log('key3 = ' + key3 + ': value3 = ' + rrr2[key3]);

                    if(key3 == 'elementInfoDto') {

                        let rrr3 = rrr2[key3]

                        for (var key4 in rrr3) {
                            console.log('key4 = ' + key4 + ': value4 = ' + rrr3[key4]);

                            /*
                            key4 = id: value4 = null
                            key4 = isDeleted: value4 = null
                            key4 = elementDto: value4 = [object Object]
                            key4 = materialElementInfoDtoList: value4 =
                            key4 = workName: value4 = Монтаж стен гкл
                            key4 = workPrice: value4 = 450
                            key4 = quantity: value4 = 43
                            key4 = totalPrice: value4 = 19350
                            */

                            /*
                            var data = ["Яблоко", "Апельсин", "Слива"];

                            data.forEach(function(element, key){
                                console.log(key + ': ' + element);
                            });
                            */
                        }

                    }
                }
            }

        }
    }

    // let ttt = post['estimateElementInfoDtoList'];
    // console.log('key estimateElementInfoDtoList ' + ': value = ' + ttt);

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


                            <td>
                                {estimateElementInfoDto.elementInfoDto.materialElementInfoDtoList.map((materialElementInfoDto) =>
                                <tr key={materialElementInfoDto.id}>
                                    <td>{materialElementInfoDto.id}</td>
                                    <td>{materialElementInfoDto.materialName}</td>
                                    <td>{materialElementInfoDto.materialPrice}</td>
                                    <td>{materialElementInfoDto.totalQuantityForWork}</td>
                                    <td>{materialElementInfoDto.totalPriceForWork}</td>
                                </tr>
                            )}
                            </td>

                        </tr>
                    )

                }
                </tbody>
            </table>

        </div>
    );


    // C1
    let table = document.createElement('table'); // Торжественно готовим стол
    let tbody = table.createTBody(); // Пришло время для "сердца" стола

    // тут создадим таблицу с rows рядами и cols колонками
    for (let i = 0; i < 10; i++) {
        let row = tbody.insertRow(i); // Добавляем строку для разнообразия
        for (let m = 0; m < 7; m++) {
            let cell = row.insertCell(m); // Заполняем ячейку
            cell.textContent = 'Строка '+ i + ' _ Столбец ' + m; // Устанавливаем содержимое
        }
    }

    document.body.appendChild(table);
    // !C1
}