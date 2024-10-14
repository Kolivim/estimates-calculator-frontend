import logo from './logo.svg';
import './App.css';

import Greetings from "./Greetings";

const Dreetings = (props) => <div>Ha ha! {props.firstNameq} {props.lastNameq}!</div>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

        <div>
          <div>Hey you! John Smith!</div>
          <div>Are!</div>
          <div>To</div>
        </div>

        <div>
          <Dreetings firstNameq="Jey" lastNameq="Kock" />
        </div>

        <div>
          <Greetings firstName="Nick" lastName="Todd" />
        </div>



      </header>
    </div>
  );
}

export default App;


// const App = () => (
//     <div className="App">
//       ...
//
//     </div>
// );
//
// export default App;