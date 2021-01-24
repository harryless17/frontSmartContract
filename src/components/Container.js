import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  // const { images, loading, runSearch } = useContext(PhotoContext);
  const images = [
    {
      url : 'https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp',
      title : "Villa monaco",
      surface : "150m2",
      vendeur : "Aghiles",
      prix : "20000000",
    }, 
    {
      url : 'https://www.padelnuestro.com/images/products/balon-futbol-7-softee-rotor_500X600.jpg',
      title : "Balon 1",
      surface : "",
      vendeur : "",
      prix : "",
    }, 
    {
      url : 'https://www.padelnuestro.com/images/products/balon-futbol-7-softee-rotor_500X600.jpg',
      title : "Balon 1",
      surface : "",
      vendeur : "",
      prix : "",
    }, 
    {
      url : 'https://www.padelnuestro.com/images/products/balon-futbol-7-softee-rotor_500X600.jpg',
      title : "Balon 1",
      surface : "",
      vendeur : "",
      prix : "",
    }, 
]
 /*  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]); */

  return (
    <div className="photo-container">
      {<Gallery data={images} />}
    </div>
  );
};

export default Container;
