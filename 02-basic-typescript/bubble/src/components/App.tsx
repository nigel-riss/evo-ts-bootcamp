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
  state = {
    isSolved: false,
    isPaused: true,
    iteration: 0,
    solution: [[]],
  }

  startOver(): void {
    this.setState({
      isSolved: false,
      isPaused: true,
      iteration: 0,
      solution: bubbleSort(generateArray()),
    });
  }

  componentDidMount(): void {
    this.startOver();

    this.intervalId = window.setInterval(() => {
      if (this.state.iteration < this.state.solution.length - 1
        && !this.state.isPaused) {
        this.setState((prevState: AppState): {iteration: number} => ({
          iteration: prevState.iteration + 1,
        }));
      }
    }, Options.ITERATION_DELAY);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
  }

  render(): JSX.Element {
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
        <button
          onClick={(): void => {this.startOver()}}
        >
          New Set
        </button>
        <button
          onClick={(): void => {
            this.setState((prevState: AppState): {isPaused: boolean} => ({
              isPaused: !prevState.isPaused,
            }));
          }}
        >
          {this.state.isPaused ? `Start` : `Pause`}
        </button>
      </div>
      <input
        type="range"
        min="0"
        max={this.state.solution.length - 1}
        step="1"
        value={this.state.iteration}
        onChange={(evt: React.FormEvent<HTMLInputElement>) => {
          this.setState({
            iteration: +(evt.target as HTMLTextAreaElement).value,
            isPaused: true,
          });
        }}
      />

      {(this.state.iteration >= this.state.solution.length - 1)
        ? <p className="app__status app__status--solved">Solved!</p>
        : <p className="app__status">Not Solved</p>
      }
    </div>)
  }
}
