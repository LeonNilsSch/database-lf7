import { Link } from 'react-router-dom';
import '../styles/Home.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('http://localhost:5000/api/data'); // Make sure this URL matches your backend
              setData(response.data);
          } catch (err) {
              setError('Error fetching data');
          } finally {
              setLoading(false);
          }
      };

      fetchData();
  }, []);

  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>{error}</div>;
  }

  return (
      <div>
          <h1>Data from SQL Table</h1>
          <table>
              <thead>
                  <tr>
                      {/* Adjust headers based on your SQL table structure */}
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                  </tr>
              </thead>
              <tbody>
                  {data.map((item) => (
                      <tr key={item.id}>
                          {/* Adjust based on your SQL table structure */}
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );
}

export default Home;
