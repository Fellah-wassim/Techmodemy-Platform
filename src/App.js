import "./App.css";
import { Hero } from "./components/Hero";
import { MeetMobot } from "./components/MeetMobot";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MeetMobot />
    </div>
  );
}

export default App;
