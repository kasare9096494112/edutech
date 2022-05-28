import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css';
import './main'
import Footer from './components/footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Coursespage from './components/courses/Coursespage';
import Trainerspage from './components/trainers/Trainerspage';
import Events from './components/events/Events';
import Contectpage from './components/conteact/Contectpage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Coursespage />} />
        <Route path="/trainers" element={<Trainerspage/>} />
        <Route path="/contect" element={<Contectpage/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
