import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setMode } from "../../app/themeSlice";

const Navbar = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const toggleMode =
    theme === "light" ? "bg-white text-black" : "bg-black text-white";

  return (
    <div className={toggleMode}>
      <div className="navbar bg-red-400">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">TOGGLE-THEME</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {theme === "dark" ? (
            <div>
              <img
                onClick={() => dispatch(setMode("light"))}
                className="w-[50px] h-8 rounded-b-full mr-5"
                src="https://static.vecteezy.com/system/resources/previews/002/219/588/original/illustration-of-light-icon-free-vector.jpg"
                alt=""
              />
            </div>
          ) : (
            <div>
              <img
                onClick={() => dispatch(setMode("dark"))}
                className="w-[50px] h-8 rounded-b-full mr-5"
                src="https://i.natgeofe.com/n/818adfd7-5622-4d98-8f54-598bbf393c83/01-black-moon_2x3.jpg"
                alt=""
              />
            </div>
          )}
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
