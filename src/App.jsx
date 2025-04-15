
import Etusivu from "./Etusivu";
import Kurssit from "./Kurssit";
import LisääKurssi from "./LisääKurssi";
import LisääMuistiinpano from "./LisääMuistiinpano";
import Muistiinpanot from "./Muistiinpanot";
import CourseInput from "./CourseInput";

function App() {


  return (
    <div>
      <h1>MuistiinpanoApp</h1>
      <Etusivu />
      <CourseInput  />
      <LisääKurssi  />
      <Kurssit />
      <LisääMuistiinpano />
      <Muistiinpanot />
    </div>
  );
}

export default App
