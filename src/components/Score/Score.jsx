import { useState } from 'react'
import './score.css';

export default function Score(props) {
  const [scores, setScores] = useState(props.data)

  return (
    <>
    <div>
      <h3>Scores</h3>
      <ul className='scores'>
        {scores.map((s, i) => (
          <li key={i} className='score'>
            <p>{s.date}: {s.score}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

