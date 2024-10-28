import React from "react";
import { Link, useNavigate } from "react-router-dom";
import myimg from "./images/Screenshot1.png";
import myimg1 from "./images/Screenshot2.png";
import myimg2 from "./images/Screenshot3.png";
import myimg3 from "./images/Screenshot4.png";
import myimg4 from "./images/Screenshot5.png";
import myimg5 from "./images/Screenshot6.png";
import "./ProductMaterials.css";

const materials = [
  { id: 11, name: "Immunity Booster", image: myimg },
  { id: 12, name: "Jeera Plus Extract", image: myimg1 },
  { id: 13, name: "Urinary System Booster", image: myimg2 },
  { id: 14, name: "Lemongrass Herbal Bathing Bar", image: myimg3 },
  { id: 15, name: "Kashaya Herbal Bathing Bar", image: myimg4 },
  { id: 16, name: "Cocoreca Herbal Bathing Bar", image: myimg5 },
];

const ProductMaterials = () => {
  const navigate = useNavigate();

  return (
    <div className="Materials">
      <center>
        <h2>Product Materials</h2>
        <ul>
          {materials.map((material) => (
            <li key={material.id} style={{ listStyleType: "none" }}>
              <Link to={`/productDetail/${material.id}`}>
                {material.image && (
                  <img
                    src={material.image}
                    alt={material.name}
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                )}
                {material.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Back Button */}
        <button
          onClick={() => navigate("/form")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Back
        </button>
      </center>
    </div>
  );
};

export default ProductMaterials;
