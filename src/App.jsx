
import Etusivu from "./Etusivu";
import LisääKurssi from "./LisääKurssi";
import LisääMuistiinpano from "./LisääMuistiinpano";
import CourseInput from "./CourseInput";
import MpNäkymä from "./MpNäkymä";
import { Outlet, Routes, Route } from "react-router-dom";
import Header from "./Header";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Etusivu />} />
          <Route path="/courseInput" element={<CourseInput />} />
          <Route path="lisääMuistiinpano" element={<LisääMuistiinpano />} />
          <Route path="/mpNäkymä" element={<MpNäkymä />} />
          </Route>
      </Routes>
     </div>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
export default App
