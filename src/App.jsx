import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-red-100">
         <h1 className="text-cyan-500"> Hellooo </h1>


        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
    
        </main>
        <Footer />
      </div>
  );
}

export default App;
