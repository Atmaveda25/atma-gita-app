import React from 'react';
import type { Verse } from '../verses';

type VerseCardProps = {
  verse: Verse;
};

const VerseCard: React.FC<VerseCardProps> = ({ verse }) => {
  return (
    <div className="verse-card">
    <p className="verse-id">BG {verse.chapter}.{verse.verse}</p>
    <h2 className="sanskrit">{verse.quote}</h2>
    <p className="translation">"{verse.translation}"</p>
    <div className="meaning-box">
    <div className="meaning">
    {verse.meaning.split(';').slice(0, 10).map((line, i) => (
  <div key={i}>{line.trim()};</div>
))}

</div>
    </div>
  </div>
  
  );
};

export default VerseCard; 