import Home from "./pages/Home/Home";
import Navbar from "./pages/Shared/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

function App() {
  const { theme } = useSelector((state: RootState) => state.theme);

  const toggleMode =
    theme === "light" ? "bg-white text-black" : "bg-black text-white";

  return (
    <div className={toggleMode}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
