import { useEffect, useState } from "react";
import axios from "axios";
import LocationInfo from "./components/LocationInfo";
import SearchBox from "./components/SearchBox";
import ResindentsList from "./components/ResindentsList";
import titleIntro from "./images/titleIntro.svg";
import "./loader.css";

function App() {
  const [location, setLocation] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => {
        setLocation(res.data);
        setLoader(false);
      });
  }, []);

  //console.log(location);

  return (
    <div className="App">
      <div className="imgIntro">
        <img src={titleIntro} alt="" />
      </div>
      <SearchBox setLocation={setLocation} />
      {loader ? (
        <div class="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <>
          <LocationInfo location={location} />
          <ResindentsList residents={location.residents} />
        </>
      )}
    </div>
  );
}

export default App;
