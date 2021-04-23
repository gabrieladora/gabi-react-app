
import './App.css';

import FirstCard from "./FirstCard";
import Content from "./Content";



 export default function App() {
  return (
  <div className="App" style={{ width: "100rem" }}>
      <FirstCard defaultCity="Los Angeles" />
      <Content />
    </div>
  );
  }

