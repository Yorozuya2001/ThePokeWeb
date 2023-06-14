import "./App.css";
import Landing from "./components/Landing/Landing";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPokemons } from "./redux/pokemonsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:3001/pokemons")
      .then((res) => res.json())
      .then((data) => dispatch(setPokemons(data)));
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
