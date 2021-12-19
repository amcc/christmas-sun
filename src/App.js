// import logo from "./logo.svg";
import "./App.css";
import "@google/model-viewer";

function App() {
  return (
    <div className="App">
      <model-viewer
        src="/models/christmas-sun.glb"
        ios-src=""
        poster="/models/christmas-sun.png"
        environment-image="neutral"
        alt="A 3D model of an astronaut"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
        ar-modes="webxr scene-viewer quick-look"
      ></model-viewer>
    </div>
  );
}

export default App;
