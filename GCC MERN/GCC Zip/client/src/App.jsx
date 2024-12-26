// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Login from '../src/pages/login';
// import Register from './pages/Register';
// import Home from '../src/pages/HomePage';
// import Profile from '../src/pages/Profile';
// import Logout from '../src/pages/Logout';
// import Navbar from '../src/pages/Navbar';
// import Slots from '../src/pages/Slots';
// import AdminUsers from '../src/pages/AdminUsers'; // New page to display registered users

// const App = () => {
//   const Layout = () => {
//     const location = useLocation();
//     const hideNavbarRoutes = ['/login', '/register'];

//     const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

//     return (
//       <>
//         {shouldShowNavbar && <Navbar />}
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/exam-slots" element={<Slots />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/logout" element={<Logout />} />
//           <Route path="/admin/users" element={<AdminUsers />} /> {/* Admin Users Route */}
//         </Routes>
//       </>
//     );
//   };

//   return (
//     <Router>
//       <Layout />
//     </Router>
//   );
// };

// export default App;








import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Login from '../src/pages/login';
import Register from './pages/Register';
import Home from '../src/pages/HomePage';
import Profile from '../src/pages/Profile';
import Logout from '../src/pages/Logout';
import Navbar from '../src/pages/Navbar';
import Slots from '../src/pages/Slots';
import AdminUsers from '../src/pages/AdminUsers'; 

const App = () => {
  const Layout = () => {
    const location = useLocation();
    const hideNavbarRoutes = ['/login', '/register'];

    const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

    return (
      <>
        {shouldShowNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect root to /home */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/exam-slots" element={<Slots />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin/users" element={<AdminUsers />} /> {/* Admin Users Route */}
        </Routes>
      </>
    );
  };

  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;