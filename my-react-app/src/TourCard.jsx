import React from 'react';
import './styles.css';
// Tour card container 
const TourCard = ({ id, name, info, image, price, onRemoveTour }) => {
  return (
    <div className="tour-card" style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.content}>
        <h2>{name}</h2>
        <p>{info}</p>
        <h4 style={styles.price}>${price}</h4>
        <button style={styles.button} onClick={() => onRemoveTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '15px',
        margin: '20px',
        padding: '20px',
        maxWidth: '350px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        ':hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
        },
    },
    image: {
        width: '100%',
        borderRadius: '12px',
        objectFit: 'cover',
        maxHeight: '250px',
    },
    content: {
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif",
        paddingTop: '12px',
    },
    title: {
        fontSize: '1.6rem',
        fontWeight: '600',
        color: '#333',
        margin: '12px 0',
    },
    info: {
        fontSize: '1rem',
        color: '#555',
        marginBottom: '12px',
    },
    price: {
        color: '#2a9d8f',
        fontWeight: 'bold',
        fontSize: '1.3rem',
        margin: '10px 0',
    },
    button: {
        backgroundColor: '#e63946',
        color: '#fff',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '8px',
        cursor: 'pointer',
        marginTop: '15px',
        fontSize: '1rem',
        transition: 'background-color 0.3s, transform 0.2s',
        textTransform: 'uppercase',
        ':hover': {
            backgroundColor: '#d62839',
            transform: 'scale(1.05)',
        },
    },
};



export default TourCard;

