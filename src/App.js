import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from "./Components/Navigator";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<Navigator/>} />
            <Route path="/bio" element={<Bio/>} />
            <Route path="/settings" element={<Settings/>} />
        </Routes>
        </BrowserRouter>
  );
}

function Bio() {
  return <h2>Bio</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}

export default App;
