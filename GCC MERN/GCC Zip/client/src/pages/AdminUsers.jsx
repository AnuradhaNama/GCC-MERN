// // // // // import React, { useEffect, useState } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import '../pages/AdminUsers.css';

// // // // // const AdminUsers = () => {
// // // // //   const [users, setUsers] = useState([]);
// // // // //   const [selectedSlot, setSelectedSlot] = useState({});
// // // // //   const navigate = useNavigate();

// // // // //   useEffect(() => {
// // // // //     const token = localStorage.getItem('token');
// // // // //     if (!token) {
// // // // //       alert('Unauthorized access. Please log in.');
// // // // //       navigate('/login');
// // // // //       return;
// // // // //     }

// // // // //     const fetchUsers = async () => {
// // // // //       try {
// // // // //         const response = await fetch('http://localhost:5000/api/admin/users', {
// // // // //           method: 'GET',
// // // // //           headers: { Authorization: `Bearer ${token}` },
// // // // //         });

// // // // //         if (!response.ok) {
// // // // //           const data = await response.json();
// // // // //           throw new Error(data.message || 'Failed to fetch users.');
// // // // //         }

// // // // //         const data = await response.json();
// // // // //         setUsers(data.users);
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching users:', error);
// // // // //         alert(error.message);
// // // // //         navigate('/login');
// // // // //       }
// // // // //     };

// // // // //     fetchUsers();
// // // // //   }, [navigate]);

// // // // //   const handleSlotChange = (userId, slotId) => {
// // // // //     setSelectedSlot((prev) => ({ ...prev, [userId]: slotId }));
// // // // //   };

// // // // //   const handleSlotAllocation = async (userId) => {
// // // // //     const token = localStorage.getItem('token');
// // // // //     const slot = selectedSlot[userId];

