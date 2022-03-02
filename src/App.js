import './App.css';
import Home from './components/home/Home';
import { Routes, Route, Link } from "react-router-dom";
import data from "./data/db.json";
import TourDetails from './components/TourDetails/TourDetails' 
import Header from './components/header/Header';


function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails data={ data } />} />
    </Routes>
    </>
    
  );
}

export default App;