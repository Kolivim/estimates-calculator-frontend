import axios from 'axios';

import React, { useEffect, useState } from 'react';

import UserData from './components/UserData'
// import OnLoadingUserData from './components/OnLoadingUserData'
// import OnLoadingUserData from './components/LoadingPersonsData'
import LoadingPersonsData from './components/LoadingPersonsData'

function Appax() {

    const DataLoading =  LoadingPersonsData(UserData);

    const [appState, setAppState] = useState(
        {
            loading: false,
            persons: null,
        }
    )

    useEffect(() => {
        setAppState({loading: true})
        const apiUrl = 'http://localhost:8081/front/plist';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setAppState({
                loading: false,
                persons: allPersons
            });
        });
    }, [setAppState]);


    return (
        <div className="app">
            <DataLoading isLoading={appState.loading} persons={appState.persons} />
        </div>
    );
}

export default Appax;


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