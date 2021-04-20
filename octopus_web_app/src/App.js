import "./App.css";
import Button from "../src/components/Button";
import pinkishOctopus from '../src/images/pinkishOctopus.jpg'

function App() {
  return (
    <div className="App">
    <header>
    <img className="header_octopus" src={pinkishOctopus} alt="purple octopus"/>
    </header>
      <div className="content-container">
        <Button />
      </div>
    </div>
  );
}

export default App;
