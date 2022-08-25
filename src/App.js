// import PreLoader from "./components/preloader";
import Loader from "./components/loader";
import Navbar from "./components/navbar";
import Navbarnew from "./components/Navbarnew";
import Homepage from "./pages/home/home";
import Login from "./pages/login/login";
import Footer from "./components/footer";
// import ContactPanel from "./components/contactPanel";
// import Sidebar from "./components/sidebar";
import Teamformation from "./pages/teamformation/teamformation";
import Ratings from "./pages/ratings/ratings";
import Your11 from "./pages/your11/your11";
import Leaderboard from "./pages/leaderboard/leaderboard";
import Webteam from "./pages/webteam";
import RatingChanges from "./pages/ratingchanges/ratingchanges";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Logout from "./pages/logout/logout";

function App() {
  return (
    <div>
      {/* <Login /> */}
      <BrowserRouter>
        <Navbarnew />
        {/* <Login /> */}
        {/* <Homepage /> */}

        {/* <Sidebar /> */}
        {/* <ContactPanel /> */}
        <Routes>
          <Route exact path="/" element={<Homepage />} loader={<Loader />} />
          <Route path="/login" element={<Login loader={<Loader />} />} />
          <Route
            path="/create-team"
            element={<Teamformation />}
            loader={<Loader />}
          />
          <Route
            path="/web-team"
            element={<Webteam />}
            loader={<Loader />}
          />
          <Route path="/ratings" element={<Ratings />} loader={<Loader />} />
          <Route path="/selected-11" element={<Your11 />} loader={<Loader />} />
          <Route
            path="/leaderboard"
            element={<Leaderboard />}
            loader={<Loader />}
          />
          <Route
            path="/changes"
            element={<RatingChanges />}
            loader={<Loader />}
          />
          <Route
            path="/logout"
            element={<Logout />}
            loader={<Loader />}
          />
          {/* <Route
            path="/event-details"
            element={<EventDetails />}
            loader={<Loader />}
          /> */}
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
