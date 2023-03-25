import React, { useState, useRef, useEffect } from "react"
import ReactDOM from "react-dom/client"

function Main() {
  const [score, setScore] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [currentProblem, setCurrentProblem] = useState(generateProblem())
  const [userAnswer, setUserAnswer] = useState("")
  const resetButton = useRef(null)

  useEffect(() => {
    if (score == 10 || mistakes == 3) {
      setTimeout(() => resetButton.current.focus(), 310)
    }
  }, [score, mistakes])

  function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1))
  }

  function generateProblem() {
    return {
      numberOne: generateNumber(10),
      numberTwo: generateNumber(10),
      operator: ["+", "-", "x"][generateNumber(2)]
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    let correctAnswer
    if (currentProblem.operator == "+") correctAnswer = currentProblem.numberOne + currentProblem.numberTwo
    if (currentProblem.operator == "-") correctAnswer = currentProblem.numberOne - currentProblem.numberTwo
    if (currentProblem.operator == "x") correctAnswer = currentProblem.numberOne * currentProblem.numberTwo

    if (correctAnswer == parseInt(userAnswer, 10)) {
      setCurrentProblem(generateProblem())
      setUserAnswer("")
      setScore(prev => prev + 1)
    } else {
      setMistakes(prev => prev + 1)
    }
  }

  function resetGame() {
    setUserAnswer("")
    setScore(0)
    setMistakes(0)
    setCurrentProblem(generateProblem())
  }

  return (
    <>
      <div className={"main-ui" + (score == 10 || mistakes == 3 ? " overlay-for-blur" : "")}>
        <div className="main-section">
          <p className="problem">
            {currentProblem.numberOne} {currentProblem.operator} {currentProblem.numberTwo}
          </p>
          <form onSubmit={handleSubmit} action="" className="our-form">
            <input value={userAnswer} onChange={e => setUserAnswer(e.target.value)} type="text" className="our-field" autoComplete="off" autoFocus />
            <button>Submit</button>
          </form>
          <p>
            You need {10 - score} more points and are allowed to make {2 - mistakes} more mistakes
          </p>
        </div>
        <ProgressBar />
      </div>
      <div className={"overlay" + (score == 10 || mistakes == 3 ? " overlay--visible" : "")}>
        <div className="overlay-inner">
          <p className="end-message">{score == 10 ? "Congrats, You Won!" : "Sorry, You lost."}</p>
          <button onClick={resetGame} ref={resetButton} className="reset-game">
            Start Over
          </button>
        </div>
      </div>
    </>
  )
}

function ProgressBar() {
  return (
    <div className="progress">
      <div className="boxes">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="progress-inner"></div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)
