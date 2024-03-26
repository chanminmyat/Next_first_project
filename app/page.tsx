import Hero from "./components/Hero";
import Features from "./components/Features";
import ClicknCollect from "./components/ClicknCollect";
import POS from "./components/POS";
import Stamps from "./components/Stamps";
import Analytics from "./components/Analytics";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main>
      <div className="overflow-hidden">
        <Hero />
        <Features />
        <POS />
        <ClicknCollect />
        <Stamps />
        <Analytics />
        <Contact />
      </div>
    </main>
  );
}
