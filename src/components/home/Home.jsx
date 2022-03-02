import Header from "../header/Header";
import Footer from "../footer/Footer";
import TourInfo from "../tours/Tours";
import data from "../../data/db.json";
import "./Home.css";

function Home() {

  return (
    <div className="homeContainer">
      
      <div className="tourInfo">
        <TourInfo className="cards" tourData={data}/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;