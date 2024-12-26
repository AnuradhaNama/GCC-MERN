// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './Payment.css'; // Ensure CSS is properly linked
// import Sampleimage from '../assets/image.png'; // Ensure you upload the image to match your assets
// import GooglePayIcon from '../assets/gpay.png';
// import PhonePeIcon from '../assets/phonepe.png';
// import PaytmIcon from '../assets/payment.png';
// import QrCode from '../assets/gpay.jpeg'; // Corrected path for QR code image

// const Payment = () => {
//   const navigate = useNavigate(); // Initialize useNavigate
//   const [isPaymentSuccess, setIsPaymentSuccess] = useState(false); // State to track payment success

//   // Handle file upload
//   const handleScreenshotUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setIsPaymentSuccess(true); // Mark payment as successful once file is uploaded
//     }
//   };

//   // Handle navigation to the slots page
//   const handleProceedToNextPage = () => {
//     navigate('/slots'); // Navigate to the Slots page
//   };

//   return (
//     <div className="Payment-container">
//       <h2 className="Payment-title">Payment with QR Code</h2>
//       <p className="scan-to-pay">Scan to Pay</p>
//       <div className="Payment-content">
//         <div className="qr-section">
//           <div className="qr-code-container">
//             <img src={QrCode} alt="QR Code" className="qr-code" />
//           </div>
//           <h3 className="payment-methods-title">Supported Payment Methods</h3>
//           <div className="payment-methods">
//             <a href="https://pay.google.com/" target="_blank" rel="noopener noreferrer">
//               <img src={GooglePayIcon} alt="Google Pay" className="payment-method-icon" />
//             </a>
//             <a href="https://www.phonepe.com/" target="_blank" rel="noopener noreferrer">
//               <img src={PhonePeIcon} alt="PhonePe" className="payment-method-icon" />
//             </a>
//             <a href="https://paytm.com/" target="_blank" rel="noopener noreferrer">
//               <img src={PaytmIcon} alt="Paytm" className="payment-method-icon" />
//             </a>
//           </div>
//         </div>

//         <div className="pay-image-section">
//           <img src={Sampleimage} alt="Sample Illustration" />
//         </div>
//       </div>

//       {/* Upload Screenshot Section */}
//       <div className="upload-section">
//         <label htmlFor="screenshot-upload" className="upload-label">Upload Payment Screenshot:</label>
//         <input
//           type="file"
//           id="screenshot-upload"
//           accept="image/*"
//           onChange={handleScreenshotUpload}
//         />
//       </div>

//       {/* Payment Success Message and Button */}
//       {isPaymentSuccess && (
//         <div className="payment-success-section">
//           <h3 className="payment-success-message">Payment Successful!</h3>
//           <button className="proceed-button" onClick={handleProceedToNextPage}>
//             Go to Next Page
//           </button>
//         </div>
//       )}

//       <div className="footer-container">
//         <footer className="footer">2024 Global Coding Club. All Rights Reserved.</footer>
//       </div>
//     </div>
//   );
// };

// export default Payment;









// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './Payment.css'; // Ensure CSS is properly linked
// import Sampleimage from '../assets/image.png'; // Ensure you upload the image to match your assets
// import GooglePayIcon from '../assets/gpay.png';
// import PhonePeIcon from '../assets/phonepe.png';
// import PaytmIcon from '../assets/payment.png';
// import QrCode from '../assets/gpay.jpeg'; // Corrected path for QR code image

// const Payment = () => {
//   const navigate = useNavigate(); // Initialize useNavigate
//   const [isPaymentSuccess, setIsPaymentSuccess] = useState(false); // State to track payment success
//   const [utrNumber, setUtrNumber] = useState(''); // Store the UTR number
//   const [selectedSlot, setSelectedSlot] = useState(null); // Store the selected slot details

//   useEffect(() => {
//     // Fetch slot details after booking
//     const selectedSlotData = JSON.parse(localStorage.getItem('selectedSlot'));
//     setSelectedSlot(selectedSlotData);
//   }, []);

//   // Handle file upload
//   const handleScreenshotUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && utrNumber) {
//       setIsPaymentSuccess(true); // Mark payment as successful once file is uploaded
//     } else {
//       alert('Please enter the UTR number and upload a screenshot.');
//     }
//   };

//   // Handle UTR number change
//   const handleUtrChange = (e) => {
//     setUtrNumber(e.target.value);
//   };

//   const handleProceedToNextPage = () => {
//     navigate('/slots'); // Navigate to the Slots page after payment
//   };

//   return (
//     <div className="Payment-container">
//       <h2 className="Payment-title">Payment with QR Code</h2>
//       <p className="scan-to-pay">Scan to Pay</p>
//       <div className="Payment-content">
//         <div className="qr-section">
//           <div className="qr-code-container">
//             <img src={QrCode} alt="QR Code" className="qr-code" />
//           </div>
//           <h3 className="payment-methods-title">Supported Payment Methods</h3>
//           <div className="payment-methods">
//             <a href="https://pay.google.com/" target="_blank" rel="noopener noreferrer">
//               <img src={GooglePayIcon} alt="Google Pay" className="payment-method-icon" />
//             </a>
//             <a href="https://www.phonepe.com/" target="_blank" rel="noopener noreferrer">
//               <img src={PhonePeIcon} alt="PhonePe" className="payment-method-icon" />
//             </a>
//             <a href="https://paytm.com/" target="_blank" rel="noopener noreferrer">
//               <img src={PaytmIcon} alt="Paytm" className="payment-method-icon" />
//             </a>
//           </div>
//         </div>

//         <div className="pay-image-section">
//           <img src={Sampleimage} alt="Sample Illustration" />
//         </div>
//       </div>

//       {/* Upload Screenshot Section */}
//       <div className="upload-section">
//         <label htmlFor="utr-number" className="upload-label">Enter UTR Number:</label>
//         <input
//           type="text"
//           id="utr-number"
//           placeholder="Enter UTR number"
//           value={utrNumber}
//           onChange={handleUtrChange}
//         />
        
//         <label htmlFor="screenshot-upload" className="upload-label">Upload Payment Screenshot:</label>
//         <input
//           type="file"
//           id="screenshot-upload"
//           accept="image/*"
//           onChange={handleScreenshotUpload}
//         />
//       </div>

//       {/* Payment Success Message and Button */}
//       {isPaymentSuccess && (
//         <div className="payment-success-section">
//           <h3 className="payment-success-message">Payment Successful!</h3>
//           <button className="proceed-button" onClick={handleProceedToNextPage}>
//             Go to Next Page
//           </button>
//         </div>
//       )}

//       <div className="footer-container">
//         <footer className="footer">2024 Global Coding Club. All Rights Reserved.</footer>
//       </div>
//     </div>
//   );
// };

// export default Payment;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Profile.css'; 

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login'); 
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });

        const data = await response.json();

        if (response.ok) {
          setProfile(data.user); 
        } else {
          setErrorMessage(data.message || 'Failed to load profile.');
        }
      } catch (error) {
        setErrorMessage('An error occurred while fetching the profile.');
        console.error('Profile fetch error:', error);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Welcome Message */}
      <div className="welcome-container">
        <h2>Welcome to GCC Hiring Platform</h2>
        <h3>{profile.name}</h3>
      </div>

      {/* Profile Content */}
      <div className="profile-container">
        <p>Email: {profile.email}</p>
        {/* Add more profile details if needed */}
      </div>
    </div>
  );
};

export default Profile;
