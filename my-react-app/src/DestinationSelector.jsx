import React, { useState } from 'react';
import './styles.css';

const DestinationSelector = ({ tours, onDestinationChange }) => {
    const [selectedDestination, setSelectedDestination] = useState('');
// Function to handle the change in destination selection
    const handleChange = (event) => {
        const destination = event.target.value;
        setSelectedDestination(destination);
        onDestinationChange(destination); // Pass the selected destination up to App.jsx
    };

    // Extract unique tour names
    const uniqueTours = [...new Set(tours.map((tour) => tour.name))];
// Render the destination selector
    return (
        <div>
            <label htmlFor="destination-selector"></label> // Select a destination
            <select
                id="destination-selector"
                value={selectedDestination}
                onChange={handleChange}
            >
                <option value=""></option> 
                {uniqueTours.map((tour, index) => (
                    <option key={index} value={tour}>
                        {tour}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;