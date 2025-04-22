
import Etusivu from "./Etusivu";
import LisääKurssi from "./LisääKurssi";
import LisääMuistiinpano from "./LisääMuistiinpano";
import CourseInput from "./CourseInput";
import MpNäkymä from "./MpNäkymä";
import { Outlet, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import { UseKurssiStore } from "./stores/UseKurssiStore";


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
    <div className="relative min-h-screen overflow-auto">
      <div className="fixed inset-0 bg-cover bg-center -z-10 pointer-events-none"
      style={{backgroundImage: "url(/images/taustakuva.jpg" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <Header />
      
      
      <div className="relative z-10 px-16 py-10 font-serif">
      <Outlet />
      </div>
    </div>
  );
}

function KurssienTarkistus() {
  const data = UseKurssiStore((state) => state.data);

  if (data.length === 0) {
    return <Navigate to="/" replace />;
  }
  return <LisääMuistiinpano />;
}
export default App
