import { useState } from 'react';

function MyControlledInput({ }) {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <div>Input value: {value}</div>
            <input value={value} onChange={onChange} />
        </>
    );
}