import React, { useState } from 'react';
import TourCard from './TourCard';
import './styles.css';

const Gallery = ({ tours, loading, error, onRemoveTour }) => {
    const [selectedDestination, setSelectedDestination] = useState('all'); // Store the selected destination
    const destinations = ['all', ...new Set(tours.map(tour => tour.name))]; // Array of unique destinations
    const filteredTours = selectedDestination === 'all' ? tours : tours.filter(tour => tour.name === selectedDestination); // Filter tours based on selected destination 
    // Loading and error handling
    if (loading) {
        return <div className="loading">Loading...</div>;
    }
    if (error) {
        return <div className="error">Error fetching tours. Please try again later.</div>;
    }
    // Render the gallery
    return (
        <section className="gallery">
            <h2>Tour Gallery</h2>
            <div className="filter">
                <label htmlFor="destination">Filter by Destination:</label>
                <select id="destination" value={selectedDestination} onChange={(e) => setSelectedDestination(e.target.value)}>
                    {destinations.map((destination, index) => (
                        <option key={index} value={destination}>{destination}</option>
                    ))}
                </select>
            </div>
            {filteredTours.length === 0 ? ( 
                <p>No Tours Available</p>
            ) : (
                <div className="tour-cards">
                    {filteredTours.map(tour => (
                        <TourCard key={tour.id} {...tour} onRemoveTour={onRemoveTour} />
                    ))}
                </div>
            )}
        </section>
    )
}
export default Gallery;