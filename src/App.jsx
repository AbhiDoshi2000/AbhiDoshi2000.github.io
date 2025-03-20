import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer
          style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            zIndex: 10,
          }}
          className="p-2 text-sm" // Override padding and font size
        />
      </div>
    </BrowserRouter>
  );
};

export default App;