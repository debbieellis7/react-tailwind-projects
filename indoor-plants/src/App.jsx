import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Popular from "./components/Popular";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Services />
        <AboutUs />
        <Popular />
      </main>
    </>
  );
}

export default App;
