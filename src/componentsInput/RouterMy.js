import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import UserData from "../components/UserData";

// import Home from './componentsInput/Home';
// import About from './componentsInput/About';
// import Contact from './componentsInput/Contact';

function RouterMy() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Главная</Link>
                        </li>
                        <li>
                            <Link to='/about'>О нас</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Контакты</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/" element={<Home />} />
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