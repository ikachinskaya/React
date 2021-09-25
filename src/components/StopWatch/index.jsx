import { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0),
    };
    this.intervalId = null;
  }

  start = () => {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.tick();
      }, 1000);
    }
  };

  tick = () => {
    const { time } = this.state;
    const newTime = new Date(time.getTime() + 1000);
    this.setState({
      time: newTime,
    });
  };

  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };

  reset = () => {
    this.stop();
    this.setState({
      time: new Date(0, 0, 0, 0, 0, 0),
    });
  };
  //Запускается при монтировании, после того, как компонент отрендерился
  //Здесь можно выаолнять запросы на сервер
  componentDidMount() {
    console.log("componentDidMount");
    //this.start();
  }

  //Вызывается сразу после обновления компонента
  //Необходимо вызывать с каким-то условием
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //Вызывается перед удалением компонента из DOM
  //Для очистки памяти: удалить ненужные интервалы, таймеры и т.д.
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.intervalId);
  }

  render() {
    const { time } = this.state;
    return (
      <article>
        <h1>{time.toLocaleTimeString("ru-Ru")}</h1>
        <button onClick={this.start}>START</button>
        <button onClick={this.stop}>STOP</button>
        <button onClick={this.reset}>RESET</button>
      </article>
    );
  }
}

export default StopWatch;
