import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.css";

function App() {
  const pageNumber = 1;
  const perPage = 9;
  const accessKey = "mn_UrozmplSp89bT1p6SAw1_Uh8F-uJz5wBB8Jmh_tk";
  const URL = "https://api.unsplash.com/search/photos";
  //const corsURL='https://cors-anywhere.herokuapp.com/'

  const [image, setImage] = useState([]);

 
    const fetchImages = async (query) => {
      try {
        const res = await axios.get(
          `${URL}?page=${pageNumber}&query=${query}&per_page=${perPage}&client_id=${accessKey}`
        );
        console.log(res);
        setImage(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    useEffect(() => {
    fetchImages("popular");
  }, []);

  return (
    <>
      <Navbar linkOne="Home" linkTwo="About Us"></Navbar>

      <SearchBar fetchImages={fetchImages}></SearchBar>

      <div className="d-flex justify-content-around flex-wrap ">
        {
        image.map((img)=>{
          return(
          <Card key={img.id} imgScr={img.urls?.regular} title={img.alt_description} downloadLink={img.links.download} />
          )
        })
       
      }
      </div>

      <Pagination />
    </>
  );
}

export default App;
