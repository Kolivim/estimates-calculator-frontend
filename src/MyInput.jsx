// MyInput.jsx здесь обрабатываем переданный в форме UUID рассчёта и вызываем страницу с запросом информации по данной смете
import {useState} from 'react'
import {Link} from "react-router-dom";

export const MyInput = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        console.log("Введён UUID: " + event.target.value);
        setValue(event.target.value);         //  setValue("Введён UUID: " + event.target.value);

        var id = '/' + event.target.value + '?id=' + event.target.value;


        window.location.href = id;
        // window.location.assign(id); // Рабочий


        // window.location.search = 'sssf';
        // window.location.replace = 'http://localhost:3000' + id;
        // window.location.key = id;
    }

    return (
        <>
            <p>Введите UUID требуемого рассчёта: </p>
            <input
                type="text"
                value={value}
                onChange={handleChange} />

            <p>Введён UUID: {value}</p>
        </>
    )
}