// // // // //     if (!slot) {
// // // // //       alert('Please select a valid slot date and time.');
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       const response = await fetch(`http://localhost:5000/api/admin/users/${userId}/slot/${slot}`, {
// // // // //         method: 'PATCH',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //           Authorization: `Bearer ${token}`,
// // // // //         },
// // // // //       });

// // // // //       if (!response.ok) {
// // // // //         const data = await response.json();
// // // // //         throw new Error(data.message || 'Failed to allocate slot.');
// // // // //       }

// // // // //       alert('Slot allocated successfully.');
// // // // //     } catch (error) {
// // // // //       console.error('Error allocating slot:', error);
// // // // //       alert(error.message);
// // // // //     }
// // // // //   };

// // // // //   const handleDeleteUser = async (userId) => {
// // // // //     const token = localStorage.getItem('token');

// // // // //     try {
// // // // //       const response = await fetch(`http://localhost:5000/api/admin/users/${userId}`, {
// // // // //         method: 'DELETE',
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${token}`,
// // // // //         },
// // // // //       });

// // // // //       if (!response.ok) {
// // // // //         const data = await response.json();
// // // // //         throw new Error(data.message || 'Failed to delete user.');
// // // // //       }

// // // // //       setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
// // // // //       alert('User deleted successfully.');
// // // // //     } catch (error) {
// // // // //       console.error('Error deleting user:', error);
// // // // //       alert(error.message);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="admin-users-container">
// // // // //       <h1>Registered Users</h1>
// // // // //       <table>
// // // // //         <thead>
// // // // //           <tr>
// // // // //             <th>Name</th>
// // // // //             <th>Email</th>
// // // // //             <th>Role</th>
// // // // //             <th>Slot</th>
// // // // //             <th>Actions</th>
// // // // //           </tr>
// // // // //         </thead>
// // // // //         <tbody>
// // // // //           {users.map((user) => (
// // // // //             <tr key={user._id}>
// // // // //               <td>{user.name}</td>
// // // // //               <td>{user.email}</td>
// // // // //               <td>{user.role}</td>
// // // // //               <td>
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   placeholder="Enter slot ID"
// // // // //                   value={selectedSlot[user._id] || ''}
// // // // //                   onChange={(e) => handleSlotChange(user._id, e.target.value)}
// // // // //                 />
// // // // //               </td>
// // // // //               <td>
// // // // //                 <button onClick={() => handleSlotAllocation(user._id)}>Allocate Slot</button>
// // // // //                 <button onClick={() => alert('Edit functionality not implemented yet')}>Edit</button>
// // // // //                 <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
// // // // //               </td>
// // // // //             </tr>
// // // // //           ))}
// // // // //         </tbody>
// // // // //       </table>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AdminUsers;

// // // // import React, { useEffect, useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import '../pages/AdminUsers.css';

// // // // const AdminUsers = () => {
// // // //   const [users, setUsers] = useState([]);
// // // //   const [slots, setSlots] = useState([]);
// // // //   const [selectedSlot, setSelectedSlot] = useState({});
// // // //   const [selectedDate, setSelectedDate] = useState({});
// // // //   const [selectedTime, setSelectedTime] = useState({});
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     const token = localStorage.getItem('token');
// // // //     if (!token) {
// // // //       alert('Unauthorized access. Please log in.');
// // // //       navigate('/login');
// // // //       return;
// // // //     }

// // // //     const fetchUsers = async () => {
// // // //       try {
// // // //         const response = await fetch('http://localhost:5000/api/admin/users', {
// // // //           method: 'GET',
// // // //           headers: { Authorization: `Bearer ${token}` },
// // // //         });

// // // //         if (!response.ok) {
// // // //           const data = await response.json();
// // // //           throw new Error(data.message || 'Failed to fetch users.');
// // // //         }

// // // //         const data = await response.json();
// // // //         setUsers(data.users);
// // // //       } catch (error) {
// // // //         console.error('Error fetching users:', error);
// // // //         alert(error.message);
// // // //         navigate('/login');
// // // //       }
// // // //     };

// // // //     const fetchSlots = async () => {
// // // //       try {
// // // //         const response = await fetch('http://localhost:5000/api/slots', {
// // // //           method: 'GET',
// // // //           headers: { Authorization: `Bearer ${token}` },
// // // //         });

// // // //         if (!response.ok) {
// // // //           const data = await response.json();
// // // //           throw new Error(data.message || 'Failed to fetch slots.');
// // // //         }

// // // //         const data = await response.json();
// // // //         setSlots(data.slots);
// // // //       } catch (error) {
// // // //         console.error('Error fetching slots:', error);
// // // //         alert(error.message);
// // // //       }
// // // //     };

// // // //     fetchUsers();
// // // //     fetchSlots();
// // // //   }, [navigate]);

// // // //   const handleSlotChange = (userId, slotId) => {
// // // //     setSelectedSlot((prev) => ({ ...prev, [userId]: slotId }));
// // // //   };

// // // //   const handleDateChange = (userId, date) => {
// // // //     setSelectedDate((prev) => ({ ...prev, [userId]: date }));
// // // //   };

// // // //   const handleTimeChange = (userId, time) => {
// // // //     setSelectedTime((prev) => ({ ...prev, [userId]: time }));
// // // //   };

// // // //   const handleSlotAllocation = async (userId) => {
// // // //     const token = localStorage.getItem('token');
// // // //     const slot = selectedSlot[userId];
// // // //     const date = selectedDate[userId];
// // // //     const time = selectedTime[userId];

// // // //     if (!slot || !date || !time) {
// // // //       alert('Please select a valid slot, date, and time.');
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const response = await fetch(`http://localhost:5000/api/admin/users/${userId}/slot/${slot}`, {
// // // //         method: 'PATCH',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //         body: JSON.stringify({ date, time }),
// // // //       });

// // // //       if (!response.ok) {
// // // //         const data = await response.json();
// // // //         throw new Error(data.message || 'Failed to allocate slot.');
// // // //       }

// // // //       alert('Slot allocated successfully.');
// // // //     } catch (error) {
// // // //       console.error('Error allocating slot:', error);
// // // //       alert(error.message);
// // // //     }
// // // //   };

// // // //   const handleDeleteUser = async (userId) => {
// // // //     const token = localStorage.getItem('token');

// // // //     try {
// // // //       const response = await fetch(`http://localhost:5000/api/admin/users/${userId}`, {
// // // //         method: 'DELETE',
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       });

