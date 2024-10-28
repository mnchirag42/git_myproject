import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const OrderContext = createContext();

// Create the provider component
export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // Fetch existing orders from the backend
  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/orders'); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error(`Failed to fetch orders: ${response.status}`);
      }
      const fetchedOrders = await response.json();
      setOrders(fetchedOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  // Add a new order to the backend and state
  const addOrder = async (newOrder) => {
    try {
      const response = await fetch('http://localhost:8080/api/orders', { // Corrected to the appropriate endpoint for orders
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Order added:', result);
        setOrders((prevOrders) => [...prevOrders, result]); // Add the newly created order (result) to the state
      } else {
        console.error('Failed to add order:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding order:', error);
    }
  };

  // Delete an order by its ID
  const deleteOrder = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/orders/${orderId}`, { // API call to delete order
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete order: ${response.status}`);
      }

      // Update the state to remove the deleted order
      setOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
      console.log(`Deleted order with ID: ${orderId}`);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  // Use effect to fetch orders when the component mounts
  useEffect(() => {
    fetchOrders(); // Fetch orders on initial load
  }, []);

  return (
    <OrderContext.Provider value={{ orders, addOrder, deleteOrder, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};
