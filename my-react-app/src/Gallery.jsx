import React, { useState } from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, loading, error, onRemoveTour }) => {
    const [selectedDestination, setSelectedDestination] = useState('all');
    const destinations = ['all', ...new Set(tours.map(tour => tour.destination))];
    const filteredTours = selectedDestination === 'all' ? tours : tours.filter(tour => tour.destination === selectedDestination);
    if (loading) {
        return <div className="loading">Loading...</div>;
    }
    if (error) {
        return <div className="error">Error fetching tours. Please try again later.</div>;
    }
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
                        <TourCard key={tour.id} tour={tour} onRemoveTour={onRemoveTour} />
                    ))}
                </div>
            )}
        </section>
    )
}
export default Gallery;