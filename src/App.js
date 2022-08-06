import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/cardlist/CardList";
import SearchInput from "./components/searchInput/SearchInput";
function App() {
  const [monsters, setMonsters] = useState([]);
  const[searchMonsters, setSearchMonsters] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setMonsters(data);
        setSearchMonsters(data);
      });
  }, []);
  const handleSearch = (e) => {
let myarr = monsters.filter((monster) => monster.name.toLowerCase().includes(e.target.value.toLowerCase()))
e.target.value == ''? setSearchMonsters(monsters): setSearchMonsters(myarr)


  }
  return (
    <div className="App">
      <h1 className="app-heading">Monster Rolodex</h1>
      <SearchInput handleChange={handleSearch}/>
      <CardList monsters={searchMonsters} />
    </div>
  );
}

export default App;
