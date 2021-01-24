import React from "react";

const Image = ({ url, title, surface, vendeur, prix }) => (
  <div style={{textAlign:"left" ,marginBottom:'3px',width:"100%"}}>
    <img style={{border:"1px solid black" ,marginRight:"3%" ,float:"left" ,width:"130px", height:'150px'}} src={url} alt={title} />
    <div style={{display:'inline-block'}}>
    <h5 style={{color:'black'}}>{title}</h5>
    <p style={{fontSize:'13px'}}>
      Surface : {surface}
    </p>
    <p style={{fontSize:'13px'}}>
      Vendeur : {vendeur}
    </p>
     <p style={{fontSize:'13px'}}>
      Prix : {prix}
    </p>

    
    </div>
    <button style={{float:"right", width:"20%", height:"50px" }} to="/about">Acheter</button>
  </div>
);

export default Image;