// // // //       if (!response.ok) {
// // // //         const data = await response.json();
// // // //         throw new Error(data.message || 'Failed to delete user.');
// // // //       }

// // // //       setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
// // // //       alert('User deleted successfully.');
// // // //     } catch (error) {
// // // //       console.error('Error deleting user:', error);
// // // //       alert(error.message);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="admin-users-container">
// // // //       <h1>Registered Users</h1>
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Name</th>
// // // //             <th>Email</th>
// // // //             <th>Role</th>
// // // //             <th>Slot</th>
// // // //             <th>Date</th>
// // // //             <th>Time</th>
// // // //             <th>Actions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {users.map((user) => (
// // // //             <tr key={user._id}>
// // // //               <td>{user.name}</td>
// // // //               <td>{user.email}</td>
// // // //               <td>{user.role}</td>
// // // //               <td>
// // // //                 <select
// // // //                   value={selectedSlot[user._id] || ''}
// // // //                   onChange={(e) => handleSlotChange(user._id, e.target.value)}
// // // //                 >
// // // //                   <option value="">Select Slot</option>
// // // //                   {slots.map((slot) => (
// // // //                     <option key={slot._id} value={slot._id}>
// // // //                       {slot.examName}
// // // //                     </option>
// // // //                   ))}
// // // //                 </select>
// // // //               </td>
// // // //               <td>
// // // //                 <input
// // // //                   type="date"
// // // //                   value={selectedDate[user._id] || ''}
// // // //                   onChange={(e) => handleDateChange(user._id, e.target.value)}
// // // //                 />
// // // //               </td>
// // // //               <td>
// // // //                 <input
// // // //                   type="time"
// // // //                   value={selectedTime[user._id] || ''}
// // // //                   onChange={(e) => handleTimeChange(user._id, e.target.value)}
// // // //                 />
// // // //               </td>
// // // //               <td>
// // // //                 <button onClick={() => handleSlotAllocation(user._id)}>Allocate Slot</button>
// // // //                 <button onClick={() => alert('Edit functionality not implemented yet')}>Edit</button>
// // // //                 <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
// // // //               </td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AdminUsers;













// // // import React, { useEffect, useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import '../pages/AdminUsers.css';

// // // const AdminUsers = () => {
// // //   const [users, setUsers] = useState([]);
// // //   const [selectedDate, setSelectedDate] = useState({});
// // //   const [selectedTime, setSelectedTime] = useState({});
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const token = localStorage.getItem('token');
// // //     if (!token) {
// // //       alert('Unauthorized access. Please log in.');
// // //       navigate('/login');
// // //       return;
// // //     }

// // //     const fetchUsers = async () => {
// // //       try {
// // //         const response = await fetch('http://localhost:5000/api/admin/users', {
// // //           method: 'GET',
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         });

// // //         if (!response.ok) {
// // //           const data = await response.json();
// // //           throw new Error(data.message || 'Failed to fetch users.');
// // //         }

// // //         const data = await response.json();
// // //         setUsers(data.users);
// // //       } catch (error) {
// // //         console.error('Error fetching users:', error);
// // //         alert(error.message);
// // //         navigate('/login');
// // //       }
// // //     };

// // //     fetchUsers();
// // //   }, [navigate]);

// // //   const handleDateChange = (userId, date) => {
// // //     setSelectedDate((prev) => ({ ...prev, [userId]: date }));
// // //   };

// // //   const handleTimeChange = (userId, time) => {
// // //     setSelectedTime((prev) => ({ ...prev, [userId]: time }));
// // //   };

// // //   const handleSlotAllocation = async (userId) => {
// // //     const token = localStorage.getItem('token');
// // //     const date = selectedDate[userId];
// // //     const time = selectedTime[userId];

// // //     if (!date || !time) {
// // //       alert('Please select a valid date and time.');
// // //       return;
// // //     }

// // //     try {
// // //       const response = await fetch(`http://localhost:5000/api/admin/users/${userId}/slot`, {
// // //         method: 'PATCH',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //         body: JSON.stringify({ date, time }),
// // //       });

// // //       if (!response.ok) {
// // //         const data = await response.json();
// // //         throw new Error(data.message || 'Failed to allocate slot.');
// // //       }

