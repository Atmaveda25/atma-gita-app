import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dots from '../Dots';
import { verses, type Verse } from '../../verses';

export default function Reveal() {
  const [verse, setVerse] = useState<Verse | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('📚 Verses loaded:', verses.length);
    const random = Math.floor(Math.random() * verses.length);
    console.log('🎯 Random pick:', verses[random]);
    setVerse(verses[random]);
  }, []);

  return (
    <div className="screen">
      <div className="content">
        {verse ? (
          <>
            <p className="verse-id">BG {verse.chapter}.{verse.verse}</p>
            <h2 className="sanskrit">{verse.quote}</h2>
            <p className="translation">{verse.translation}</p>
            <p className="meaning">{verse.meaning}</p>

            <button className="primary" onClick={() => navigate('/question')}>
              Something else on your mind?
            </button>
            <Dots total={4} current={3} />
          </>
        ) : (
          <p>❌ No verse loaded. Check your data source or console logs.</p>
        )}
      </div>
      <div className="image-panel" />
    </div>
  );
}
