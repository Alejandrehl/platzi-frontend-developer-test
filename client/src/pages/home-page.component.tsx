import React, { useState } from "react";
import Footer from "../components/footer/footer.component";
import SearchBox from "../components/search-box/search-box.component";

const HomePage = () => {
  const [searchField, setSearchField] = useState("");
  const onChangeSearch = (e: any) => setSearchField(e.target.value);

  return (
    <div className="App">
      <h1>Platzi Frontend Developer Test</h1>
      <SearchBox
        searchField={searchField}
        onChangeSearch={onChangeSearch}
        placeholder={"Search monster"}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
