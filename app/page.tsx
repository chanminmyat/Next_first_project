import Hero from "./components/Hero";
import Features from "./components/Features";
import ClicknCollect from "./components/ClicknCollect";
import POS from "./components/POS";
import Stamps from "./components/Stamps";
import Analytics from "./components/Analytics";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main>
      <Header />
      <div className="overflow-hidden">  
        <Hero />
        <Features />
        <POS />
        <ClicknCollect />
        <Stamps />
        <Analytics />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
