import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Dev from "./pages/Dev";




function App() {


  return (
    <div className="Principal">
    <Routes>
      <Route path="dev" element={ <Dev /> } />

    </Routes>
  </div>
  )
}

export default App
