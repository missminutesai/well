const HeroSection = () => (
  <section style={{ padding: 48, textAlign: "center" }}>
    <h2 style={{ fontSize: 32, color: "#2b3a55" }}>Welcome to Eternal Loop</h2>
    <p style={{ fontSize: 18, color: "#4a607a" }}>
      A calming space for your mind. Mood check, sanctuary, and more.
    </p>
    <a href="/mood">
      <fluent-button appearance="accent" style={{ marginTop: 24 }}>
        Start Mood Check
      </fluent-button>
    </a>
  </section>
);

export default HeroSection;