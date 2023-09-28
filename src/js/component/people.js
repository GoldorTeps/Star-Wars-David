import React from 'react';
import { Context } from '../store/appContext.js';
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';


import "../../styles/home.css";



const People = ({ char }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate()




  const handleDetails = (id) => {
    actions.detailChar(id);
    navigate("/people-details")
  };


  return (


    <div className="text-center mt-5">


      <div className="card  m-2"
        style={{ width: "18rem" }} >
        <img src={`https://starwars-visualguide.com/assets/img/characters/${char.result.uid}.jpg`} className="card-img-top" style={{ height: "18rem", objectFit: "cover", borderRadius: "20px" }} alt="..." />
        <div className="card-body" style={{ height: "16rem", overflowx: "hidden", overflow: "auto" }}>
          <h5 className="card-title"> {char.result.properties.name}</h5>

          <div>
            <p className="card-text"><span>Gender:</span>{char.result.properties.gender} </p>
            <p className="card-text"><span>Hair color:</span>{char.result.properties.hair_color} </p>
            <p className="card-text"><span>Birth Year:</span> {char.result.properties.birth_year}</p>
          </div>



          <button onClick={() => handleDetails(char.result.uid)} className="btn details m-3">Details</button>


          <button href="#" className="btn heart m-3 " onClick={() => {
            actions.setFavoritesCharacters(char)
          }}  ><strong>♥</strong></button>
        </div>
      </div>





    </div>
  );
};

export default People;