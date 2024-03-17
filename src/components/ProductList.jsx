import React, { useState } from 'react';

const initialData = [
  { id: 1, name: '1', price: 100 },
  { id: 2, name: '2', price: 200 },
  { id: 3, name: '3', price: 300 },
];

const ProductList = () => {
  const [data, setData] = useState(initialData);
  const [sorted, setSorted] = useState(false); 


  const toggleSort = () => {
    const sortedData = [...data].sort((a, b) => (sorted ? b.price - a.price : a.price - b.price));
    setData(sortedData);
    setSorted(!sorted);
  };

  return (
    <div className="product-list-container">
      <button onClick={toggleSort} className="sort-button">
        {sorted ? 'Sort Descending' : 'Sort Ascending'}
      </button>
      <div className="product-list">
        {data.map(item => (
          <div key={item.id} className="product-card">
            <h3 className="product-name">{item.name}</h3>
            <p className="product-price">${item.price}</p>
          </div>
        ))}
      </div>


      <style>
        {`
          .product-list-container {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
          }

          .sort-button {
            background-color: #007bff;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-bottom: 10px;
          }

          .sort-button:hover {
            background-color: #0056b3;
          }

          .product-list {
            display: flex;
            flex-wrap: wrap;
          }

          .product-card {
            background-color: #f5f5f5; /* Light gray background */
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin: 10px;
            width: calc(33.33% - 20px);
            transition: background-color 0.3s ease; /* Smooth transition on hover */
          }

          .product-card:hover {
            background-color: #e0e0e0; /* Darker gray background on hover */
          }

          .product-name {
            margin-top: 0;
          }

          .product-price {
            font-weight: bold;
          }
        `}
      </style>


    </div>
  );
};

export default ProductList;
