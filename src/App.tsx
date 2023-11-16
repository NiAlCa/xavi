import { Route, Routes } from "react-router-dom";
import "./style/App.scss";
import { HomePage } from "./pages/home/HomePage";
// import { HomePageData } from '../src/data/HomePageData.mock'

function App() {
  return (
    <div className="Principal">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
