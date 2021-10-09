import useClicker from "hooks/useClicker.js";

function App() {
  const click = useClicker();
  return <h1>{click}</h1>;
}

export default App;
