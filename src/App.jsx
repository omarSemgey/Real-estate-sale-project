import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Routes/Home/Home";
import Properties from "./components/Routes/properties/Properties";
import Property from "./components/Routes/Property/Property";
import Contact from "./components/Routes/Contact/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/Property" element={<Property />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
