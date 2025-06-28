import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main style={{ padding: 32, textAlign: "center" }}>
        <h2>Coming Soon</h2>
        <p>This page will be available in a future update.</p>
      </main>
      <Footer />
    </>
  );
}