// // // // // // // import React, { useState } from 'react';
// // // // // // // import { useNavigate } from 'react-router-dom'; 
// // // // // // // import './register.css'; 
// // // // // // // import sampleImage from '../assets/register.png'; 

// // // // // // // const Register = () => {
// // // // // // //   const navigate = useNavigate(); 
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     name: '',
// // // // // // //     email: '',
// // // // // // //     password: '',
// // // // // // //     rollno: '',
// // // // // // //   });
// // // // // // //   const [successMessage, setSuccessMessage] = useState(''); 
// // // // // // //   const [errorMessage, setErrorMessage] = useState(''); 

// // // // // // //   const handleChange = (e) => {
// // // // // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();

// // // // // // //     try {
// // // // // // //       const response = await fetch('http://localhost:5000/api/auth/register', {
// // // // // // //         method: 'POST',
// // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // //         body: JSON.stringify(formData),
// // // // // // //       });

// // // // // // //       const data = await response.json();
// // // // // // //       console.log('Response:', data); // Debugging response

// // // // // // //       if (response.ok) {
// // // // // // //         setSuccessMessage(data.message || 'Registration successful!'); // Display success message
// // // // // // //         // Reset form fields
// // // // // // //         setFormData({
// // // // // // //           name: '',
// // // // // // //           email: '',
// // // // // // //           password: '',
// // // // // // //           rollno: '',
// // // // // // //         });
// // // // // // //         setErrorMessage(''); // Clear any previous errors
// // // // // // //         navigate('/payment'); // Redirect to payment page
// // // // // // //       } else {
// // // // // // //         setErrorMessage(data.message || 'Registration failed.'); // Show the error message from the server
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Error during registration:', error); // Debugging error
// // // // // // //       setErrorMessage('An error occurred during registration. Please try again.');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="register-container">
// // // // // // //       <div className="register-content">
// // // // // // //         <div className="form-section">
// // // // // // //           <h2 className="register-title">Welcome! Let's Get Started</h2>

// // // // // // //           {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
// // // // // // //           {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}

// // // // // // //           <form onSubmit={handleSubmit}>
// // // // // // //             <div className="form-group">
// // // // // // //               <label>Name</label>
// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 name="name"
// // // // // // //                 value={formData.name}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 placeholder="Enter your name"
// // // // // // //                 required
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //             <div className="form-group">
// // // // // // //               <label>Email</label>
// // // // // // //               <input
// // // // // // //                 type="email"
// // // // // // //                 name="email"
// // // // // // //                 value={formData.email}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 placeholder="Enter your email"
// // // // // // //                 required
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //             <div className="form-group">
// // // // // // //               <label>Password</label>
// // // // // // //               <input
// // // // // // //                 type="password"
// // // // // // //                 name="password"
// // // // // // //                 value={formData.password}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 placeholder="Enter your password"
// // // // // // //                 required
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //             <div className="form-group">
// // // // // // //               <label>Roll No</label>
// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 name="rollno"
// // // // // // //                 value={formData.rollno}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 placeholder="Enter your roll number"
// // // // // // //                 required
// // // // // // //               />
// // // // // // //             </div>

// // // // // // //             <div className="register-actions">
// // // // // // //               <button type="submit" className="register-btn">Register</button>
// // // // // // //               <h4 className="login-text">
// // // // // // //                 Already have an account? <a href="/login">Login</a> here
// // // // // // //               </h4>
// // // // // // //             </div>
// // // // // // //           </form>
// // // // // // //         </div>
        
// // // // // // //         {/* Right Side - Image Section */}
// // // // // // //         <div className="image-section">
// // // // // // //           <img src={sampleImage} alt="Registration" />
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <footer className="footer">© 2024 Global Coding Club. All Rights Reserved.</footer>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Register;



// // // // // // import React, { useState } from 'react';
// // // // // // import { useNavigate } from 'react-router-dom'; 
// // // // // // import './register.css'; 
// // // // // // import sampleImage from '../assets/register.png'; 

// // // // // // const Register = () => {
// // // // // //   const navigate = useNavigate(); 
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     name: '',
// // // // // //     email: '',
// // // // // //     password: '',
// // // // // //     rollno: '',
// // // // // //   });
// // // // // //   const [successMessage, setSuccessMessage] = useState(''); 
// // // // // //   const [errorMessage, setErrorMessage] = useState(''); 

