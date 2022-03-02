import Tour from "./tour/Tour";
import "./Tours.css";
import { Routes, Route, Link } from "react-router-dom";

const TourInfo = ({tourData, index}) => {
  return (
    <> 
        {tourData.map( (tour) =>(
      <Tour tour={tour} />))}
      
    </>
      
  );
};

export default TourInfo;