// // //       alert('Slot allocated successfully.');
// // //     } catch (error) {
// // //       console.error('Error allocating slot:', error);
// // //       alert(error.message);
// // //     }
// // //   };

// // //   const handleDeleteUser = async (userId) => {
// // //     const token = localStorage.getItem('token');

// // //     try {
// // //       const response = await fetch(`http://localhost:5000/api/admin/users/${userId}`, {
// // //         method: 'DELETE',
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //       });

// // //       if (!response.ok) {
// // //         const data = await response.json();
// // //         throw new Error(data.message || 'Failed to delete user.');
// // //       }

// // //       setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
// // //       alert('User deleted successfully.');
// // //     } catch (error) {
// // //       console.error('Error deleting user:', error);
// // //       alert(error.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="admin-users-container">
// // //       <h1>Registered Users</h1>
// // //       <table>
// // //         <thead>
// // //           <tr>
// // //             <th>Name</th>
// // //             <th>Email</th>
// // //             <th>Role</th>
// // //             <th>Date</th>
// // //             <th>Time</th>
// // //             <th>Actions</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {users.map((user) => (
// // //             <tr key={user._id}>
// // //               <td>{user.name}</td>
// // //               <td>{user.email}</td>
// // //               <td>{user.role}</td>
// // //               <td>
// // //                 <input
// // //                   type="date"
// // //                   value={selectedDate[user._id] || ''}
// // //                   onChange={(e) => handleDateChange(user._id, e.target.value)}
// // //                 />
// // //               </td>
// // //               <td>
// // //                 <input
// // //                   type="time"
// // //                   value={selectedTime[user._id] || ''}
// // //                   onChange={(e) => handleTimeChange(user._id, e.target.value)}
// // //                 />
// // //               </td>
// // //               <td>
// // //                 <button onClick={() => handleSlotAllocation(user._id)}>Allocate Slot</button>
// // //                 <button onClick={() => alert('Edit functionality not implemented yet')}>Edit</button>
// // //                 <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
// // //               </td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default AdminUsers;































// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import '../pages/AdminUsers.css';

// // const AdminUsers = () => {
// //   const [users, setUsers] = useState([]);
// //   const [selectedDate, setSelectedDate] = useState({});
// //   const [selectedTime, setSelectedTime] = useState({});
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     if (!token) {
// //       alert('Unauthorized access. Please log in.');
// //       navigate('/login');
// //       return;
// //     }

// //     const fetchUsers = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/admin/users', {
// //           method: 'GET',
// //           headers: { Authorization: `Bearer ${token}` },
// //         });

// //         if (!response.ok) {
// //           const data = await response.json();
// //           throw new Error(data.message || 'Failed to fetch users.');
// //         }

// //         const data = await response.json();
// //         setUsers(data.users);
// //       } catch (error) {
// //         console.error('Error fetching users:', error);
// //         alert(error.message);
// //         navigate('/login');
// //       }
// //     };

// //     fetchUsers();
// //   }, [navigate]);

// //   const handleDateChange = (userId, date) => {
// //     setSelectedDate((prev) => ({ ...prev, [userId]: date }));
// //   };

// //   const handleTimeChange = (userId, time) => {
// //     setSelectedTime((prev) => ({ ...prev, [userId]: time }));
// //   };

// //   const handleSlotAllocation = async (userId) => {
// //     const token = localStorage.getItem('token');
// //     const date = selectedDate[userId];
// //     const time = selectedTime[userId];

// //     if (!date || !time) {
// //       alert('Please select a valid date and time.');
// //       return;
// //     }

// //     try {
// //       const response = await fetch(`http://localhost:5000/api/admin/users/${userId}/slot`, {
// //         method: 'PATCH',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: JSON.stringify({ date, time }),
// //       });

// //       if (!response.ok) {
// //         const data = await response.json();
// //         throw new Error(data.message || 'Failed to allocate slot.');
// //       }

// //       alert('Slot allocated successfully.');
// //     } catch (error) {
// //       console.error('Error allocating slot:', error);
// //       alert(error.message);
// //     }
// //   };

// //   const handleDeleteUser = async (userId) => {
// //     const token = localStorage.getItem('token');

// //     try {
// //       const response = await fetch(`http://localhost:5000/api/admin/users/${userId}`, {
// //         method: 'DELETE',
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });

