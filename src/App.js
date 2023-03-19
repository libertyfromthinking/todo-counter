import { Routes, Route } from "react-router-dom";
import Home from "Components/Home";
import Counter from "Components/Counter";
import Todos from "Components/Todos";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
};

export default App;
