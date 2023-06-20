import "./App.css";
import Landing from "./components/Landing/Landing";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPokemons, setTypes } from "./redux/pokemonsSlice";
import NavBar from "./components/NavBar/NavBar";
import { useLocation } from "react-router-dom";

function App() {
  let { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:3001/pokemons")
      .then((res) => res.json())
      .then((data) => dispatch(setPokemons(data)))
      .catch((err) => console.log(err));

    fetch("http://localhost:3001/types")
      .then((res) => res.json())
      .then((data) => dispatch(setTypes(data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <>
      {pathname !== "/" && <NavBar />}

      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
