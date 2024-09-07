import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import ServicesSmall from "./Components/ServicesSmall";
import Tours from "./Components/Tours";

export default function App() {
  return (
    <main className="data-scroll-container [data-scroll-container]">
      <Hero />
      <About />
      <div className="">
        <Tours />
      </div>
      <div id="services">
        <div className="lg:block hidden">
          <Services />
        </div>
        <div className="lg:hidden block">
          <ServicesSmall />
        </div>
      </div>
      <Footer />
    </main>
  );
}
