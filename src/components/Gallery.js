import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
const Gallery = props => {
  const results = props.data;
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    
    images = results.map(image => {
      let url = image.url;
      console.log(image.title);
      return <Image 
        url={image.url} 
        title={image.title}  
        surface={image.surface}
        vendeur={image.vendeur} 
        prix={image.prix}/>;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;
