// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Cart from "./pages/Cart";
// import "./App.css";
// import Login from "./pages/login";
// import SignUp from "./pages/signin";
// import { CartProvider } from "./Context/cartcontext";

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/About" element={<About />} />
//             <Route path="/Contact" element={<Contact />} />
//             <Route path="/Cart" element={<Cart />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signin" element={<SignUp />} />
//             {/* <Route path="/signup" element={<SignUp />} /> */}
//           </Routes>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./Context/cartcontext";
import { AuthProvider } from "./Context/authcontext";
import PrivateRoute from "./components/PrivateRoute"; // The wrapper for protected routes

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Routes>
              {/* Login and SignUp are public pages */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />

              {/* Protected Routes */}
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/About"
                element={
                  <PrivateRoute>
                    <About />
                  </PrivateRoute>
                }
              />
              <Route
                path="/Contact"
                element={
                  <PrivateRoute>
                    <Contact />
                  </PrivateRoute>
                }
              />
              <Route
                path="/Cart"
                element={
                  <PrivateRoute>
                    <Cart />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
