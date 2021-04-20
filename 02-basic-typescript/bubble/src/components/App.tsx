import React from 'react';
import './App.css';
import { Options } from '../utils/const';

type AppState = {
  isSolved: boolean,
  isPaused: boolean,
}

class App extends React.Component<{}, AppState> {
  private intervalId?: number;

  constructor(props: {}) {
    super(props);

    this.state = {
      isSolved: false,
      isPaused: true,
    }
  }

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      console.log(Date.now());
    }, Options.ITERATION_DELAY);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  render() {
    return (<div className="app">
      <h1 className="app__title">Bubble Sort Visualization</h1>
      <div className="app__bars"></div>
      <div className="app__buttons">
        <button>
          New Set
        </button>
        <button>
          {this.state.isPaused ? `Start` : `Pause`}
        </button>
      </div>
      <input
        type="range"
        name=""
        id=""
        min="0"
        max="10"
        step="1"
      />
    </div>)
  }
}

export default App;
