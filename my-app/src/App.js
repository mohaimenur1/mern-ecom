import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./screens/Cart";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main className="py-3">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/api/products/:id" element={<ProductScreen />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
            </Routes>

            {/* <HomeScreen /> */}
          </div>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
