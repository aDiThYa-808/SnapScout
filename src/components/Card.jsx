import React from "react";
//import Sample from "../assets/sampleImg.jpg"


function Card(props) {
  
  return (
    <>
      <div className="card my-3" style={{width:"18rem"}}>
        <img src={props.imgScr} className="card-img-top " alt=""  style={{ objectFit: 'cover', height: '200px' }}  />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.desc}
          </p>
          <a href={props.downloadLink}  className="btn btn-primary mt-auto " >View Image</a>
           
        </div>
      </div>
    </>
  );
}

export default Card;
