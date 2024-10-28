import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { OrderContext } from './OrderContext';
import "./SupplierDetails.css";

// Data for Primary Raw Materials
const materialData = {
  21: [
    {
      name: "Immunity Booster",
      items: [
        { name: "Amla (Indian Gooseberry)", quantity: 0 },
        { name: "Tulsi (Holy Basil)", quantity: 0 },
        { name: "Giloy (Tinospora cordifolia)", quantity: 0 },
        { name: "Ashwagandha", quantity: 0 },
        { name: "Turmeric", quantity: 0 },
      ],
    },
    {
      name: "Jeera Plus Extract",
      items: [
        { name: "Cumin (Jeera) Seeds:", quantity: 0 },
        { name: "Water:", quantity: 0 },
        { name: "Ethanol (optional):", quantity: 0 },
      ],
    },
    {
      name: "Urinary System Booster",
      items: [
        { name: "Cranberry Extract:", quantity: 0 },
        { name: "Dandelion Root:", quantity: 0 },
        { name: "Uva Ursi (Bearberry):", quantity: 0 },
        { name: "Marshmallow Root:", quantity: 0 },
        { name: "Horsetail:", quantity: 0 },
        { name: "Corn Silk:", quantity: 0 },
        { name: "Parsley:", quantity: 0 },
      ],
    },
    {
      name: "Lemongrass Herbal Bathing Bar",
      items: [
        { name: "Lemongrass Essential Oil:", quantity: 0 },
        { name: "Turmeric Oil:", quantity: 0 },
        { name: "Aloe Vera:", quantity: 0 },
      ],
    },
    {
      name: "Kashaya Herbal Bathing Bar",
      items: [
        { name: "Kashaya of Various Herbs:", quantity: 0 },
        { name: "Manjistha Powder:", quantity: 0 },
      ],
    },
    {
      name: "Cocoreca Herbal Bathing Bar",
      items: [
        { name: "Areca Fruit:", quantity: 0 },
        { name: "Coconut Oil:", quantity: 0 },
        { name: "Teak Extract:", quantity: 0 },
      ],
    },
  ],
  22: [
    {
      name: "Immunity Booster",
      items: [
        { name: "Ginger", quantity: 0 },
        { name: "Moringa", quantity: 0 },
        { name: "Neem", quantity: 0 },
        { name: "Cumin Seeds", quantity: 0 },
        { name: "Black Pepper", quantity: 0 },
        { name: "Cardamom", quantity: 0 },
        { name: "Cinnamon", quantity: 0 },
      ],
    },
    {
      name: "Jeera Plus Extract",
      items: [
        { name: "Preservatives (Sodium Benzoate, Potassium Sorbate):", quantity: 0 },
        { name: "Stabilizers and Emulsifiers (Xanthan Gum, Lecithin):", quantity: 0 },
        { name: "Sweeteners (Stevia, Sucralose):", quantity: 0 },
        { name: "Flavor Enhancers (optional):", quantity: 0 },
        { name: "Colorants (optional):", quantity: 0 },
        { name: "Antioxidants (Ascorbic Acid, Tocopherols):", quantity: 0 },
      ],
    },
    {
      name: "Urinary System Booster",
      items: [
        { name: "Water:", quantity: 0 },
        { name: "Preservatives:", quantity: 0 },
        { name: "Flavorings or Sweeteners:", quantity: 0 },
        { name: "Stabilizers or Emulsifiers:", quantity: 0 },
      ],
    },
    {
      name: "Lemongrass Herbal Bathing Bar",
      items: [
        { name: "Soap Base:", quantity: 0 },
        { name: "Glycerin:", quantity: 0 },
        { name: "Natural Colorants:", quantity: 0 },
        { name: "Essential Oils:", quantity: 0 },
      ],
    },
    {
      name: "Kashaya Herbal Bathing Bar",
      items: [
        { name: "Soap Base:", quantity: 0 },
        { name: "Glycerin:", quantity: 0 },
        { name: "Natural Colorants:", quantity: 0 },
        { name: "Essential Oils:", quantity: 0 },
      ],
    },
    {
      name: "Cocoreca Herbal Bathing Bar",
      items: [
        { name: "Soap Base:", quantity: 0 },
        { name: "Glycerin:", quantity: 0 },
        { name: "Natural Colorants:", quantity: 0 },
        { name: "Essential Oils:", quantity: 0 },
      ],
    },
  ],
  23: [
    {
      name: "Immunity Booster",
      items: [
        { name: "Bottle", quantity: 0 },
        { name: "Cap", quantity: 0 },
        { name: "Label", quantity: 0 },
      ],
    },
    {
      name: "Jeera Plus Extract",
      items: [
        { name: "Bottle", quantity: 0 },
        { name: "Cap", quantity: 0 },
        { name: "Label", quantity: 0 },
      ],
    },
    {
      name: "Urinary System Booster",
      items: [
        { name: "Bottle", quantity: 0 },
        { name: "Cap", quantity: 0 },
        { name: "Label", quantity: 0 },
      ],
    },
    {
      name: "Lemongrass Herbal Bathing Bar",
      items: [
        { name: "Soap Wrapper:", quantity: 0 },
        { name: "Packaging Box:", quantity: 0 },
      ],
    },
    {
      name: "Kashaya Herbal Bathing Bar",
      items: [
        { name: "Soap Wrapper:", quantity: 0 },
        { name: "Packaging Box:", quantity: 0 },
      ],
    },
    {
      name: "Cocoreca Herbal Bathing Bar",
      items: [
        { name: "Soap Wrapper:", quantity: 0 },
        { name: "Packaging Box:", quantity: 0 },
      ],
    },
  ]
};

