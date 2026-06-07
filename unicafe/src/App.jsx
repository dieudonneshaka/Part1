import { useState } from 'react'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () =>
  setGood(good + 1)

  const handleNeutralClick = () => 
  setNeutral(neutral + 1)
  
  const handleBadClick = () => 
  setBad(bad + 1)

  const all = good + neutral + bad

  const average = all === 0 ? 0 : (
  good * 1 + neutral * 0 + bad * -1) / all

  const positive = all === 0 ? 0 : (
  good / all) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}


const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average.toFixed(2)}</p>
      <p>positive {positive.toFixed(2)} %</p>
    </div>
  )
}


export default App