// //       if (!response.ok) {
// //         const data = await response.json();
// //         throw new Error(data.message || 'Failed to delete user.');
// //       }

// //       setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
// //       alert('User deleted successfully.');
// //     } catch (error) {
// //       console.error('Error deleting user:', error);
// //       alert(error.message);
// //     }
// //   };

// //   return (
// //     <div className="admin-users-container">
// //       <h1>Registered Users</h1>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Name</th>
// //             <th>Email</th>
// //             <th>Role</th>
// //             <th>Date</th>
// //             <th>Time</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {users.map((user) => (
// //             <tr key={user._id}>
// //               <td>{user.name}</td>
// //               <td>{user.email}</td>
// //               <td>{user.role}</td>
// //               <td>
// //                 <input
// //                   type="date"
// //                   value={selectedDate[user._id] || ''}
// //                   onChange={(e) => handleDateChange(user._id, e.target.value)}
// //                 />
// //               </td>
// //               <td>
// //                 <select
// //                   value={selectedTime[user._id] || ''}
// //                   onChange={(e) => handleTimeChange(user._id, e.target.value)}
// //                 >
// //                   <option value="">Select Time</option>
// //                   <option value="09:00 AM">09:00 AM-10:00 AM</option>
// //                   <option value="10:00 AM">10:00 AM-11:00 AM</option>
// //                   <option value="11:00 AM">11:00 AM-12:00 PM</option>
// //                   <option value="12:00 PM">12:00 PM-01:00 PM</option>
// //                   <option value="01:00 PM">01:00 PM-02:00 PM</option>
// //                   <option value="02:00 PM">02:00 PM-03:00 PM</option>
// //                   <option value="03:00 PM">03:00 PM-04:00 PM</option>
// //                 </select>
// //               </td>
// //               <td>
// //                 <button onClick={() => handleSlotAllocation(user._id)}>Allocate Slot</button>
// //                 <button onClick={() => alert('Edit functionality not implemented yet')}>Edit</button>
// //                 <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default AdminUsers;





// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../pages/AdminUsers.css';

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedDate, setSelectedDate] = useState({});
//   const [selectedTime, setSelectedTime] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('Unauthorized access. Please log in.');
//       navigate('/login');
//       return;
//     }

