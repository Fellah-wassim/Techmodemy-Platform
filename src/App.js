import "./App.css";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MeetMobot } from "./components/MeetMobot";
import { Navbar } from "./components/Navbar";
import { Reviews } from "./components/Reviews";
import { Training } from "./components/Training";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MeetMobot />
      <Training />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
