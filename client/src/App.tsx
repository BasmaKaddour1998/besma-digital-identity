import Home from "./pages/Home";
import Founder from "./pages/Founder";

export default function App() {
  return window.location.pathname.replace(/\/$/, "") === "/about/founder" ? <Founder /> : <Home />;
}
