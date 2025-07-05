import { Routes, Route } from 'react-router-dom';
import Intro from './components/screens/Intro';
import Breathe from './components/screens/Breathe';
import Question from './components/screens/Question';
import Reveal from './components/screens/Reveal';

export default function App() {
  return (
    <>
      {/* Persistent background */}
      <div className="mandala-background" aria-hidden="true" />

      {/* Routed screen content */}
      <div className="screen">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/breathe" element={<Breathe />} />
          <Route path="/question" element={<Question />} />
          <Route path="/reveal" element={<Reveal />} />
        </Routes>
      </div>
    </>
  );
}
