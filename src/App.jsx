import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Hero imgSrc={"./src/assets/bird.png"} heroText={"The BEST Fried Itik"} />
      <Menu />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
