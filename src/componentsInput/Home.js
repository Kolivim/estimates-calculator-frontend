import UserData from "../components/UserData";
import {useLocation} from "react-router-dom";

function Home() {

    const emp = useLocation()

    console.log(emp)

    let text = emp.pathname

    let text1 = text.slice(1, text.length);

    console.log('text = ' + text)
    console.log('text1 = ' + text1)

    return <h2>Добро пожаловать на главную страницу</h2>;
}

export default Home