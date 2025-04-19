import React from 'react';
import './styles.css';

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
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        margin: '20px',
        padding: '20px',
        maxWidth: '420px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        ':hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        },
    },
    image: {
        width: '100%',
        borderRadius: '12px',
        objectFit: 'cover',
    },
    content: {
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif",
    },
    price: {
        color: '#2a9d8f',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        margin: '10px 0',
    },
    button: {
        backgroundColor: '#e63946',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '6px',
        cursor: 'pointer',
        marginTop: '12px',
        fontSize: '1rem',
        transition: 'background-color 0.3s',
        ':hover': {
            backgroundColor: '#d62839',
        },
    },
};

export default TourCard;

