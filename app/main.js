import React, { useState } from "react"
import ReactDOM from "react-dom/client"

function Main() {
  const [currentProblem, setCurrentProblem] = useState(generateProblem())
  const [userAnswer, setUserAnswer] = useState("")

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
      alert("Congrats you won!!")
      setCurrentProblem(generateProblem())
    } else {
      alert("Sorry, You lost.")
    }
  }

  return (
    <>
      <div className="main-ui">
        <div className="main-section">
          <p className="problem">
            {currentProblem.numberOne} {currentProblem.operator} {currentProblem.numberTwo}
          </p>
          <form onSubmit={handleSubmit} action="" className="our-form">
            <input onChange={e => setUserAnswer(e.target.value)} type="text" className="our-field" autoComplete="off" autoFocus />
            <button>Submit</button>
          </form>
          <p>
            You need <span className="points-needed">10</span> more points and are allowed to make <span className="mistakes-allowed">2</span> more mistakes
          </p>
        </div>
        <ProgressBar />
      </div>
      <div className="overlay">
        <div className="overlay-inner">
          <p className="end-message"></p>
          <button className="reset-game">Start Over</button>
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
