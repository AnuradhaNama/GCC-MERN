// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../pages/Navbar.css'

// const Navbar = () => {
//   const userRole = localStorage.getItem('role'); // Retrieve role from localStorage
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');  // Clear local storage and redirect to login
//   };

//   if (!userRole) {
//     return null; // Do not render navbar if the user is not logged in
//   }

//   return (
//     <nav className="navbar">
//       <h1 className="navbar-brand">GCC Hiring Platform</h1>
//       <ul className="navbar-links">
//         {userRole === 'admin' ? (
//           <>
//             <li><Link to="/admin/users">Registered Users</Link></li>
//             <li><Link to="/admin/questions">Add Questions</Link></li>
//             <li><Link to="/admin/dashboard">Dashboard</Link></li>
//             <li><button onClick={handleLogout}>Logout</button></li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/profile">Profile</Link></li>
//             <li><Link to="/exam-slot">Exam Slot</Link></li>
//             <li><Link to="/exam">Exam</Link></li>
//             <li><button onClick={handleLogout}>Logout</button></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;






import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/Navbar.css'

const Navbar = () => {
  const userRole = localStorage.getItem('role'); 
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');  
  };

  if (!userRole) {
    return null; 
  }

  return (
    <nav className="navbar">
      <h1 className="navbar-brand">GCC Hiring Platform</h1>
      <ul className="navbar-links">
        {userRole === 'admin' ? (
          <>
            <li><Link to="/admin/users">Registered Users</Link></li>
            <li><Link to="/admin/questions">Add Questions</Link></li>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/exam-slot">Exam Slot</Link></li>
            <li><Link to="/exam">Exam</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
