// src/components/VisitorCounter/VisitorCounter.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './VisitorCounte.css'

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/visitors'); // Use your actual backend URL
        setCount(response.data.count);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '2rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
      Total Website Visits: {count}
    </div>
  );
};

export default VisitorCounter;
