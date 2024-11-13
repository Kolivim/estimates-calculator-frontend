import axios from 'axios';

import React, { useEffect, useState } from 'react';


function Estimate() {

    axios.get('http://localhost:8081/front/p')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });


    return (
        <div className="Estimate">

        </div>
    );

}

export default Estimate;




