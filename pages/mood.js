import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "@fluentui/web-components";

export default function Mood() {
  const [mood, setMood] = useState({ calm: 50, joyful: 50, open: 50 });

  const handleChange = (e) => {
    setMood({ ...mood, [e.target.name]: Number(e.target.value) });
  };

  return (
    <>
      <Header />
      <main style={{ padding: 32, maxWidth: 480, margin: "0 auto" }}>
        <h2>How are you feeling?</h2>
        <div style={{ margin: "24px 0" }}>
          <label>
            Anxious → Calm: {mood.calm}
            <fluent-slider min="0" max="100" name="calm" value={mood.calm} onInput={handleChange} />
          </label>
        </div>
        <div style={{ margin: "24px 0" }}>
          <label>
            Sad → Joyful: {mood.joyful}
            <fluent-slider min="0" max="100" name="joyful" value={mood.joyful} onInput={handleChange} />
          </label>
        </div>
        <div style={{ margin: "24px 0" }}>
          <label>
            Closed → Open: {mood.open}
            <fluent-slider min="0" max="100" name="open" value={mood.open} onInput={handleChange} />
          </label>
        </div>
        <a href="/sanctuary">
          <fluent-button appearance="accent" style={{ marginTop: 16 }}>
            Enter Sanctuary
          </fluent-button>
        </a>
      </main>
      <Footer />
    </>
  );
}