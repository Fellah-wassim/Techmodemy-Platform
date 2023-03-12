import "./App.css";
import { Hero } from "./components/Hero";
import { MeetMobot } from "./components/MeetMobot";
import { Navbar } from "./components/Navbar";
import { Training } from "./components/Training";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MeetMobot />
      <Training />
    </div>
  );
}

export default App;
