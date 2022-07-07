import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Capacitor } from "@capacitor/core";
import { Camera, CameraResultType } from "@capacitor/camera";

function App() {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    setImageUrl(image.webPath ?? null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={imageUrl === null ? logo : imageUrl}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Capasitor.js
        </a>

        <input type="text" />

        <button onClick={takePicture}>Take picture</button>
      </header>
      {Capacitor.isNativePlatform() && (
        <p>Opened in {Capacitor.getPlatform()}</p>
      )}
    </div>
  );
}

export default App;
