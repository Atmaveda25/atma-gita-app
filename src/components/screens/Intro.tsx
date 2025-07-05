import { useNavigate } from 'react-router-dom';
import Dots from '../Dots';
import '../../index.css';
export default function Intro() {
  const navigate = useNavigate();
  return (
    <div className="screen">
      <div className="content">
      <h1>Bhagavad Gita: Your Daily Dharma</h1>
<p className="translation">Breathe in. Ask. Receive timeless wisdom from Krishna.</p>
      
      <button className="primary" onClick={() => navigate('/breathe')}>Let's Start</button>
      <Dots total={4} current={0} />
      </div>
      <div className="image-panel" />

    </div>
  );
}
  