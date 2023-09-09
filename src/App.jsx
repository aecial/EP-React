import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Hero imgSrc={"./src/assets/bird.png"} heroText={"The BEST Fried Itik"} />
    </>
  );
}

export default App;
