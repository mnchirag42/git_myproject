import React from "react";
import { Link } from "react-router-dom";
import myimg from "./images/Screenshot1.png"
import myimg1 from "./images/Screenshot2.png"
import myimg2 from "./images/Screenshot3.png"
import myimg3 from "./images/Screenshot4.png"
import myimg4 from "./images/Screenshot5.png"
import myimg5 from "./images/Screenshot6.png"
import "./RawMaterials.css"


const materials = [
  { id: 1, name: "Immunity Booster",image:myimg},
  { id: 2, name: "Jeera Plus Extract",image:myimg1},
  { id: 3, name: "Urinary System Booster",image:myimg2 },
  { id: 4, name: "Lemongrass Herbal Bathing Bar",image:myimg3 },
  { id: 5, name: "Kashaya Herbal Bathing Bar",image:myimg4 },
  { id: 6, name: "Cocoreca Herbal Bathing Bar",image:myimg5 },
];

const RawMaterials = () => {
  return (
    <div className="materials">
      <center>
        <h2>Raw Materials</h2>
          {materials.map((material) => (
            <li key={material.id}>
              <Link to={`/material/${material.id}`}>
                {material.image && (
                  <img src={material.image} alt="log"
                  style={{ width: "50px", marginRight: "10px" }}
                   />
                )}
                {material.name}
              </Link>
            </li>
          ))}
        
      </center>
    </div>
  );
};

export default RawMaterials;
