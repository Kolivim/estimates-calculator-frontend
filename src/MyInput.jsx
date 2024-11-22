// MyInput.jsx здесь обрабатываем переданный в форме UUID рассчёта и вызываем страницу с запросом информации по данной смете
import {useState} from 'react'

export const MyInput = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        console.log("Введён UUID: " + event.target.value);
        setValue(event.target.value);         //  setValue("Введён UUID: " + event.target.value);
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