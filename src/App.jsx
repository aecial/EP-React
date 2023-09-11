import Menu from "./Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PageHeader from "./components/PageHeader";
function App() {
  return (
    <>
      <Navbar />
      <Hero imgSrc={"./src/assets/bird.png"} heroText={"The BEST Fried Itik"} />
      <PageHeader header={"Menu"} color={"white"} bg={"black"} />
      <Menu />
      <PageHeader header={"Contact Us"} color={"black"} bg={"white"} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
