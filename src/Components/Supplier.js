import React from "react";
import { Link, useNavigate } from "react-router-dom";

const materials = [
  { id: 21, name: "Primary Raw Materials:" },
  { id: 22, name: "Additional Ingredients:" },
  { id: 23, name: "Packaging Materials:" },
];

const Supplier = () => {
  const navigate = useNavigate(); // Initialize the navigate function here

  return (
    <div className="Materials">
      <center>
        <h2>RawMaterials Order</h2>
        <ul>
          {materials.map((material) => (
            <li key={material.id} style={{ listStyleType: "none" }}>
              <Link to={`/SupplierDetail/${material.id}`}>
                {material.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Back Button */}
        <button
          onClick={() => navigate("/form")} // This will navigate to the desired path
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

export default Supplier;
