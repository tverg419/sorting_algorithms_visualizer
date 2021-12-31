import './App.css';
import Nav from './components/Nav'
import Visualizer from './components/Visualizer'

function App() {
  return (
    <div className="App">

      <div className="App-header">
        <Nav/>
      </div>

      <div className="App-header">
        <Visualizer/>
      </div>
      
    </div>
  );
}

export default App;
