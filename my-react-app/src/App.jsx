import React, { useEffect, useState } from 'react';
import './styles.css';
import Gallery from './Gallery.jsx';
//Variables for the App component
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// Fetch tours from the API 
  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://www.course-api.com/react-tours-project');
      const data = await res.json();
      setTours(data);
      setError(null);
    } catch (err) {
      setError(true);
      setTours([]);
    } finally {
      setLoading(false);
    }
  };
// fetch tours when the component mounts
  useEffect(() => {
    fetchTours();
  }
  , []);
// Function to remove a tour
  const removeTour = (id) => {
    const updatedTours = tours.filter(tour => tour.id !== id);
    setTours(updatedTours);
  };
// Render App component
  return (
    <main>
      <h1>Our Tours</h1>
      <Gallery tours={tours} onRemoveTour={removeTour} loading={loading} error={error}/>
      <button onClick={fetchTours}>Fetch new tours</button>
    </main>
  );
}

export default App;
