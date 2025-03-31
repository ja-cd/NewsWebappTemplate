import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Research from './components/pages/Research';
import Gallery from './components/pages/Gallery';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/research" element={<Research />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
