import "./styles.css";
import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      if (state.count === 0) return { count: 0 };
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="App">
      <h1>count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      quantity
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
    </div>
  );
}
