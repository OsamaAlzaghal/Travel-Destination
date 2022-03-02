import React from "react";
import { useParams } from "react-router-dom";
import "./TourDetails.css"

const TourDetails = ({ data }) => {
  const { id } = useParams();

  return (
    <div className="fullDetails">

      <div className="Container">
        {
        data.filter((list) => list.id === id).map((list) => (

            <div className="Card" key={list.id}>

              <h2>Name: {list.name}</h2>
              <h4>Price: {list.price}</h4>

              <img className="img" alt = "" src={list.image}></img>

              <h4>Description: {list.info}</h4>
            </div>
          ))}

      </div>

    </div>

  );
};

export default TourDetails;