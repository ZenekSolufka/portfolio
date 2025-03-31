import { github, linkedin } from "./assets/images";
import {
  About,
  Contact,
  Footer,
  Home,
  Navbar,
  Work,
} from "./components/import";

function App() {
  const openResume = () => {
    window.open("/CV_Kacper_Chełstowski_2025.pdf", "_blank");
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <Navbar openResume={openResume} scrollToSection={scrollToSection} />
      <Home openResume={openResume} />
      <About />
      <Work />
      <Contact />
      <Footer />
      <ul className="fixed bottom-0 ml-2 xl:ml-14 flex flex-col items-center space-y-7">
        <li>
          <a href="https://github.com/ZenekSolufka" target="_blank">
            <img className="w-6 h-6" src={github} alt="github" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kacper-chelstowski-967a4b292/"
            target="_blank"
          >
            <img className="w-6 h-6" src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <span className="block w-[1px] h-40 bg-slate"></span>
        </li>
      </ul>
      <ul className="fixed bottom-0 right-0 mr-2 xl:mr-14 flex flex-col items-center space-y-7">
        <li>
          <a
            href="mailto:zenekch22@wp.pl"
            className="text-slate tracking-[3px] hover:text-green vertical-text font-calibre"
          >
            zenekch22@wp.pl
          </a>
        </li>
        <li>
          <span className="block w-[1px] h-40 bg-slate"></span>
        </li>
      </ul>
    </div>
  );
}

export default App;
