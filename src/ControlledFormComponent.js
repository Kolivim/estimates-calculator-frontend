import React, { Component } from "react";
// import { useState } from 'react';

// const [value, setValue] = useState('');
//
// const handleChange = (event) => {
//     setValue(event.target.value);
// }

class ControlledFormComponent extends Component {

    render() {
        return (
            <div>
                <h3>Controlled Component</h3>
                <br />
                <form>
                    <label>Student Name: </label>
                    <input type="text" placeholder="enter student name"
                           // value={value}
                           // onChange={handleChange}
                    />

                    {/*<p>Value: {value}</p>*/}
                </form>
            </div>
        );
    }
}
// console.log(response.data);
export default ControlledFormComponent;