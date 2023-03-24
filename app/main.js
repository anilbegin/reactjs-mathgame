import React from "react"
import ReactDOM from "react-dom/client"

function Main() {
  return (
    <>
      <div class="main-ui">
        <div class="main-section">
          <p class="problem"></p>
          <form action="" class="our-form">
            <input type="text" class="our-field" autocomplete="off" autofocus />
            <button>Submit</button>
          </form>
          <p>
            You need <span class="points-needed">10</span> more points and are allowed to make <span class="mistakes-allowed">2</span> more mistakes
          </p>
        </div>
        <div class="progress">
          <div class="boxes">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </div>
          <div class="progress-inner"></div>
        </div>
      </div>
      <div class="overlay">
        <div class="overlay-inner">
          <p class="end-message"></p>
          <button class="reset-game">Start Over</button>
        </div>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)