// // // // // //   const handleChange = (e) => {
// // // // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();

// // // // // //     try {
// // // // // //       const response = await fetch('http://localhost:5000/api/auth/register', {
// // // // // //         method: 'POST',
// // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // //         body: JSON.stringify(formData),
// // // // // //       });

// // // // // //       const data = await response.json();
// // // // // //       console.log('Response:', data); // Debugging response

// // // // // //       if (response.ok) {
// // // // // //         setSuccessMessage(data.message || 'Registration successful!'); // Display success message
// // // // // //         // Reset form fields
// // // // // //         setFormData({
// // // // // //           name: '',
// // // // // //           email: '',
// // // // // //           password: '',
// // // // // //           rollno: '',
// // // // // //         });
// // // // // //         setErrorMessage(''); // Clear any previous errors
// // // // // //         navigate('/slots'); // Redirect to slots page to book slot
// // // // // //       } else {
// // // // // //         setErrorMessage(data.message || 'Registration failed.'); // Show the error message from the server
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error('Error during registration:', error); // Debugging error
// // // // // //       setErrorMessage('An error occurred during registration. Please try again.');
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="register-container">
// // // // // //       <div className="register-content">
// // // // // //         <div className="form-section">
// // // // // //           <h2 className="register-title">Welcome! Let's Get Started</h2>

// // // // // //           {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
// // // // // //           {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}

// // // // // //           <form onSubmit={handleSubmit}>
// // // // // //             <div className="form-group">
// // // // // //               <label>Name</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 name="name"
// // // // // //                 value={formData.name}
// // // // // //                 onChange={handleChange}
// // // // // //                 placeholder="Enter your name"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
// // // // // //             <div className="form-group">
// // // // // //               <label>Email</label>
// // // // // //               <input
// // // // // //                 type="email"
// // // // // //                 name="email"
// // // // // //                 value={formData.email}
// // // // // //                 onChange={handleChange}
// // // // // //                 placeholder="Enter your email"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
// // // // // //             <div className="form-group">
// // // // // //               <label>Password</label>
// // // // // //               <input
// // // // // //                 type="password"
// // // // // //                 name="password"
// // // // // //                 value={formData.password}
// // // // // //                 onChange={handleChange}
// // // // // //                 placeholder="Enter your password"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
// // // // // //             <div className="form-group">
// // // // // //               <label>Roll No</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 name="rollno"
// // // // // //                 value={formData.rollno}
// // // // // //                 onChange={handleChange}
// // // // // //                 placeholder="Enter your roll number"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>

// // // // // //             <div className="register-actions">
// // // // // //               <button type="submit" className="register-btn">Register</button>
// // // // // //               <h4 className="login-text">
// // // // // //                 Already have an account? <a href="/login">Login</a> here
// // // // // //               </h4>
// // // // // //             </div>
// // // // // //           </form>
// // // // // //         </div>
        
// // // // // //         {/* Right Side - Image Section */}
// // // // // //         <div className="image-section">
// // // // // //           <img src={sampleImage} alt="Registration" />
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <footer className="footer">© 2024 Global Coding Club. All Rights Reserved.</footer>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Register;

// // // // // import React, { useState } from 'react';
// // // // // import { useNavigate } from 'react-router-dom'; 
// // // // // import './register.css'; 
// // // // // import sampleImage from '../assets/register.png'; 

// // // // // const Register = () => {
// // // // //   const navigate = useNavigate(); 
// // // // //   const [formData, setFormData] = useState({
// // // // //     name: '',
// // // // //     email: '',
// // // // //     password: '',
// // // // //     rollno: '',
// // // // //   });
// // // // //   const [successMessage, setSuccessMessage] = useState(''); 
// // // // //   const [errorMessage, setErrorMessage] = useState(''); 

// // // // //   const handleChange = (e) => {
// // // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();

// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5000/api/auth/register', {
// // // // //         method: 'POST',
// // // // //         headers: { 'Content-Type': 'application/json' },
// // // // //         body: JSON.stringify(formData),
// // // // //       });

// // // // //       const data = await response.json();
// // // // //       console.log('Response:', data); // Debugging response

