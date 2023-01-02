import { Component } from "react"

import './index.css'

class Stopwatch extends Component {
    state = {
        isTimerRunning: false,
        timeElapsedInSeconds:0
    }


    render(){
        const {isTimerRunning , timeElapsedInSeconds} = this.state
        const time = `${this.renderMinutes()} : ${this.renderSeconds()}`
    }

    return (
        <div className = "app-container">
        <h1 className="stopwatch">Stopwatch</h1>
        <div className="watch-container">
        <div className="timer">
        <img src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" alt= "stopwatch"/>
        <p className="heading">Timer</p>

        </div>
        <p className="time-clock">{time}</p>
        <div>
            <button type="button" 
            className="button start-button"
            onClick = {this.onStartButton}
            disabled = {isTimerRunning}
            >
                Start
            </button>
            <button>
                Stop
            </button>
            <button>
                Reset
            </button>
        </div>

        </div>

        </div>
    )

}
export default Stopwatch
