import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";

const productDetails = {
  11: {
    name: "Immunity Booster",
    primaryMaterials: [
      { name: "Amla (Indian Gooseberry)", quantity: 25},
      { name: "Tulsi (Holy Basil)", quantity: 100 },
      { name: "Giloy (Tinospora cordifolia)", quantity:50 },
      { name: "Ashwagandha", quantity: 25 },
      { name: "Turmeric", quantity: 75},
    ],
    additionalIngredients: [
      { name: "Ginger", quantity: 25},
      { name: "Moringa", quantity: 75 },
      { name: "Neem", quantity: 25 },
      { name: "Cumin Seeds", quantity: 25},
      { name: "Black Pepper", quantity: 50 },
      { name: "Cardamom", quantity: 50 },
      { name: "Cinnamon", quantity: 25},
    ],
    packagingMaterials: [
      { name: "Bottle", quantity: 50},
      { name: "Cap", quantity: 25 },
      { name: "Label", quantity: 25},
    ],
  },
  12: {
    name: "Jeera Plus Extract",
    primaryMaterials: [
      { name: "Cumin (Jeera) Seeds:", quantity:25 },
      { name: " Water:", quantity: 50},
      { name: "Ethanol (optional):", quantity: 100 }, 
    ],
    additionalIngredients: [
      { name: "Preservatives (Sodium Benzoate, Potassium Sorbate):", quantity: 25},
      { name: "Stabilizers and Emulsifiers (Xanthan Gum, Lecithin):", quantity: 50 },
      { name: "Sweeteners (Stevia, Sucralose):", quantity:75 },
      { name: "Flavor Enhancers (optional):", quantity: 50},
      { name: "Colorants (optional):", quantity:25},
      { name: "Antioxidants (Ascorbic Acid, Tocopherols):", quantity: 25},
    ],
    packagingMaterials: [
      { name: "Bottle", quantity: 50},
      { name: "Cap", quantity: 50 },
      { name: "Label", quantity: 25},
    ],
  },
  13: {
    name: "Urinary System Booster",
    primaryMaterials: [
      { name: "Cranberry Extract:", quantity: 25},
      { name: "Dandelion Root:", quantity: 100 },
      { name: "Uva Ursi (Bearberry):", quantity: 50 },
      { name: "Marshmallow Root:", quantity: 50 },
      { name: "Horsetail:", quantity: 25},
      { name: "Corn Silk:", quantity: 25},
      { name: "Parsley:", quantity: 50},
    ],
    additionalIngredients: [
      { name: "Water:", quantity: 25},
      { name: "Preservatives:", quantity: 50 },
      { name: "Flavorings or Sweeteners:", quantity: 75 },
      { name: "Stabilizers or Emulsifiers:", quantity: 50},
    ],
    packagingMaterials: [
      { name: "Bottle", quantity: 50},
      { name: "Cap", quantity: 25 },
      { name: "Label", quantity: 25},
    ],
  },
  14: {
    name: "Lemongrass Herbal Bathing Bar",
    primaryMaterials: [
      { name: "Lemongrass Essential Oil:", quantity:50},
      { name: "Turmeric Oil:", quantity: 50 },
      { name: "Aloe Vera:", quantity: 25 },
    ],
    additionalIngredients: [
      { name: "Soap Base:", quantity: 25},
      { name: "Glycerin:", quantity: 25 },
      { name: "Natural Colorants:", quantity: 50},
      { name: "Essential Oils:", quantity: 25},  
    ],
    packagingMaterials: [
      { name: "Soap Wrapper:", quantity: 50},
      { name: "Packaging Box:", quantity: 20 },
    ],
  },
  15: {
    name: "Kashaya Herbal Bathing Bar",
    primaryMaterials: [
      { name: "Kashaya of Various Herbs:", quantity: 50},
      { name: "Manjistha Powder:", quantity: 75 },
    ],
    additionalIngredients: [
      { name: "Soap Base:", quantity: 25},
      { name: "Glycerin:", quantity: 50 },
      { name: "Natural Colorants:", quantity: 25},
      { name: "Essential Oils:", quantity: 25},
      
    ],
    packagingMaterials: [
      { name: "Soap Wrapper:", quantity: 50},
      { name: "Packaging Box:", quantity: 25 },
   
    ],
  },
  16: {
    name: "Cocoreca Herbal Bathing Bar",
    primaryMaterials: [
      { name: "Areca Fruit:", quantity: 50},
      { name: "Coconut Oil:", quantity: 25 },
      { name: "Teak Extract:", quantity: 25 },
    ],
    additionalIngredients: [
      { name: "Soap Base:", quantity: 25},
      { name: "Glycerin:", quantity: 50 },
      { name: "Natural Colorants:", quantity: 50 },
      { name: "Essential Oils:", quantity: 25},
      
    ],
    packagingMaterials: [
      { name: "Soap Wrapper:", quantity: 50},
      { name: "Packaging Box:", quantity: 25 },
   
    ],
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();  // Hook to navigate between routes
  const product = productDetails[id];

  const [primaryMaterials, setPrimaryMaterials] = useState(product.primaryMaterials);
  const [additionalIngredients, setAdditionalIngredients] = useState(product.additionalIngredients);
  const [packagingMaterials, setPackagingMaterials] = useState(product.packagingMaterials);

  const handleQuantityChange = (type, index, change) => {
    const updateQuantity = (items, setter) => {
      const updatedItems = items.map((item, i) => {
        if (i === index) {
          return { ...item, quantity: Math.max(0, item.quantity + change) }; // Prevent negative quantity
        }
        return item;
      });
      setter(updatedItems);
    };

    switch (type) {
      case "primary":
        updateQuantity(primaryMaterials, setPrimaryMaterials);
        break;
      case "additional":
        updateQuantity(additionalIngredients, setAdditionalIngredients);
        break;
      case "packaging":
        updateQuantity(packagingMaterials, setPackagingMaterials);
        break;
      default:
        break;
    }
  };

  return (
    <div className="handlechange">
      <h2>{product.name}</h2>

      <h3>Primary Raw Materials</h3>
      <ul>
        {primaryMaterials.map((item, index) => (  
          <li key={index}>
            {item.name}: {item.quantity}
            <button onClick={() => handleQuantityChange("primary", index, 25)}>+</button>
            <button onClick={() => handleQuantityChange("primary", index, -25)}>-</button>
          </li>
        ))}
      </ul>

      <h3>Additional Ingredients</h3>
      <ul>
        {additionalIngredients.map((item, index) => (
          <li key={index}>
            {item.name}: {item.quantity}
            <button onClick={() => handleQuantityChange("additional", index, 25)}>+</button>
            <button onClick={() => handleQuantityChange("additional", index, -25)}>-</button>
          </li>
        ))}
      </ul>

      <h3>Packaging Materials</h3>
      <ul>
        {packagingMaterials.map((item, index) => (
          <li key={index}>
            {item.name}: {item.quantity}
            <button onClick={() => handleQuantityChange("packaging", index, 25)}>+</button>
            <button onClick={() => handleQuantityChange("packaging", index, -25)}>-</button>
          </li>
        ))}
      </ul>
      {}
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default ProductDetail;
