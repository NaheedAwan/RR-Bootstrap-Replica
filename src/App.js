import './App.css';
import NavBar from './components/NavBar'
import BackGroundImg from './components/BackGroundImg';
import StoreListing from './components/StoreListing';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <BackGroundImg/>
     <StoreListing />
    </div>
  );
}

export default App;
