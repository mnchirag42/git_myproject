import React, { useContext, useEffect } from 'react';
import { OrderContext } from './OrderContext'; 
import { useNavigate } from 'react-router-dom'; 

const Orders = () => {
  const { orders, setOrders } = useContext(OrderContext); // Access orders from context
  const navigate = useNavigate();

  // Fetch orders from the database when the component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/orders'); // Ensure correct endpoint for orders
        if (!response.ok) {
          throw new Error(`Failed to fetch orders: ${response.status}`);
        }
        const fetchedOrders = await response.json();
        console.log('Fetched orders:', fetchedOrders); // Log fetched orders to inspect structure
        setOrders(fetchedOrders); // Update context with fetched orders
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [setOrders]); // Dependency array ensures effect runs only once

  // Handle deleting an order
  const handleDelete = async (orderId) => {
    // Delete order from the database
    try {
      const response = await fetch(`http://localhost:8080/api/orders/${orderId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete order: ${response.status}`);
      }

      // Update the context by removing the deleted order
      const updatedOrders = orders.filter(order => order.id !== orderId);
      setOrders(updatedOrders); 
      console.log(`Deleted order with ID: ${orderId}`);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <div>
      <h2>Orders</h2>
      {orders.length === 0 ? (
        <p>No orders added yet.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}> {/* Use order.id as the unique key */}
              <h3>{order.productName}</h3> {/* Ensure this is the correct property */}
              <ul>
                {order.items && order.items.length > 0 ? (
                  order.items.map((item) => (
                    <li key={item.name}> {/* Use item.name as the key, assuming it's unique within the order */}
                      {item.name}: {item.quantity}
                    </li>
                  ))
                ) : (
                  <p>No items for this order.</p>
                )}
              </ul>
              <button onClick={() => handleDelete(order.id)}>Delete</button> {/* Use order.id for deletion */}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate(-1)}>Back to Supplier</button>
    </div>
  );
};

export default Orders;
