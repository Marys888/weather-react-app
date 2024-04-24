import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Weather } from "./Weather"

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Kyiv"/>
      <div className='container'>
      <footer className='footer'>
        This App was created by <a href="https://github.com/Marys888">Mariia Sievierova</a> and 
        is open-sourced on <a href="https://github.com/Marys888/weather-react-app">GitHub</a> and 
        hosted on <a href="https://meteo-check.netlify.app/">Netlify</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
