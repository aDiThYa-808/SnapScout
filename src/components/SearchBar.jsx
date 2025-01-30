import React, { useState } from "react";

function SearchBar({fetchImages}) {
  const [searchTerm, setSearchTerm] = useState("");
  function handleInput(event) {
    setSearchTerm(event.target.value);
  }
  function handleSearch(){
    fetchImages(searchTerm);
  }
  return (
    <>
     <div className="container my-4 ">
      <div className="d-flex justify-content-center">
      <h1>Explore Images</h1>
      </div>
      <div className="d-flex justify-content-center my-3 mx-3">
      <input className="form-control " type="search" placeholder="Search high-resolution images" value={searchTerm} onChange={handleInput} />
      <button className="btn  btn-outline-success  mx-2" type="submit" onClick={handleSearch}><b>Search</b></button>
      </div>
     </div>
    </>
  );
}

export default SearchBar;
