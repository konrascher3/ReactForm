import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetups from "./pages/NewMeetups";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/new-meetups" element={<NewMeetups />} />
        </Routes>
      </Layout>
    </div>
  );
}
