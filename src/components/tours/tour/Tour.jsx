import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import {useState} from "react";
import {If,Then} from 'react-if';

export default function Tour({tour}) {

  const [isShow,setShow] = useState(false);

  function handleShow(){
    setShow(!isShow);
  }

  return (
    
    <div className={`container ${tour.className}` }>
        
        <img className="img" src={tour.image} alt="" />
         <h3 style={{ marginTop:"5px"}}><Link style={{color: "inherit",textDecoration:"none"}} to={`/city/${tour.id}`}>{tour.name}</Link></h3>

         {
          !isShow ? <button onClick={handleShow} type="button" class="btn btn-secondary">Show more</button>: <button onClick={handleShow} type="button" class="btn btn-secondary">Hide</button>
          }

<If condition={isShow}>
  <Then>
  <h4>Description: {tour.info}</h4>
  </Then>
</If>

    </div>
  )
}