import React from "react";
import axios from "axios";


function Test() {

    // A1
    // let table = document.createElement('table');
    // let row = table.insertRow(0); // добавим строку
    //
    // let cell1 = row.insertCell(0); // добавим ячейки
    // let cell2 = row.insertCell(1);
    //
    // cell1.innerHTML = 'Текст ячейки 1'; // вставим текст
    // cell2.innerHTML = 'Текст ячейки 2';

    // let  row2 = table.insertRow();
    // let cell3 = row2.insertCell();
    // let cell4 = row2.insertCell();
    // cell3.innerHTML = 'Текст ячейки 3';
    // cell4.innerHTML = 'Текст ячейки 4';


    // document.body.appendChild(table);
    // !A1


    // B1
    // var td_cells = document.getElementById("table").cells;
    // for (var i=0; i < td_cells.length; i++)
    //     alert(td_cells[i].innerHTML);

    // var t = document.getElementsById('t1');
    // var rows = t.getElementsByTagName("tr");
    // for ( var i = 1; i < rows.length; i += 2 )
    //     rows[i].className = "odd";
    // !B1


    // C1
    let table = document.createElement('table'); // Торжественно готовим стол
    table.setAttribute("id","tbl");
    let tbody = table.createTBody(); // Пришло время для "сердца" стола

    // тут создадим таблицу с rows рядами и cols колонками
    for (let i = 0; i < 5; i++) {
        let row = tbody.insertRow(i); // Добавляем строку для разнообразия
        for (let m = 0; m < 7; m++) {
            let cell = row.insertCell(m); // Заполняем ячейку
            cell.textContent = 'Строка '+ i + ' _ Столбец ' + m; // Устанавливаем содержимое
        }
    }

    document.body.appendChild(table);
    // !C1


    // D1
    /*
    let table = document.createElement('table'); // Торжественно готовим стол
    let tbody = table.createTBody(); // Пришло время для "сердца" стола
    let row = tbody.insertRow(); // Добавляем строку для разнообразия
    let cell = row.insertCell(); // Заполняем ячейку
    cell.textContent = 'Текст ячейки'; // Устанавливаем содержимое
    document.body.appendChild(table); // Стол к банкету готов!
    */
    // !D1


    const btn = document.createElement("button");
    btn.innerHTML = "Hello Button";
    document.body.appendChild(btn);
}

export default Test;


