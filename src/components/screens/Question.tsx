import { useNavigate } from 'react-router-dom';
import Dots from '../Dots';
import '../../index.css';
export default function Question() {
  const navigate = useNavigate();
  return (
<div className="screen">
      <div className="content">
      <h1>What weighs on your mind?</h1>
<p className="translation">Think of a question, a worry, a crossroads — about your past, your future, or your heart.</p>

      <button className="primary" onClick={() => navigate('/reveal')}>Reveal Guidance</button>
      <Dots total={4} current={2} />
      </div>
      <div className="image-panel" />

    </div>
  );
}
 
