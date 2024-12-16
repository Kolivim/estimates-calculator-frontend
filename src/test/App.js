import axios from "axios";
import React from "react";

// const baseURL = "http://localhost:8081/api/v1/estimate/all";
const baseURL = "http://localhost:8081/api/v1/estimate/de71a5e2-7e56-44f7-bb29-b86c249dc35e";

export default function App() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        fetch(baseURL)
            .then((response) => response.json())
            .then((apiData) => {
                setPost(apiData);
            });
    }, []);

    // axios.get(baseURL).then((response) => {}
    //     );

    // React.useEffect(() => {

        // const ttt = await axios.get(baseURL, );

        // axios.get(baseURL).then((response) => {
        //     setPost(response.data);
        // });
    // }, []);

    if (!post) return null;

    return (
        <div>
            <h1>{post.name}</h1>
            <p>{post.id}</p>
        </div>
    );
}