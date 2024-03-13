import { useState } from "react";
import "./RandomColorMain.scss";

export default function RandomColorMain() {
  const [colorType, setColorType] = useState<string>("rgb");
  const [currentColor, setCurrentColor] = useState<string>("#342AAB");

  const generateColor = () => {
    const newColor = [];
    for (let i = 0; i < 3; i++) {
      newColor.push(Math.round(Math.random() * 256));
    }
    if (colorType === "rgb") {
      setCurrentColor(`rgb(${newColor[0]} ${newColor[1]} ${newColor[2]})`);
    } else if (colorType === "hex") {
      const hexColor = rgbToHex(newColor[0], newColor[1], newColor[2]);
      setCurrentColor(hexColor);
    }
  };

  function rgbToHex(r: number, g: number, b: number) {
    const toHex = (value: number) => {
      const hex = value.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    const hexR = toHex(r);
    const hexG = toHex(g);
    const hexB = toHex(b);

    return `#${hexR}${hexG}${hexB}`;
  }

  return (
    <div className="color-main" style={{ backgroundColor: currentColor }}>
      <button onClick={() => setColorType("rgb")}>Create RGB Color</button>
      <button onClick={() => setColorType("hex")}>Create HEX Color</button>
      <button onClick={generateColor}>Generate Random Color</button>
      <h1>{colorType === "rgb" ? "RGB" : "HEX"}</h1>
      <h1>{currentColor}</h1>
    </div>
  );
}
