import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <h1 className="text-3xl font-bold text-pink">GTA VI Landing Page</h1>
      </div>
    </main>
  );
};

export default App;
