import React from 'react';
import Timer from './Timer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timers: []
    };
    this.handleAddTimer = this.handleAddTimer.bind(this);
  }

  componentDidMount() {
    this.handleAddTimer();
  }

  handleAddTimer() {
    this.setState(prevState => ({
      timers: [...prevState.timers, Math.random()]
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAddTimer}>Add Timer</button>
        {this.state.timers.map((id) => (
          <Timer key={id} />
        ))}
      </div>
    );
  }
}

export default App;
