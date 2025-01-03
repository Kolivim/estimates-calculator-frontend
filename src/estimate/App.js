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


    // Y1
    let table1 = document.createElement('table'); // Торжественно готовим стол
    table1.setAttribute("id","tbl");
    let tbody1 = table1.createTBody(); // Пришло время для "сердца" стола

    let i = 0;
    for (var key in post) {
        console.log('key = ' + key + ': value = ' + post[key]);

        if(key == 'estimateElementInfoDtoList') {
            console.log('key estimateElementInfoDtoList ' + ': value = ' + post[key]);

            let rrr = post[key];    // Сам элемент массива - запись работы грубо, в обёртках ???

            console.log('rrr ' + ': value = ' + rrr);

            for (var key2 in rrr) { // Перебираем элементы массива - записи работы грубо, в обёртках ???
                console.log('key2 = ' + key2 + ': value2 = ' + rrr[key2]);

                let rrr2 = rrr[key2];

                for (var key3 in rrr2) {
                    console.log('key3 = ' + key3 + ': value3 = ' + rrr2[key3]);

                    // let i = 0;
                    let row = tbody1.insertRow(i); // Добавляем строку для разнообразия

                    if(key3 == 'elementInfoDto') {

                        let rrr3 = rrr2[key3]       // Тут внутри еще содержится массив с материалами

                        // W1 Здесь добавляем строку с работой :
                        /*
                        let m = 0;

                        for (var key4 in rrr3) {
                            console.log('key4 = ' + key4 + ': value4 = ' + rrr3[key4]);

                            let cell = row.insertCell(m); // Заполняем ячейку
                            cell.textContent = i + '/' + m + ' | ' + key4 + ' : ' + rrr3[key4]; // Устанавливаем содержимое
                            m++;

                            if(key4 == 'materialElementInfoDtoList') {
                                let rrr4material = rrr3[key4];
                                console.log('rrr4material = ' + rrr4material);


                                // N1: Заводим новую строку и заполняем её данными материала: РАБОЧЕЕ
                                // i++;
                                // let row1 = tbody1.insertRow(i); // Добавляем строку для разнообразия
                                //
                                //
                                // for (var keyMat in rrr4material) {
                                //     console.log('keyMat = ' + rrr4material[keyMat]);
                                //
                                //     let rrr4materialOne = rrr4material[keyMat];     // Здесь уже отдельная запись с материалом лежит
                                //     console.log('rrr4materialOne = ' + rrr4materialOne);
                                //
                                //     let mMat = 0;
                                //
                                //     for (var keyMatInfo in rrr4materialOne) {
                                //         console.log('keyMatInfo = ' + keyMatInfo + 'value = ' + rrr4materialOne[keyMatInfo]);
                                //
                                //         let matInfo = rrr4materialOne[keyMatInfo];
                                //
                                //         console.log('keyMatInfo = ' + keyMatInfo + 'value = ' + matInfo);
                                //
                                //         let cellMat = row1.insertCell(mMat); // Заполняем ячейку
                                //         cellMat.textContent = 'i_'+ i + ' m_ ' + m + ' value_' + matInfo; // Устанавливаем содержимое
                                //         mMat++;
                                //     }
                                //
                                // }
                                // !N1


                                // rrr3[key4].map(el => (
                                //     console.log('el = ' + el)
                                // ))

                            }


                            // key4 = id: value4 = null
                            // key4 = isDeleted: value4 = null
                            // key4 = elementDto: value4 = [object Object]
                            // key4 = materialElementInfoDtoList: value4 =
                            // key4 = workName: value4 = Монтаж стен гкл
                            // key4 = workPrice: value4 = 450
                            // key4 = quantity: value4 = 43
                            // key4 = totalPrice: value4 = 19350



                            // var data = ["Яблоко", "Апельсин", "Слива"];
                            //
                            // data.forEach(function(element, key){
                            //     console.log(key + ': ' + element);
                            // });

                        }

                        i++;
                        */
                        // !W1 Здесь добавляем строку с работой


                        //  W1_v2

                        let cell = row.insertCell(0); // Заполняем ячейку
                        cell.textContent = i + '/' + 0 + ' | ' + '-'; // Устанавливаем содержимое первой строки - оставил под номер


                        for (var key4 in rrr3) {
                            console.log('key4 = ' + key4 + ': value4 = ' + rrr3[key4]);
                            if(key4 == 'workName') {
                                let rrr4work = rrr3[key4];
                                console.log('rrr4work = ' + rrr4work);
                                let cell = row.insertCell(1); // Заполняем вторую ячейку
                                cell.textContent = i + '/' + 1 + ' | ' + key4 + ' : ' + rrr4work; // Устанавливаем содержимое
                            }
                        }


                        for (var key4 in rrr3) {
                            console.log('key4 = ' + key4 + ': value4 = ' + rrr3[key4]);
                            if(key4 == 'workPrice') {
                                let rrr4work = rrr3[key4];
                                console.log('rrr4work = ' + rrr4work);
                                let cell = row.insertCell(2); // Заполняем третью ячейку
                                cell.textContent = i + '/' + 2 + ' | ' + key4 + ' : ' + rrr4work; // Устанавливаем содержимое
                            }
                        }


                        for (var key4 in rrr3) {
                            console.log('key4 = ' + key4 + ': value4 = ' + rrr3[key4]);
                            if(key4 == 'quantity') {
                                let rrr4work = rrr3[key4];
                                console.log('rrr4work = ' + rrr4work);
                                let cell = row.insertCell(3); // Заполняем четвертую ячейку
                                cell.textContent = i + '/' + 3 + ' | ' + key4 + ' : ' + rrr4work; // Устанавливаем содержимое
                            }
                        }


                        for (var key4 in rrr3) {
                            console.log('key4 = ' + key4 + ': value4 = ' + rrr3[key4]);
                            if(key4 == 'totalPrice') {
                                let rrr4work = rrr3[key4];
                                console.log('rrr4work = ' + rrr4work);
                                let cell = row.insertCell(4); // Заполняем пятую ячейку
                                cell.textContent = i + '/' + 4 + ' | ' + key4 + ' : ' + rrr4work; // Устанавливаем содержимое
                            }
                        }


                        i++;
                        //  !W1_v2


                        //  Здесь добавляем строки с материалами :
                        for (var key4 in rrr3) {

                            if(key4 == 'materialElementInfoDtoList') {
                                let rrr4material = rrr3[key4];
                                console.log('rrr4material = ' + rrr4material);


                                // N1: Заводим новую строку и заполняем её данными материала:
                                // i++;
                                let row1 = tbody1.insertRow(i); // Добавляем строку для материала


                                for (var keyMat in rrr4material) {
                                    console.log('keyMat = ' + rrr4material[keyMat]);

                                    let rrr4materialOne = rrr4material[keyMat];     // Здесь уже отдельная запись с материалом лежит
                                    console.log('rrr4materialOne = ' + rrr4materialOne);

                                    // M1 Заполняем столбцами созданную строку с материалом, вносим значения в столбцы :
                                    /*
                                    let mMat = 0;

                                    for (var keyMatInfo in rrr4materialOne) {
                                        console.log('keyMatInfo = ' + keyMatInfo + 'value = ' + rrr4materialOne[keyMatInfo]);

                                        let matInfo = rrr4materialOne[keyMatInfo];

                                        console.log('keyMatInfo = ' + keyMatInfo + 'value = ' + matInfo);


                                        let cellMat = row1.insertCell(mMat); // Заполняем ячейку
                                        cellMat.textContent = i + '/' + mMat + ' | ' + keyMatInfo + ' : ' + matInfo; // Устанавливаем содержимое
                                        mMat++;

                                    }
                                    */
                                    // !M1


                                    // M1_v2 Заполняем столбцами созданную строку с материалом, вносим значения в столбцы :
                                    let cellMat = row1.insertCell(0);
                                    cellMat.textContent = i + '/' + 0 + ' | ' + '-'; // Устанавливаем содержимое для первой ячейки - под номер оставил


                                    for (var keyMatInfo in rrr4materialOne) {
                                        let matInfo = rrr4materialOne[keyMatInfo];
                                        console.log('keyMatInfo = ' + keyMatInfo + 'value = ' + matInfo);

                                        if(keyMatInfo == 'materialName') {
                                            let cellMat = row1.insertCell(1);   // Устанавливаем содержимое для второй ячейки - имя работы/материала
                                            cellMat.textContent = i + '/' + 1 + ' | ' + keyMatInfo + ' : ' + matInfo; // Устанавливаем содержимое
                                        }
                                    }


                                    for (var keyMatInfo in rrr4materialOne) {
                                        let matInfo = rrr4materialOne[keyMatInfo];
                                        console.log('keyMatInfo = ' + keyMatInfo + 'value = ' + matInfo);

                                        if(keyMatInfo == 'materialPrice') {
                                            let cellMat = row1.insertCell(2);   // Устанавливаем содержимое для третьей ячейки - стоимости единицы работы/материала
                                            cellMat.textContent = i + '/' + 2 + ' | ' + keyMatInfo + ' : ' + matInfo; // Устанавливаем содержимое
                                        }
                                    }


                                    for (var keyMatInfo in rrr4materialOne) {
                                        let matInfo = rrr4materialOne[keyMatInfo];
                                        console.log('keyMatInfo = ' + keyMatInfo + 'value = ' + matInfo);

                                        if(keyMatInfo == 'totalQuantityForWork') {
                                            let cellMat = row1.insertCell(3);   // Устанавливаем содержимое для четвертой ячейки - totalQuantity работы/материала
                                            cellMat.textContent = i + '/' + 3 + ' | ' + keyMatInfo + ' : ' + matInfo; // Устанавливаем содержимое
                                        }
                                    }


                                    for (var keyMatInfo in rrr4materialOne) {
                                        let matInfo = rrr4materialOne[keyMatInfo];
                                        console.log('keyMatInfo = ' + keyMatInfo + 'value = ' + matInfo);

                                        if(keyMatInfo == 'totalPriceForWork') {
                                            let cellMat = row1.insertCell(4);   // Устанавливаем содержимое для пятой ячейки - totalPrice работы/материала
                                            cellMat.textContent = i + '/' + 4 + ' | ' + keyMatInfo + ' : ' + matInfo; // Устанавливаем содержимое
                                        }
                                    }
                                    // !M1_v2

                                    i++;    // После заполнения строки с материалами увеличиваем на индекс следующей строки на 1, проверить что с несколькими материалами корректно индекс меняется !
                                }
                                // !N1

                            }

                        }

                        //  !Здесь добавляем строки с материалами

                    }
                }
            }

        }
    }

    document.body.appendChild(table1);
    // !Y1

    // let ttt = post['estimateElementInfoDtoList'];
    // console.log('key estimateElementInfoDtoList ' + ': value = ' + ttt);


    // C1 Рабочее !!!
    // let table = document.createElement('table'); // Торжественно готовим стол
    // table.setAttribute("id","tbl");
    // let tbody = table.createTBody(); // Пришло время для "сердца" стола
    //
    // // тут создадим таблицу с rows рядами и cols колонками
    // for (let i = 0; i < 5; i++) {
    //     let row = tbody.insertRow(i); // Добавляем строку для разнообразия
    //     for (let m = 0; m < 7; m++) {
    //         let cell = row.insertCell(m); // Заполняем ячейку
    //         cell.textContent = 'Строка '+ i + ' _ Столбец ' + m; // Устанавливаем содержимое
    //     }
    // }
    //
    // document.body.appendChild(table);
    // !C1 Рабочее !!!


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
    // let table1 = document.createElement('table'); // Торжественно готовим стол
    // let tbody1 = table1.createTBody(); // Пришло время для "сердца" стола
    //
    // // тут создадим таблицу с rows рядами и cols колонками
    // for (let i = 0; i < 10; i++) {
    //     let row = tbody1.insertRow(i); // Добавляем строку для разнообразия
    //     for (let m = 0; m < 7; m++) {
    //         let cell = row.insertCell(m); // Заполняем ячейку
    //         cell.textContent = 'Строка '+ i + ' _ Столбец ' + m; // Устанавливаем содержимое
    //     }
    // }
    //
    // document.body.appendChild(table1);
    // !C1
}