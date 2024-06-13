import React from 'react';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0
    };
    this.clockTick = this.clockTick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  clockTick() {
    this.setState((prevState) => ({
      time: prevState.time + 1
    }));
  }

  render() {
    return (
      <div>
        Timer: {this.state.time}
      </div>
    );
  }
}

export default Timer;
