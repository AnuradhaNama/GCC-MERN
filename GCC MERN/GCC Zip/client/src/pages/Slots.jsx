import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Slots.css';

const Slots = () => {
  const [slots, setSlots] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/slots');
        
        
        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.message || 'Error fetching slots.');
          return;
        }
        
        const data = await response.json();
        setSlots(data.slots || []);
      } catch (err) {
        console.error('Error fetching slots:', err);
        setError('Unable to fetch slots.');
      }
    };
    fetchSlots();
  }, []);

  
  const handleSlotSelection = async (slotId) => {
    const token = localStorage.getItem('token');
    
    
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/slots/select', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,  
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slotId }),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert(data.message);
        navigate('/profile');
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error('Error selecting slot:', err);
      alert('An error occurred while selecting the slot.');
    }
  };

  return (
    <div className="slots-container">
      <h1>Book Your Exam Slot</h1>
      
      {error && <p className="error-message">{error}</p>}
      
      {slots.length > 0 ? (
        <div className="slots-list">
          {slots.map((slot) => (
            <div key={slot.id} className="slot-item">
              <h3>{slot.name}</h3>
              <p><strong>Date:</strong> {slot.date}</p>
              <p><strong>Time:</strong> {slot.time}</p>
              <p><strong>Available:</strong> {slot.available} / {slot.capacity}</p>
              <button
                onClick={() => handleSlotSelection(slot.id)}
                disabled={slot.available === 0}
              >
                {slot.available === 0 ? 'Fully Booked' : 'Book Slot'}
              </button>
            </div>
          ))}
        </div>
      ) : (
        !error && <p>Loading slots...</p>
      )}
    </div>
  );
};

export default Slots;