// // // // //       if (response.ok) {
// // // // //         setSuccessMessage(data.message || 'Registration successful!'); // Display success message
// // // // //         // Reset form fields
// // // // //         setFormData({
// // // // //           name: '',
// // // // //           email: '',
// // // // //           password: '',
// // // // //           rollno: '',
// // // // //         });
// // // // //         setErrorMessage(''); // Clear any previous errors
// // // // //       } else {
// // // // //         setErrorMessage(data.message || 'Registration failed.'); // Show the error message from the server
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Error during registration:', error); // Debugging error
// // // // //       setErrorMessage('An error occurred during registration. Please try again.');
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="register-container">
// // // // //       <div className="register-content">
// // // // //         <div className="form-section">
// // // // //           <h2 className="register-title">Welcome! Let's Get Started</h2>

// // // // //           {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
// // // // //           {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}

// // // // //           {/* Registration form */}
// // // // //           <form onSubmit={handleSubmit}>
// // // // //             <div className="form-group">
// // // // //               <label>Name</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="name"
// // // // //                 value={formData.name}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter your name"
// // // // //                 required
// // // // //               />
// // // // //             </div>
// // // // //             <div className="form-group">
// // // // //               <label>Email</label>
// // // // //               <input
// // // // //                 type="email"
// // // // //                 name="email"
// // // // //                 value={formData.email}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter your email"
// // // // //                 required
// // // // //               />
// // // // //             </div>
// // // // //             <div className="form-group">
// // // // //               <label>Password</label>
// // // // //               <input
// // // // //                 type="password"
// // // // //                 name="password"
// // // // //                 value={formData.password}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter your password"
// // // // //                 required
// // // // //               />
// // // // //             </div>
// // // // //             <div className="form-group">
// // // // //               <label>Roll No</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="rollno"
// // // // //                 value={formData.rollno}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter your roll number"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             <div className="register-actions">
// // // // //               <button type="submit" className="register-btn">Register</button>
// // // // //             </div>
// // // // //           </form>

// // // // //           {/* Success message with login prompt */}
// // // // //           {successMessage && (
// // // // //             <div className="login-prompt">
// // // // //               <p>Thank you for registering! Now you can <a href="/login">log in</a> and book your slot.</p>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
        
// // // // //         {/* Right Side - Image Section */}
// // // // //         <div className="image-section">
// // // // //           <img src={sampleImage} alt="Registration" />
// // // // //         </div>
// // // // //       </div>

// // // // //       <footer className="footer">© 2024 Global Coding Club. All Rights Reserved.</footer>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Register;

// // // // import React, { useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import './register.css';
// // // // import sampleImage from '../assets/register.png';

// // // // const Register = () => {
// // // //   const navigate = useNavigate();
// // // //   const [formData, setFormData] = useState({ name: '', email: '', password: '', rollno: '' });
// // // //   const [successMessage, setSuccessMessage] = useState('');
// // // //   const [errorMessage, setErrorMessage] = useState('');

// // // //   const handleChange = (e) => {
// // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     try {
// // // //       const response = await fetch('http://localhost:5000/api/register', {
// // // //         method: 'POST',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify(formData),
// // // //       });

// // // //       const data = await response.json();

// // // //       if (response.ok) {
// // // //         setSuccessMessage('Registration successful!');
// // // //         setFormData({ name: '', email: '', password: '', rollno: '' });
// // // //         setErrorMessage('');
// // // //         navigate('/slots');
// // // //       } else {
// // // //         setErrorMessage(data.message || 'Registration failed.');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error:', error);
// // // //       setErrorMessage('Something went wrong. Please try again.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="register-container">
// // // //       <div className="register-content">
// // // //         <div className="form-section">
// // // //           <h2>Register</h2>
// // // //           {successMessage && <p className="success-message">{successMessage}</p>}
// // // //           {errorMessage && <p className="error-message">{errorMessage}</p>}
// // // //           <form onSubmit={handleSubmit}>
// // // //             <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
// // // //             <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
// // // //             <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
// // // //             <input type="text" name="rollno" value={formData.rollno} onChange={handleChange} placeholder="Roll No" required />
// // // //             <button type="submit">Register</button>
// // // //           </form>
// // // //         </div>
// // // //         <div className="image-section">
// // // //           <img src={sampleImage} alt="Register" />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Register;
// // // import React, { useState } from 'react';

// // // const Register = () => {
// // //   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
// // //   const [message, setMessage] = useState('');

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/auth/register', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(formData),
// // //       });

