import "./NavbarCompo.css";
import { BsSearch } from "react-icons/bs";

const Navbar2SearchInput = ({ search, setSearch }) => {
  return (
    <div>
      <div className="navbar1-search-input">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <BsSearch className="navbar-search-icon" />
      </div>
    </div>
  );
};

export default Navbar2SearchInput;
