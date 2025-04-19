import React from 'react';

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
    borderRadius: '8px',
    margin: '16px',
    padding: '16px',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  content: {
    textAlign: 'center',
  },
  price: {
    color: '#2a9d8f',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#e63946',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '8px',
  },
};

export default TourCard;