// // //       const data = await response.json();
// // //       if (response.ok) {
// // //         setMessage('Registration successful! Please login.');
// // //       } else {
// // //         setMessage(data.message || 'An error occurred');
// // //       }
// // //     } catch (error) {
// // //       setMessage('Server error. Please try again later.');
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <h2>Register</h2>
// // //       {message && <p>{message}</p>}
// // //       <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
// // //       <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
// // //       <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
// // //       <button type="submit">Register</button>
// // //     </form>
// // //   );
// // // };

// // // export default Register;
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Register = () => {
// //   const [form, setForm] = useState({ name: '', email: '', password: '' });
// //   const [errorMessage, setErrorMessage] = useState('');
// //   const navigate = useNavigate();

// //   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch('http://localhost:5000/api/auth/register', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(form),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         navigate('/login');
// //       } else {
// //         setErrorMessage(data.message);
// //       }
// //     } catch (error) {
// //       setErrorMessage('Registration failed.');
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
// //       <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
// //       <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
// //       <button type="submit">Register</button>
// //       {errorMessage && <p>{errorMessage}</p>}
// //     </form>
// //   );
// // };

// // export default Register;


// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './register.css'; // Add styling similar to Login.css

// // const Register = () => {
// //   const [form, setForm] = useState({ name: '', email: '', password: '' });
// //   const [successMessage, setSuccessMessage] = useState('');
// //   const [errorMessage, setErrorMessage] = useState('');
// //   const navigate = useNavigate();

// //   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch('http://localhost:5000/api/auth/register', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(form),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         setSuccessMessage('Registration successful. Redirecting to login...');
// //         setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
// //       } else {
// //         setErrorMessage(data.message);
// //       }
// //     } catch (error) {
// //       setErrorMessage('Registration failed.');
// //     }
// //   };

// //   return (
// //     <div className="register-container">
// //       <form onSubmit={handleSubmit} className="register-form">
// //         <h2>Register</h2>
// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="Name"
// //           value={form.name}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Email"
// //           value={form.email}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           value={form.password}
// //           onChange={handleChange}
// //           required
// //         />
// //         <button type="submit">Register</button>
// //         {successMessage && <p className="success-message">{successMessage}</p>}
// //         {errorMessage && <p className="error-message">{errorMessage}</p>}
// //       </form>
// //     </div>
// //   );
// // };

// // export default Register;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../pages/register.css';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     rollno: '',
//     fatherName: '',
//     college: '',
//     branch: '',
//     gender: '',
//     dob: '',
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError('');

//     const hasEmptyFields = Object.values(formData).some((field) => !field);
//     if (hasEmptyFields) {
//       setError('Please fill in all fields');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         setError(data.message || 'Registration failed');
//         return;
//       }

//       alert('Registration successful! Please log in.');
//       navigate('/login');
//     } catch (err) {
//       console.error('Registration error:', err);
//       setError('An error occurred during registration. Please try again.');
//     }
//   };

//   return (
//     <div className="register-container">
//       <h1>Register</h1>
//       {error && <p className="error-message">{error}</p>}
//       <form onSubmit={handleRegister}>
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Roll No.</label>
//           <input
//             type="text"
//             name="rollno"
//             value={formData.rollno}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Father's Name</label>
//           <input
//             type="text"
//             name="fatherName"
//             value={formData.fatherName}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>College</label>
//           <input
//             type="text"
//             name="college"
//             value={formData.college}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Branch</label>
//           <input
//             type="text"
//             name="branch"
//             value={formData.branch}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Gender</label>
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleInputChange}
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Date of Birth</label>
//           <input
//             type="date"
//             name="dob"
//             value={formData.dob}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;








import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../pages/register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rollno: '',
    fatherName: '',
    college: '',
    branch: '',
    gender: '',
    dob: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      alert(response.data.message); 
      navigate('/login'); 
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message); 
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="text" name="rollno" placeholder="Roll No" onChange={handleChange} required />
        <input type="text" name="fatherName" placeholder="Father's Name" onChange={handleChange} />
        <input type="text" name="college" placeholder="College" onChange={handleChange} />
        <input type="text" name="branch" placeholder="Branch" onChange={handleChange} />
        <input type="text" name="gender" placeholder="Gender" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Register;
