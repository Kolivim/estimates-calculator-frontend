import axios from 'axios';

import React, { useEffect, useState } from 'react';

import EstimateData from './estimateComponents/EstimateData'
import LoadingEstimateData from './estimateComponents/LoadingEstimateData'
import UserData from './estimateComponents/UserData'
import LoadingPersonsData from './estimateComponents/LoadingPersonsData'

function EstimateNew() {

    // const DataLoading =  LoadingPersonsData(UserData);
    // const DataLoading =  LoadingPersonsData(EstimateData);
    const DataLoading =  LoadingEstimateData(EstimateData);

    const [appState, setAppState] = useState(
        {
            loading: false,
            estimates: null,
        }
    )

    useEffect(() => {
        setAppState({loading: true})
        const apiUrl = 'http://localhost:8081/api/v1/estimate/all';                                                     // const apiUrl = 'http://localhost:8081/front/plist';
        axios.get(apiUrl).then((resp) => {
            const allEstimates = resp.data;
            setAppState({
                loading: false,
                estimates: allEstimates
            });
        });
    }, [setAppState]);

    return (
        <div className="app">
            <DataLoading isLoading={appState.loading} estimates={appState.estimates} />
        </div>
    );
}

export default EstimateNew;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
//
// function Appax() {
//
//     const [appState, setAppState] = useState();
//
//     useEffect(() => {
//         const apiUrl = 'http://localhost:8081/process';
//         axios.get(apiUrl).then((resp) => {
//             const allPersons = resp.data;
//             setAppState(allPersons);
//         });
//     }, [setAppState]);
//
//
//     return (
//         <div className="Appax">
//
//         </div>
//     );
// }
//
// export default Appax;