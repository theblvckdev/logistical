import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import './assets/sass/global.scss'
import PageNotFound from "./pages/page_not_found/pageNotFound";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </Router>
  );
}

export default App;
