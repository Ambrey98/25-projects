import { useState } from "react";
import QRCode from "react-qr-code";
import "./QrCodeMain.scss";

export default function QrCodeMain() {
  const [input, setInput] = useState<string>("");
  const [currentQrCode, setCurrentQrCode] = useState<string>("");

  return (
    <div className="container">
      <h1>Qr Code Generator</h1>
      <input
        type="text"
        name="qr-code-input"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCurrentQrCode(input)}>Generate QR code</button>
      {currentQrCode && (
        <div className="qr-code-container">
          <QRCode value={currentQrCode} />
        </div>
      )}
    </div>
  );
}
