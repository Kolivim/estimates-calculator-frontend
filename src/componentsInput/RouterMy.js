import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import EstimateNew from '../EstimateNew';
import UserData from "../components/UserData";
import {MyInput} from "../MyInput";
import React from "react";

// import Home from './componentsInput/Home';
// import About from './componentsInput/About';
// import Contact from './componentsInput/Contact';

function RouterMy() {

    // const useParams = ReactRouterDOM.useParams;

    return (
        <Router>
            <div>
                <nav>
                    <ul>

                        <li>
                            <Link to = {{pathname: '/allestimates'}}>
                                Доступные рассчёты
                            </Link>
                        </li>

                        <li>
                            <Link to = {{pathname: '/findestimate'}}>
                                Поиск рассчёта
                            </Link>
                        </li>


                        <li>
                            {/*<Link to = '/estimate'>*/}
                            <Link to = {{
                                pathname: '/est',
                                search: 'xxxx', hash: 'hhh', key: 'abc123',
                                state: {}
                                // state: "12345"
                            }}>
                            Главная
                            </Link>
                        </li>
                        <li>
                            <Link to='/about'>О нас</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Контакты</Link>
                        </li>
                        <li>
                            <Link to='/111'>111</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/allestimates" element={<EstimateNew />} />
                    <Route path="/findestimate" element={<MyInput />} />
                    <Route path="/:id" element={<Home />}></Route>

                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />

                    {/*<Route path="/" element={<Home />} />*/}

                    {/*<Route path='/about'>*/}
                    {/*    <About />*/}
                    {/*</Route>*/}
                    {/*<Route path='/contact'>*/}
                    {/*    <Contact />*/}
                    {/*</Route>*/}
                    {/*<Route path='/'>*/}
                    {/*    <Home />*/}
                    {/*</Route>*/}
                </Routes>
            </div>
        </Router>
    );
}

export default RouterMy