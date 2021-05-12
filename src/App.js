
import './App.css';
import FirstCard from "./FirstCard";
import WeatherForecast from './WeatherForecast';



 export default function App() {
  return (
  <div className="App" style={{ width: "100rem" }}>
      <FirstCard defaultCity="Los Angeles" />
      <WeatherForecast />
    </div>
  );
  }

