import React from 'react';
import './App.css';
import { Bar } from './Bar';
import { Options } from '../utils/const';
import { generateArray } from '../utils/gen';
import { bubbleSort } from '../utils/sort';
import type { BubbleItem } from '../utils/types';


type AppState = {
  isSolved: boolean,
  isPaused: boolean,
  iteration: number,
  solution: Array<Array<BubbleItem>>,
};


export class App extends React.Component<{}, AppState> {
  private intervalId?: number;

  constructor(props: {}) {
    super(props);

    this.state = {
      isSolved: false,
      isPaused: true,
      iteration: 0,
      solution: [[]],
    }
  }

  componentDidMount() {
    this.setState({
      solution: bubbleSort(generateArray()),
    });

    this.intervalId = window.setInterval(() => {
      if (this.state.iteration < this.state.solution.length - 1) {
        this.setState((prevState: AppState): {iteration: number} => ({
          iteration: prevState.iteration + 1,
        }));
      } else {

      }
    }, Options.ITERATION_DELAY);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  render() {
    return (<div className="app">
      <h1 className="app__title">Bubble Sort Visualization</h1>
      <div className="app__bars">
        {this.state.solution[this.state.iteration]
          .map((it: BubbleItem, i: number) => (
            <Bar
              key={i}
              value={it.value}
              maxValue={Options.MAX_VALUE}
            />
        ))}
      </div>
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

      {(this.state.iteration >= this.state.solution.length - 1)
        ? <p className="app__status app__status--solved">Solved!</p>
        : <p className="app__status">Not Solved</p>
      }
    </div>)
  }
}
