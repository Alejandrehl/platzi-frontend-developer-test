import React, { useState, useEffect, useContext } from "react";
import MonstersContext from "../context/monsters/monsters.context";
import Footer from "../components/footer/footer.component";
import SearchBox from "../components/search-box/search-box.component";
import CardList from "../components/card-list/card-list.component";

const HomePage = () => {
  const monstersContext = useContext(MonstersContext);
  const { getMonsters, monsters } = monstersContext;

  const [searchField, setSearchField] = useState("");
  const onChangeSearch = (e: any) => setSearchField(e.target.value);
  const filteredMonsters = monsters.filter((monster: any) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    getMonsters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>Platzi Frontend Developer Test</h1>
      <SearchBox
        searchField={searchField}
        onChangeSearch={onChangeSearch}
        placeholder={"Search monster"}
      />
      <CardList monsters={filteredMonsters} />
      <Footer />
    </div>
  );
};

export default HomePage;
