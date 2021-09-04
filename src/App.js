import './App.css';
import Weather from "./component/Weather/Weather";
import Navbar from "./component/Navbar";
import {Switch, Route, Redirect} from "react-router-dom";
import WeatherWidget from "./component/Weather/WeatherWidget";

function App() {
  return (
    <div className="App">
        <nav>
            <Navbar/>
        </nav>
        <Switch>
            <Route path={"/home"} exact component={Weather}/>
            <Route path={"/settings"} exact component={WeatherWidget}/>
            <Redirect to={"/home"}/>
        </Switch>
    </div>
  );
}

export default App;
