import './App.css';
import Weather from "./component/Weather/Weather";
import WeatherList from "./component/Weather/WeatherList";
import Navbar from "./component/Navbar";
import {Switch, Route, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <nav>
            <Navbar/>
        </nav>
        <Switch>
            <Route path={"/home"} exact component={Weather}/>
            <Route path={"/settings"} exact component={WeatherList}/>
            <Redirect to={"/home"}/>
        </Switch>
    </div>
  );
}

export default App;