// SupplierDetails component
const SupplierDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addOrder } = useContext(OrderContext);

  // Retrieve materials based on the ID from params
  const materials = materialData[id];

  // Initialize state with quantities for materials
  const [quantities, setQuantities] = useState(
    materials.map((material) => ({
      ...material,
      items: material.items.map((item) => ({ ...item })),
    }))
  );

  // Increase item quantity
  const increaseQuantity = (materialIndex, itemIndex) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((material, i) =>
        i === materialIndex
          ? {
              ...material,
              items: material.items.map((item, j) =>
                j === itemIndex
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          : material
      )
    );
  };

  // Decrease item quantity
  const decreaseQuantity = (materialIndex, itemIndex) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((material, i) =>
        i === materialIndex
          ? {
              ...material,
              items: material.items.map((item, j) =>
                j === itemIndex && item.quantity > 0
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            }
          : material
      )
    );
  };

  // Handle adding order
  const handleAddOrder = async (material, materialIndex) => {
    const itemsWithQuantity = material.items.filter(item => item.quantity > 0);

    if (itemsWithQuantity.length > 0) {
      const orderData = {
        productName: material.name,
        items: itemsWithQuantity.map(item => ({
          name: item.name,
          quantity: item.quantity,
        })),
      };

      try {
        const response = await fetch('http://localhost:8080/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        });

        if (!response.ok) {
          throw new Error('Failed to add order');
        }

        const data = await response.json();
        console.log('Order added successfully:', data);

        addOrder(orderData);
        
        // Create a message listing ordered items
        const itemNames = itemsWithQuantity.map(item => `${item.name} (Quantity: ${item.quantity})`).join(', ');
        alert(`Product ordered successfully: ${material.name}\nItems: ${itemNames}`);

        // Reset quantities for the ordered product
        setQuantities((prevQuantities) =>
          prevQuantities.map((m, i) =>
            i === materialIndex
              ? {
                  ...m,
                  items: m.items.map(item => ({ ...item, quantity: 0 })),
                }
              : m
          )
        );
      } catch (error) {
        console.error('Error adding order:', error);
        alert("An error occurred while adding the order. Please try again.");
      }
    } else {
      alert("No items selected to order.");
    }
  };

  return (
    <div className="supplier-details">
      <h2>Stock Order</h2>
      {quantities.map((material, materialIndex) => (
        <div key={material.name}>
          <h3>{material.name}</h3>
          <ul>
            {material.items.map((item, itemIndex) => (
              <li key={item.name}>
                {item.name}: {item.quantity}{" "}
                <button onClick={() => decreaseQuantity(materialIndex, itemIndex)}>-</button>
                <button onClick={() => increaseQuantity(materialIndex, itemIndex)}>+</button>
              </li>
            ))}
          </ul>
          <button onClick={() => handleAddOrder(material, materialIndex)}>Add Order</button>
        </div>
      ))}
      <div className="backbutton">
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate("/orders")}>Orders</button>
      </div>
    </div>
  );
};

export default SupplierDetails;
