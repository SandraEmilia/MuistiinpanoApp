import { useState } from "react";
import Etusivu from "./Etusivu";
import Kurssit from "./Kurssit";
import LisääKurssi from "./LisääKurssi";
import LisääMuistiinpano from "./LisääMuistiinpano";
import Muistiinpanot from "./Muistiinpanot";
import CourseInput from "./CourseInput";
function App() {

  let data_orig = [
    {
      kurssi: "Javascript",
    },
    {
      kurssi: "Versionhallinta",
    },
    {
      kurssi: "Fysiikka",
    },
  ];

  const [data, setData] = useState(data_orig);

  const lisääRivi = (r) =>{
    setData([...data, r]);
  };  

  return (
    <div>
      <h1>MuistiinpanoApp</h1>
      <Etusivu />
      <CourseInput />
      <LisääKurssi />
      <h3>Kurssit:</h3>
      {
        data.map((d, i) => {
          return <Kurssit data={d} key={i} />
        })
      }
      <LisääMuistiinpano />
      <Muistiinpanot />
    </div>
  );
}

export default App
