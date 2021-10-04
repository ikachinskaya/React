import { Component } from "react";
import "./index.css";
class App extends Component {
  render() {
    return (
      <>
        <button onClick={() => console.log(window.innerHeight)}>
          innerHeight
        </button>
        <button onClick={() => console.log(window.innerWidth)}>
          innerWidth
        </button>
        <button onClick={() => window.open("https://ru.wikipedia.org")}>
          Open wiki
        </button>
        <button onClick={() => window.close()}>Х</button>
        <button onClick={() => console.log(window.screen)}>Screen</button>
        <button onClick={() => console.log(window.location.port)}>
          Location
        </button>
        <button
          onClick={() => window.location.assign("https://ru.wikipedia.org")}
        >
          Assign
        </button>
        <button
          onClick={() => window.location.replace("https://ru.wikipedia.org")}
        >
          Replace
        </button>
        <button onClick={() => window.location.reload()}>Reload</button>
        <button onClick={() => console.log(window.location.href)}>URL</button>
        <button onClick={() => console.log(window.location.toString())}>
          URL
        </button>
        <button onClick={() => console.log(window.navigator)}>Navigator</button>
        <button
          onClick={() =>
            window.navigator.geolocation.getCurrentPosition((pos) =>
              console.log(pos)
            )
          }
        >
          GeoLocation
        </button>
        <button onClick={() => console.log(window.navigator.userAgent)}>UserAgent</button>
      </>
    );
  }
}

export default App;

//BOM: alert, confirm, prompt, setTimeOut, setInterval