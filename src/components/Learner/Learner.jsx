import { useState } from 'react'
import { initialLearners } from './data'
import Score from '../../components/Score/Score'
import './learner.css';

export default function Learner(props) {
  const [learners, setLearners] = useState(initialLearners)

  return (
    <>
    <div>
      <h1>Learners</h1>
      <ul>
        {learners.map((l, i) => (
          <li key={i} id={i}>
            <h2>{l.name}</h2>
            <p>{l.bio}</p>
            <Score data={l.scores} />
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