//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/admin/users', {
//           method: 'GET',
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!response.ok) {
//           const data = await response.json();
//           throw new Error(data.message || 'Failed to fetch users.');
//         }

//         const data = await response.json();
//         setUsers(data.users);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         alert(error.message);
//         navigate('/login');
//       }
//     };

//     fetchUsers();
//   }, [navigate]);

//   const handleDateChange = (userId, date) => {
//     setSelectedDate((prev) => ({ ...prev, [userId]: date }));
//   };

//   const handleTimeChange = (userId, time) => {
//     setSelectedTime((prev) => ({ ...prev, [userId]: time }));
//   };

//   const handleSlotAllocation = async (userId) => {
//     const token = localStorage.getItem('token');
//     const date = selectedDate[userId];
//     const time = selectedTime[userId];

//     if (!date || !time) {
//       alert('Please select a valid date and time.');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:5000/api/admin/users/${userId}/slot`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ date, time }),
//       });

//       if (!response.ok) {
//         const data = await response.json();
//         throw new Error(data.message || 'Failed to allocate slot.');
//       }

//       alert('Slot allocated successfully.');
//     } catch (error) {
//       console.error('Error allocating slot:', error);
//       alert(error.message);
//     }
//   };

//   const handleDeleteUser = async (userId) => {
//     const token = localStorage.getItem('token');

//     try {
//       const response = await fetch(`http://localhost:5000/api/admin/users/${userId}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}` },
//       });

//       if (!response.ok) {
//         const data = await response.json();
//         throw new Error(data.message || 'Failed to delete user.');
//       }

//       setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
//       alert('User deleted successfully.');
//     } catch (error) {
//       console.error('Error deleting user:', error);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="admin-users-container">
//       <h1>Registered Users</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.role}</td>
//               <td>
//                 <input
//                   type="date"
//                   value={selectedDate[user._id] || ''}
//                   onChange={(e) => handleDateChange(user._id, e.target.value)}
//                 />
//               </td>
//               <td>
//                 <select
//                   value={selectedTime[user._id] || ''}
//                   onChange={(e) => handleTimeChange(user._id, e.target.value)}
//                 >
//                   <option value="">Select Time</option>
//                   <option value="08:00 AM - 09:00 AM">08:00 AM - 09:00 AM</option>
//                   <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
//                   <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
//                   <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
//                   <option value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</option>
//                   <option value="01:00 PM - 02:00 PM">01:00 PM - 02:00 PM</option>
//                   <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
//                   <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
//                   <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
//                 </select>
//               </td>
//               <td>
//                 <button onClick={() => handleSlotAllocation(user._id)}>Allocate Slot</button>
//                 <button onClick={() => alert('Edit functionality not implemented yet')}>Edit</button>
//                 <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminUsers;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../pages/AdminUsers.css';

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [slots, setSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('Unauthorized access. Please log in.');
//       navigate('/login');
//       return;
//     }

//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/admin/users', {
//           method: 'GET',
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!response.ok) {
//           const data = await response.json();
//           throw new Error(data.message || 'Failed to fetch users.');
//         }

//         const data = await response.json();
//         setUsers(data.users);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         alert(error.message);
//         navigate('/login');
//       }
//     };

//     const fetchSlots = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/slots', {
//           method: 'GET',
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!response.ok) {
//           const data = await response.json();
//           throw new Error(data.message || 'Failed to fetch slots.');
//         }

//         const data = await response.json();
//         setSlots(data.slots);
//       } catch (error) {
//         console.error('Error fetching slots:', error);
//         alert(error.message);
//       }
//     };

//     fetchUsers();
//     fetchSlots();
//   }, [navigate]);

//   const handleSlotChange = (userId, slotId) => {
//     setSelectedSlot((prev) => ({ ...prev, [userId]: slotId }));
//   };

//   const handleSlotAllocation = async (userId) => {
//     const token = localStorage.getItem('token');
//     const slot = selectedSlot[userId];

//     if (!slot) {
//       alert('Please select a valid slot.');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:5000/api/admin/users/${userId}/slot/${slot}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         const data = await response.json();
//         throw new Error(data.message || 'Failed to allocate slot.');
//       }

//       alert('Slot allocated successfully.');
//     } catch (error) {
//       console.error('Error allocating slot:', error);
//       alert(error.message);
//     }
//   };

//   const handleDeleteUser = async (userId) => {
//     const token = localStorage.getItem('token');

//     try {
//       const response = await fetch(`http://localhost:5000/api/admin/users/${userId}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         const data = await response.json();
//         throw new Error(data.message || 'Failed to delete user.');
//       }

//       setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
//       alert('User deleted successfully.');
//     } catch (error) {
//       console.error('Error deleting user:', error);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="admin-users-container">
//       <h1>Registered Users</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Slot</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.role}</td>
//               <td>
//                 <select
//                   value={selectedSlot[user._id] || ''}
//                   onChange={(e) => handleSlotChange(user._id, e.target.value)}
//                 >
//                   <option value="">Select Slot</option>
//                   {slots.map((slot) => (
//                     <option key={slot._id} value={slot._id}>
//                       {slot.date} - {slot.time}
//                     </option>
//                   ))}
//                 </select>
//               </td>
//               <td>
//                 <button onClick={() => handleSlotAllocation(user._id)}>Allocate Slot</button>
//                 <button onClick={() => alert('Edit functionality not implemented yet')}>Edit</button>
//                 <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminUsers;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/AdminUsers.css';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Unauthorized access. Please log in.');
      navigate('/login');
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/users', {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || 'Failed to fetch users.');
        }

        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
        alert(error.message);
        navigate('/login');
      }
    };

    fetchUsers();
  }, [navigate]);

  const handleDeleteUser = async (userId) => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to delete user.');
      }

      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      alert('User deleted successfully.');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert(error.message);
    }
  };

  return (
    <div className="admin-users-container">
      <h1>Registered Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => alert('Edit functionality not implemented yet')}>Edit</button>
                <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
