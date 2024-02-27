import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  function handleGenerator() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="generator-container">
      <h1>QR Code Generator</h1>

      <div className="generate">
        <input
          type="text"
          name="input-qr"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Enter a random value"
        />
        <button onClick={handleGenerator}>Generate</button>
      </div>

      <QRCode value={qrCode} size={400} />
    </div>
  );
}
