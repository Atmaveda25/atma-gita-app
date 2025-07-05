import { useNavigate } from 'react-router-dom';
import Dots from '../Dots';
import '../../index.css';


export default function Breathe() {
  const navigate = useNavigate();
  return (
<div className="screen">
      <div className="content">
      <h1>Breathe In. Let the mind settle.</h1>
<p className="translation">Close your eyes. Feel the breath enter and leave. Let the noise fall away.</p>
      
      <button className="primary" onClick={() => navigate('/question')}>I'm Ready</button>
      <Dots total={4} current={1} />
      </div>
      <div className="image-panel" />

    </div>
  );
}
 