import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import Destination from "./views/Destination/Destination";
import Crew from "./views/Crew/Crew";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
