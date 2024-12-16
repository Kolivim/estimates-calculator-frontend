import UserData from "../components/UserData";
import {useLocation} from "react-router-dom";
// import {useParams} from "react-router-dom";
//
// const { id } = useParams();

import { useNavigate, useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

function About() {

    // const navigator = useNavigate();
    const { id } = useParams();
    // const emp = useLocation()
    //
    console.log(id)

    const [appState, setAppState] = useState(
        {
            loading: false,
            estimate: null,
        }
    )

    useEffect(() => {
        setAppState({loading: true})
        const apiUrl = 'http://localhost:8081/api/v1/estimate/de71a5e2-7e56-44f7-bb29-b86c249dc35e';                                                     // const apiUrl = 'http://localhost:8081/front/plist';
        axios.get(apiUrl, {
            responseType: "json",
        }).then((resp) => {
            const estimate = resp.data;

            console.log(resp)

            setAppState({
                loading: false,
                estimate: estimate
            });
        });
    }, [setAppState]);


    axios.get('http://localhost:8081/api/v1/estimate/de71a5e2-7e56-44f7-bb29-b86c249dc35e', {
        responseType: "json",
    }).then((resp1) => {
        const estimater = resp1.data;
        console.log(resp1)

        setAppState({
            loading: false,
            estimate: estimater
        });
    });


    const getTask = (id) =>
        axios.get(`http://localhost:8081/api/v1/estimate/` + id, {
            headers: { Authorization: `Bearer` },
        })

        //     .then((responce) => {
        //     console.log("Задача", responce);
        //     setTitle(responce.data.title);
        //     setDescription(responce.data.description);
        //     setTaskStatus(responce.data.taskStatus);
        //     setPriority(responce.data.priority);
        //     setTaskExecutorId(responce.data.taskExecutorId.toString());
        // });

    return (
        <div>

            <table border="1">
                <caption>Рассчёт:</caption>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>description</th>
                    <th>lastAuthorId</th>
                    <th>lastModifiedDate</th>
                    <th>version</th>
                    <th>workPriceListId</th>
                    <th>materialPriceListId</th>
                    {/*<th>estimateElementDtoList</th>*/}
                    {/*<th>estimateElementInfoDto.estimateElementDto.id</th>*/}
                </tr>
                </thead>
                <tbody>


                <tr key={estimate.id}>
                    <td>{estimate.id}</td>
                    <td>{estimate.name}</td>
                    <td>{estimate.description}</td>
                    <td>{estimate.lastAuthorId}</td>
                    <td>{estimate.lastModifiedDate}</td>
                    <td>{estimate.version}</td>
                    <td>{estimate.workPriceListId}</td>
                    <td>{estimate.materialPriceListId}</td>

                    {/*<td>{estimate.estimate.id}</td>*/}
                    {/*<td>{estimate.estimate.name}</td>*/}
                    {/*<td>{estimate.estimate.description}</td>*/}
                    {/*<td>{estimate.estimate.lastAuthorId}</td>*/}
                    {/*<td>{estimate.estimate.lastModifiedDate}</td>*/}
                    {/*<td>{estimate.estimate.version}</td>*/}
                    {/*<td>{estimate.estimate.workPriceListId}</td>*/}
                    {/*<td>{estimate.estimate.materialPriceListId}</td>*/}

                    {/* Листы через map перебирать нужно: */}
                    {/*<td>{estimates.estimateElementDtoList}</td>*/}
                </tr>


                </tbody>
            </table>

        </div>
    );
}

export default About