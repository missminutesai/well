import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eternal Loop – Connection & Calm</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-primary to-accent text-white">
        <Header />
        <HeroSection />
        <Features />
        <Footer />
      </div>
    </>
  );
}