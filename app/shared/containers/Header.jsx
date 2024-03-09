import NavBar from "../components/NavBar";
import Search from "../components/Search";

//Constructing the header section
const Header = () => {
  return (
    <header className="col-start-1 col-end-13 p-2">
      <NavBar />
      <Search />
    </header>
  );
};

export default Header;
