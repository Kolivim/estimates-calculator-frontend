import UserData from "../components/UserData";
import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from 'react'
import LoadingEstimateData from "../estimateComponents/LoadingEstimateData";
import EstimateData from "../estimateComponents/EstimateData";
import LoadingOneEstimateData from "../estimateComponents/LoadingOneEstimateData";
import OneEstimateData from "../estimateComponents/OneEstimateData";
import axios from "axios";

function Home() {

    const emp = useLocation()

    console.log(emp)

    let text = emp.pathname

    let text1 = text.slice(1, text.length);

    console.log('text = ' + text)
    console.log('text1 = ' + text1)

    // const DataLoading =  LoadingOneEstimateData(OneEstimateData);
    const DataLoading =  OneEstimateData;

    const [appState, setAppState] = useState(
        {
            loading: false,
            estimates: null,
        }
    )

    useEffect(() => {
        setAppState({loading: true})
        const apiUrl = 'http://localhost:8081/api/v1/estimate' + text;                                                     // const apiUrl = 'http://localhost:8081/front/plist';
        axios.get(apiUrl).then((resp) => {
            const estimate = resp.data;

            console.log(resp)

            setAppState({
                loading: false,
                estimates: estimate
            });

        });
    }, [setAppState]);


    if (text1.size !== 0 ) {

        console.log('Получен ID сметного рассчёта = ' + text1)

        // getTask(id, token)
        //     .then((responce) => {
        //         console.log("Задача", responce);
        //         setTitle(responce.data.title);
        //         setDescription(responce.data.description);
        //         setTaskStatus(responce.data.taskStatus);
        //         setPriority(responce.data.priority);
        //         setTaskExecutorId(responce.data.taskExecutorId.toString());
        //     })
        //     .catch((error) => {
        //         console.error("Ошибка: ", error);
        //     });

    }

    // return <h2>Добро пожаловать на главную страницу</h2>;

    return (
        <div className="app">
            <DataLoading isLoading={appState.loading} estimate={appState.estimate} />

            {/*<DataLoading> appState.estimate </ DataLoading>*/}
        </div>
    );
}

export default Home